var currentPage = 1;
var currentCategoryId = null;
var currentCategoryName = null;
var currentCriteria = null;


function openProductList(categoryId, categoryName) {
	currentPage = 1;
	currentCategoryId = categoryId;
	currentCategoryName = categoryName;
	currentCriteria = 'categoryPath.id=' + categoryId;

	loadCategoryProductList();
}

function loadCategoryProductList() {

	kony.print("@@@@@@@@@@@@@@@@@@@@@@@@@> SEARCHING PRODUCTS FOR CATEGORY: "
		+ currentCategoryId 
		+ " - " + currentCategoryName);

	FormProductList.LabelResults.text = 'Results for: ' + currentCategoryName;

	var inputParams = {
		serviceID: 'getProductsBySearch',
		criteria: currentCriteria,
		apiKey: 'c8ar37znr5983r6rvhzf8yra',
		pageSize: '10',
		page: currentPage.toString()
	};

	kony.application.showLoadingScreen(null,"Please Wait",constants.LOADING_SCREEN_POSITION_ONLY_CENTER, false,true,{enableMenuKey:true, enableBackKey:true});
	appmiddlewareinvokerasync(inputParams, processProductListResponse);
}

function processProductListResponse(status, productListResponse){
	if (status == 400){
		kony.application.dismissLoadingScreen();
		if (productListResponse != null && productListResponse.opstatus == 0){
			kony.print("@@@@@@@@@@@@@@@@@@@@@@@@@> SERVICE RESPONSE SUCESSFUL: "
				+ JSON.stringify(productListResponse));

			if (productListResponse.products != null && productListResponse.products.length > 0){
				//arranging in the WidGet...
				arrangeProducts(productListResponse.products);
				setPagination(productListResponse);

				FormProductList.show();
				closeHamburguer2();
			}else{
				kony.ui.Alert({
					message: "No products in this category...",
					alertType:constants.ALERT_TYPE_ERROR,
					alertTitle:"BestBuy",
					yesLabel:"OK",
					alertHandler: handle1}, {});
					
				function handle1(response){
					clickHome();
				}
			}
		}else{
			if(productListResponse.opstatus == 5001 || productListResponse.opstatus == 8009){
				kony.ui.Alert({
				message: "Please enter valid search keyword",
				alertType:constants.ALERT_TYPE_ERROR,
				alertTitle:"BestBuy",
				yesLabel:"OK"}, {});
			} else {
				kony.ui.Alert({
				message: "Service call failed with opstatus " + productListResponse.opstatus,
				alertType:constants.ALERT_TYPE_ERROR,
				alertTitle:"BestBuy",
				yesLabel:"OK"}, {});
			}
			
		}
	}
}

function arrangeProducts(products) {
	FormProductList.SegmentProdList.widgetDataMap = {
		hiddenSku: 'sku',
		ImgSegmProdList: 'image',
		LblProductName: 'name',
		LblProductPrice: 'formatedSalePrice',
		LblProductRating: 'formatedCustomerReviewAverage',
		LblFreeShipping: 'freeShippingVisibility'
	}

	for (var i in products) {
		products[i]['formatedSalePrice'] = {
			'text': (products[i]['onSale'] == 'true' ? '$ ' + products[i]['salePrice'] : '$ ' + products[i]['regularPrice']),
			'skin': (products[i]['onSale'] == 'true' ? 'SkinLabelPriceRed' : 'CopyslLabel00b4602c080a948')
		};
		products[i]['formatedCustomerReviewAverage'] = {
			'text': 'Avg User Rating: ' + products[i]['customerReviewAverage'],
			'isVisible': products[i]['customerReviewAverage'] !== 'null'
		};
		products[i]['freeShippingVisibility'] = {
			'isVisible': products[i]['freeShipping'] == 'true'
		}
	}

	FormProductList.SegmentProdList.setData(products);
	FormProductList.SegmentProdList.setVisibility(true);
	//FormProductList.FlexNavigationProduct.forceLayout();
	//FormProductList.FlexPagination.forceLayout();
}

function clickRowProd() {
	var selectedData = FormProductList.SegmentProdList.selectedItems[0];

	kony.print("@@@@@@@@@@@@@@@@@@@@@@@@@> CLICKED ON PRODUCT. SELECTED DATA = " + JSON.stringify(selectedData));
	
	currentPageReviews = 1;
	showDetail(selectedData);
}

function listProductsBySearch(criteria) {
	currentCategoryId = null;
	currentCategoryName = FormPrincipal.TextFieldSearch.text;
	currentCriteria = criteria;

	loadCategoryProductList();
}

function setPagination(results) {
	kony.print("@@@@@@@@@@@@@@@@@@@@@@@@@> SETTING PAGINATION. CURRENT PAGE = " + results.currentPage
		+ " TOTAL OF PAGES = " + parseInt(results.totalPages));

	var numberOfPages = parseInt(results.totalPages);
	var listOfPages = [["none", "<select a page>"]];
	
	if (numberOfPages >= 1){
		
		for (var i=1; i<=numberOfPages; i++){
			var listOfPagesSuplement =
				[i.toString(),i.toString()];
				
			listOfPages.push([i.toString(),i.toString()]);
		}
		
		FormProductList.ListBoxPagination.masterData = listOfPages;
		if(currentPage == 1){
			FormProductList.ListBoxPagination.selectedKey = "none";
		} else {
			FormProductList.ListBoxPagination.selectedKey = currentPage.toString();
		}
		FormProductList.LblPagination.text = "Page " + results.currentPage
			+ " of " + results.totalPages;
		FormProductList.FlexPagination.setVisibility(true);
		FormProductList.FlexNavigationProduct.forceLayout();
	} else {
		FormProductList.FlexPagination.setVisibility(false);
	}
}

function selectAPage(){
	currentPage = FormProductList.ListBoxPagination.selectedKey;
	if (currentPage == "none"){
		currentPage = "1";
	}
	loadCategoryProductList();
}
