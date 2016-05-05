var breadcrumbs = [];
var firstScreenCache = {};

function loadRootCategories() {
	kony.print('@@@@@@@@@@@@@@@@@@@@@@@@@> ROOT CATEGORIES ARE LOADING...');

	var rootCriteria = {
		id: 'cat00000',
		name: 'Home'
	}
	//clean before root push
	breadcrumbs = [];
	breadcrumbs.push(rootCriteria);

	searchCategoriesById(rootCriteria['id']);
}

function searchCategoriesById(parentCategory, parentCategoryName) {
	// Hide segment while loading...
	FormPrincipal.Segment1.setVisibility(false);

	showHideCategoryBackButton();

	kony.print('@@@@@@@@@@@@@@@@@@@@@@@@@> SUBCATEGORIES FOR: '+ parentCategory +' ARE LOADING...');

	kony.application.showLoadingScreen(null,"Please Wait",constants.LOADING_SCREEN_POSITION_ONLY_CENTER, false,true,{enableMenuKey:true, enableBackKey:true});

	if(parentCategory in firstScreenCache) {
		kony.print('@@@@@@@@@@@@@@@@@@@@@@@@@> LOADING CATEGORIES FROM CACHE:' + parentCategory);
		processCategories(firstScreenCache[parentCategory]);
	} else {
		var inputParams = {
			serviceID: 'getCategories',
			parentCategory: parentCategory,
			apiKey: 'c8ar37znr5983r6rvhzf8yra'
		};

		kony.print("@@@@@@@@@@@@@@@@@@@@@@@@@> LOADING CATEGORIES FROM SERVICE. Params: " + JSON.stringify(inputParams));

		appmiddlewareinvokerasync(inputParams, function(status, categoriesResponse) {
			if (status == 400) {
				firstScreenCache[parentCategory] = categoriesResponse;

				if (categoriesResponse.categories != null && categoriesResponse.categories.length >= 3) {
            		processCategories(categoriesResponse);

        		} else {
            		openProductList(parentCategory, parentCategoryName);
            		//clean cache
            		firstScreenCache = {};
        		}
			}
		});
	}
}

function showHideCategoryBackButton() {
	var visibility = breadcrumbs.length > 1;
	FormPrincipal.ButtonBack.setVisibility(visibility);
	FormPrincipal.ImgBack.setVisibility(visibility);
}

function processCategories(categoriesResponse){
	if (categoriesResponse != null && categoriesResponse.opstatus == 0){
		kony.print("@@@@@@@@@@@@@@@@@@@@@@@@@> RESPONSE ARE RECEIVED FROM SERVICE: "
			+ JSON.stringify(categoriesResponse));

		//arranging in the WidGet...
		arrangeCategories(categoriesResponse.categories);
	}
	else{
		kony.ui.Alert({
			message: "CALL FAILED. SERVICE SAYS: opstatus -> " + categoriesResponse.opstatus,
			alertType:constants.ALERT_TYPE_ERROR,
			alertTitle:"BestBuy Mobile Store",
			yesLabel:"OK"}, {});
	}

	kony.application.dismissLoadingScreen();
}

function arrangeCategories(categories) {
	setBreadcrumbsText();

	//Mapping the data: Widget <> Service
	FormPrincipal.Segment1.widgetDataMap = {
		hiddenId: 'id',
		LabelSegment1: 'name'
	}

	// Setting the data to segment
	FormPrincipal.Segment1.setData(categories);
	FormPrincipal.Segment1.setVisibility(true);
	FormPrincipal.FlexNavigation.forceLayout();	
}

function setBreadcrumbsText() {
	var names = [];

	for (var i in breadcrumbs) {
		names.push(breadcrumbs[i]['name']);
	}

	FormPrincipal.LabelSequence.text = names.join(' > ');
}

function clickCategory(){
	var selectedData = FormPrincipal.Segment1.selectedItems[0];
	breadcrumbs.push(selectedData);

	kony.print("@@@@@@@@@@@@@@@@@@@@@@@@@> CATEGORY ARE CLICKED!!!"
		+ " selectedData = " + JSON.stringify(selectedData));

	searchCategoriesById(selectedData['id'], selectedData['name']);
}

function clickCategoryBack(){
	kony.print('@@@@@@@@@@@@@@@@@@@@@@@@@> NAVIGATE TO BACK CATEGORY...');
	breadcrumbs.pop();
	loadLastCategory();
}

function loadLastCategory() {
	var category = breadcrumbs[breadcrumbs.length - 1];

	searchCategoriesById(category['id'], category['name']);
}

function productListNavigateToBack() {
	kony.print('@@@@@@@@@@@@@@@@@@@@@@@@@> NAVIGATE TO BACK PRODUCT...');
	breadcrumbs.pop();
	FormPrincipal.show();
	loadLastCategory();
}

function productListNavigateToBack2() {
	kony.print('@@@@@@@@@@@@@@@@@@@@@@@@@> NAVIGATE TO BACK PRODUCT...');
	FormPrincipal.show();
	closeSearchMenu();
	loadLastCategory();
	FormProductList["ButtonBack"]["isVisible"] = true;
	FormProductList["ButtonBack2"]["isVisible"] = false;
}

function executeSearch() {
	listProductsBySearch(getSearchCriteria());
	FormProductList["ButtonBack"]["isVisible"] = false;
	FormProductList["ButtonBack2"]["isVisible"] = true;
}

function getSearchCriteria() {
	var filterBy = FormPrincipal.ListBoxSearch.selectedKeyValue[0];
	var search = FormPrincipal.TextFieldSearch.text;
	var criteria = '';

	if (search == '') {
		return false;
	}

	criteria += 'search=' + search;
	criteria += getPriceRangeCriteria(filterBy);

	return criteria;
}

function getPriceRangeCriteria(rangeName) {
	return {
		'none': '',
		'Cheap': '&salePrice<=10',
		'Mid': '&salePrice>10&salePrice<100',
		'Expensive': '&salePrice>=100'
	}[rangeName];
}
