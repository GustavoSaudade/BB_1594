var clickedProduct = {};
var processedImages = [];
var selectedKey;
var response;

function showDetail(productData) {
	clickedProduct = productData;
	FormProductDetail.LblTitleProductDetail.text = productData['name'];
	FormProductDetail.LblPriceProductDetail.text = productData['onSale'] == 'true' ? 'On Sale! '
														+ productData['formatedSalePrice']['text'] : productData['formatedSalePrice']['text'];
	FormProductDetail.LblDescriptionProductDetail.text = productData['longDescription'];
	FormProductDetail.LblAvgReview.text = (productData['customerReviewAverage'] !== 'null' ? 'Avg review: ' + productData['customerReviewAverage'] : "");
	FormProductDetail.ImgProductDetail.src = productData['image'];

	setStars(productData['customerReviewAverage']);

	kony.print("@@@@@@@@@@@@@@@@@@@@@@@@@> OPENING PRODUCT DETAIL: " + productData['sku']);
	loadProductReviews(productData['sku']);
	FormProductDetail.show();
	closeHamburguer3();
	FormProductDetail.FlexSegmProductReview.forceLayout();
	
}

function setStars(customerReviewAverage) {
	var customImg = getStarImgName(customerReviewAverage);

	if (customImg) {
		FormProductDetail.ImgStars.src = customImg;
		FormProductDetail.ImgStars.setVisibility(true);
	} else {
		FormProductDetail.ImgStars.setVisibility(false);
	}
}

function getStarImgName(rating) {
	var roundAverage = Math.round(parseInt(rating));

	if (roundAverage >= 1 && roundAverage <= 5) {
		return 'ratings_star_' + roundAverage + '.png';
	} else {
		return false;
	}
}

function loadProductReviews(sku) {
	var inputParams = {
		serviceID: 'getProductReviews',
		sku: sku,
		apiKey: 'c8ar37znr5983r6rvhzf8yra'
	};

	kony.print("@@@@@@@@@@@@@@@@@@@@@@@@@> OPENING PRODUCT REVIEWS: " + JSON.stringify(inputParams));

	kony.application.showLoadingScreen(null,"Please Wait",constants.LOADING_SCREEN_POSITION_ONLY_CENTER, false,true,{enableMenuKey:true, enableBackKey:true});
	appmiddlewareinvokerasync(inputParams, processLoadReviewsResult);
}

function processLoadReviewsResult(status, loadProductReviewResult){
	if (loadProductReviewResult == null || loadProductReviewResult.total == 0) {
		FormProductDetail.LblTotalNumberOfReviews.text = kony.i18n.getLocalizedString("key2") +" "+ "No reviews";
	} else {
		FormProductDetail.LblTotalNumberOfReviews.text = kony.i18n.getLocalizedString("key2") +" "+ loadProductReviewResult.total;
	}
	
	if (status == 400){
		kony.application.dismissLoadingScreen();
		
		if (loadProductReviewResult != null && loadProductReviewResult.opstatus == 0){
			kony.print("@@@@@@@@@@@@@@@@@@@@@@@@@> RESPONSE SUCESSFUL: " + JSON.stringify(loadProductReviewResult));
			
			closeProductReview();
			FormProductDetail.FlexSegmProductReview.setVisibility(false);
			FormProductDetail.FlexProductReviews.forceLayout();
			
			if (loadProductReviewResult.reviews != null && loadProductReviewResult.reviews.length > 0){
				setReviewsToWidget(loadProductReviewResult.reviews);
				FormProductDetail.FlexSegmProductReview.setVisibility(true);
			}
		}
		else{
			kony.ui.Alert({
				message: "Service call failed with opstatus " + loadCategoryProductListResult.opstatus,
				alertType:constants.ALERT_TYPE_ERROR,
				alertTitle:"BestBuy",
				yesLabel:"OK"}, {});
		}
	}
}

function setReviewsToWidget(reviews) {
	FormProductDetail.SegmentProductDetail.widgetDataMap = {
		LblClassification: 'title',
		LblSubmittedBy: 'reviewerName',
		ImgStarSegmProdDetail: 'scoreImage',
		LblDescriptionSegmProdDetail: 'comment'
	};

	for (var i in reviews) {
		var starImg = getStarImgName(reviews[i]['rating']);

		reviews[i]['scoreImage'] = {
			'src': starImg,
			'isVisible': starImg != false
		};

		reviews[i]['reviewerName'] = "Reviewer: " + reviews[i]['reviewerName'];
	}

	kony.print("@@@@@@@@@@@@@@@@@@@@@@@@@> SET REVIEWS TO SEGMENT: " + JSON.stringify(reviews));

	// Setting the data to the segment
	FormProductDetail.SegmentProductDetail.setData(reviews);
	FormProductDetail.SegmentProductDetail.setVisibility(true);
	FormProductDetail.FlexProductReviews.forceLayout();
	closeProductReview();
}

function clickDetailBack(){
	kony.print('@@@@@@@@@@@@@@@@@@@@@@@@@> CLICKED PRODUCT DETAIL BACK BUTTON');

	FormProductList.show();
}

function clickShowMoreImages() {
	FormProductImagesScreen.ImgProductImageScreen.setVisibility(false);
	FormProductImagesScreen.show();
	loadProductImages(clickedProduct['sku']);
}

function loadProductImages(sku) {
	var inputParams = {
		serviceID: 'getProductImages',
		sku: clickedProduct['sku'],
		apiKey: 'c8ar37znr5983r6rvhzf8yra'
	};

	kony.application.showLoadingScreen(null,"Please Wait",constants.LOADING_SCREEN_POSITION_ONLY_CENTER, false,true,{enableMenuKey:true, enableBackKey:true});
	appmiddlewareinvokerasync(inputParams, processLoadProductImagesResult);
}

function processLoadProductImagesResult(status, loadProductImagesResult){
	if (status == 400){
		kony.application.dismissLoadingScreen();

		if (loadProductImagesResult != null && loadProductImagesResult.opstatus == 0){
			kony.print("@@@@@@@@@@@@@@@@@@@@@@@@@> RESPONSE SUCESSFUL: " + JSON.stringify(loadProductImagesResult));

			setImagesToWidget(loadProductImagesResult);
		}
		else{
			kony.ui.Alert({
				message: "Service call failed with opstatus " + loadProductImagesResult.opstatus,
				alertType:constants.ALERT_TYPE_ERROR,
				alertTitle:"BestBuy",
				yesLabel:"OK"}, {});
		}
	}
}

function setImagesToWidget(images) {
	kony.print("@@@@@@@@@@@@@@@@@@@@@@@@@> SETTING IMAGES TO SCREEN");

	var imageAttributes = [
		'largeFrontImage',
		'topViewImage',
		'leftViewImage',
		'rightViewImage',
		'backViewImage',
		'remoteControlImage',
		'energyGuideImage',
		'alternateViewsImage',
		'angleImage',
		'accessoriesImage'
	];

	kony.print("@@@@@@@@@@@@@@@@@@@@@@@@@> IMAGES: " + JSON.stringify(images));

	processedImages = [];
	var imagesToListBox = [["none","<select a image>"]];

	for (var i in imageAttributes) {
		var attribute = imageAttributes[i];
		kony.print("@@@@@@@@@@@@@@@@@@@@@@@@@> CHEKING ATTRIBUTE: " + attribute + " value: " + images[attribute]);
		if (images[attribute] !== "null") {
			processedImages.push(images[attribute]);
			switch(attribute) {
				case "largeFrontImage":
					imagesToListBox.push([attribute,"Large Front"]);
					break;
				case "topViewImage":
					imagesToListBox.push([attribute,"Top View"]);
					break;
				case "leftViewImage":
					imagesToListBox.push([attribute,"Left View"]);
					break;
				case "rightViewImage":
					imagesToListBox.push([attribute,"Right View"]);
					break;
				case "backViewImage":
					imagesToListBox.push([attribute,"Back View"]);
					break;
				case "remoteControlImage":
					imagesToListBox.push([attribute,"Remote Control View"]);
					break;
				case "energyGuideImage":
					imagesToListBox.push([attribute,"Energy Guide"]);
					break;
				case "alternateViewsImage":
					imagesToListBox.push([attribute,"Alternative View"]);
					break;
				case "angleImage":
					imagesToListBox.push([attribute,"Angle View"]);
					break;
				case "accessoriesImage":
					imagesToListBox.push([attribute,"Accessories View"]);
					break;
			}
		}
	}

	kony.print("@@@@@@@@@@@@@@@@@@@@@@@@@> PROCESSED IMAGES: " + JSON.stringify(processedImages));

	// Setting the data to the listbox
	FormProductImagesScreen.ImgProductImageScreen.setVisibility(true);
	FormProductImagesScreen.ListBoxProductScreen.masterData = imagesToListBox;
	FormProductImagesScreen.ListBoxProductScreen.selectedKey = "none";
	selectedKey = "none";
	response = images;
	choiceAImage(response, selectedKey)
}

function choiceAImage(imgs, key){
	if (key == "none") {
		FormProductImagesScreen.ImgProductImageScreen.src = processedImages[0];
	} else {
		FormProductImagesScreen.ImgProductImageScreen.src = imgs[key];
	}
}

function clickChoiceAImage(){
	selectedKey = FormProductImagesScreen.ListBoxProductScreen.selectedKey;
	choiceAImage(response, selectedKey);
}

function ProductImagesClickBack() {
	FormProductDetail.show();
}

function registerTimeOut(){
	kony.application.registerForIdleTimeout(2, callback);
	
	function callback(FormProductDetail){
		clickHome();
	}
}

function internacionalization() {
	var currentLocal = kony.i18n.getCurrentLocale();
	FormProductDetail.BtnAddToCart.text=kony.i18n.getLocalizedString("key1");
}