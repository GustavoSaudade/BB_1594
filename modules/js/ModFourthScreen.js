var shoppingCartItems = [];
var flexInCart = [];
var contadorHash =0;
var itemToRemove;
var itemPosterior;
var lastItem = false;
var indexToRemove;

function openCart() {
	if(shoppingCartItems.length == 0) {
		if (FormCart.LblCartIsEmpty == null){
			showEmptyCart();
		}
		FormCart.show();
		closeHamburguer5();
	} else {
		FormCart.show();
		closeHamburguer5();
	}
}

function clickAddToCart() {

	addToCart(clickedProduct);
	arrangeCartItems();
	
	kony.ui.Alert({
			message: "Product Successfully added to Cart!",
			alertType:constants.ALERT_TYPE_INFORMATION,
			alertTitle:"BestBuy Mobile Store",
			yesLabel:"OK"}, {});
}

function addToCart(productInfo) {
	kony.print("@@@@@@@@@@@@@@@@@@@@@@@@@> ADDING PRODUCT TO CART: " + JSON.stringify(productInfo));
	shoppingCartItems.unshift(productInfo);
	kony.print("@@@@@@@@@@@@@@@@@@@@@@@@@> ACTUAL CART STATE: " + JSON.stringify(shoppingCartItems));
}

function arrangeCartItems() {
	if(FormCart.LblCartIsEmpty == null){
		FormCart["LblTotal"]["isVisible"] = true;
		formItemCreate();
		setTotalLabel();
		walksCartProducts();
	} else {
		FormCart.FlexScrollCart.remove(FormCart.LblCartIsEmpty);
		FormCart["LblTotal"]["isVisible"] = true;
		formItemCreate();
		setTotalLabel();
		walksCartProducts();
	}
		
}

function setTotalLabel() {
	var totalPrice = 0.0;

	kony.print("@@@@@@@@@@@@@@@@@@@@@@@@@> TOTAL PRICE: " + totalPrice);
	for (var i in shoppingCartItems) {
		kony.print("@@@@@@@@@@@@@@@@@@@@@@@@@> SALE PRICE: " 
			+ shoppingCartItems[i]['salePrice'] 
			+ " - parsed: " + parseFloat(shoppingCartItems[i]['salePrice']));
			
		totalPrice += Math.floor(parseFloat(shoppingCartItems[i]['salePrice']) * 100);

		kony.print("@@@@@@@@@@@@@@@@@@@@@@@@@> TOTAL PRICE: " + totalPrice);
	}
	FormCart.LblTotal.text = 'Total: $ ' + totalPrice / 100;
}

function walksCartProducts(){
	FormCart["LblWarningNoNewProducts"]["isVisible"] = false;
	FormCart["LblWarningNewProducts"]["isVisible"] = false;
	for (var i in shoppingCartItems){
		var item = shoppingCartItems[i];
		var neww = item["neww"];
		
		if (neww == "false"){
			FormCart["LblWarningNoNewProducts"]["isVisible"] = true;
		} else {
			FormCart["LblWarningNewProducts"]["isVisible"] = true;
		}
	}
}

function RemoveToCart(eventobject){
	discoverItemToRemove(eventobject);
	
	FormCart[itemToRemove["id"]].animate(
		kony.ui.createAnimation(
			{"100":{"left":"110%","stepConfig":{"timingFunction":kony.anim.EASIN_OUT}}}),
			{"delay":0.001,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":0.55},
 			{"animationEnd" : callBackRemoveAnimation100});
	 	function callBackRemoveAnimation100(){
	 		
	 		shoppingCartItems.splice(indexToRemove, 1);
	 		flexInCart.splice(indexToRemove, 1);
	 		setTotalLabel();
	 		walksCartProducts();
	 		
	 		if(flexInCart.length < 1){
				kony.ui.Alert({
					message: "The Cart is Empty!! ",
					alertType:constants.ALERT_TYPE_ERROR,
					alertTitle:"BestBuy Mobile Store",
					yesLabel:"OK"}, {});
	
				flexInCart = [];
					
				FormCart.FlexContainerTotal.animate(
					kony.ui.createAnimation(
						{"100":{"top":"-20%","stepConfig":{"timingFunction":kony.anim.EASE}}}),
		    	   		{"delay":0,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":0.80},
		    	   		{"animationEnd" : callBackCartIsEmpty});
					
						function callBackCartIsEmpty(){}
					
				FormCart["LblWarningNoNewProducts"]["isVisible"] = false;
				FormCart["LblWarningNewProducts"]["isVisible"] = false;
				showEmptyCart();
			} else {
				removeItem();
				FormCart.forceLayout();
			}
	 	}
}

function removeItem(){
	if (lastItem == false){
		var posteriorFormMagin = parseInt(itemPosterior["top"]);
		
		if(posteriorFormMagin < -19){
		var margemAalterar = posteriorFormMagin - 21;
		var string = margemAalterar+'%';

		FormCart[itemPosterior["id"]].animate(
			kony.ui.createAnimation(
				{"100":{"top":string,"stepConfig":{"timingFunction":kony.anim.EASE}}}),
	    	    {"delay":0,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":0.80},
	    	    {"animationEnd" : MOVE_ACTION____6b93cde3861640e0b5d6adbc7ff39e5d_Callback});
	    	    
	    	    function MOVE_ACTION____6b93cde3861640e0b5d6adbc7ff39e5d_Callback(){}
	 	} else {
	 		var margemAalterar = "-20%";
	 		FormCart[itemPosterior["id"]].animate(
	 		kony.ui.createAnimation(
	 			{"100":{"top":margemAalterar,"stepConfig":{"timingFunction":kony.anim.EASE}}}),
	        	{"delay":0,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":0.55},
	        	{"animationEnd" : MOVE_ACTION____6b93cde3861640e0b5d6adbc7ff39e5d_Callback});
	     		
	     		function MOVE_ACTION____6b93cde3861640e0b5d6adbc7ff39e5d_Callback(){}     
	 	}
	} else {
		var posteriorFormMagin = parseInt(FormCart.FlexContainerTotal["top"]);
		
		if(posteriorFormMagin < -19) {
			var margemAalterar = posteriorFormMagin - 21;
			var string = margemAalterar+'%';
			
			FormCart[FormCart.FlexContainerTotal["id"]].animate(
			kony.ui.createAnimation(
				{"100":{"top":string,"stepConfig":{"timingFunction":kony.anim.EASE}}}),
	    	    {"delay":0,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":0.80},
	    	    {"animationEnd" : callBackFlexTotalAnimation});
	    	    
	    	    function callBackFlexTotalAnimation(){}
			
		} else {
			var margemAalterar = "-20%";
	 		FormCart[FormCart.FlexContainerTotal["id"]].animate(
	 		kony.ui.createAnimation(
	 			{"100":{"top":margemAalterar,"stepConfig":{"timingFunction":kony.anim.EASE}}}),
	        	{"delay":0,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":0.55},
	        	{"animationEnd" : MOVE_ACTION____6b93cde3861640e0b5d6adbc7ff39e5d_Callback});
	     		
	     		function MOVE_ACTION____6b93cde3861640e0b5d6adbc7ff39e5d_Callback(){} 
		}
	}
}

function discoverItemToRemove(eventobject){
	
	itemToRemove = eventobject["parent"];
	indexToRemove = flexInCart.indexOf(itemToRemove);
	if(indexToRemove > -1){
		itemPosterior = flexInCart[indexToRemove + 1];
		if(itemPosterior == null){
			lastItem = true;
		} else {
			lastItem = false;
		}
	} else {
		kony.ui.Alert({
			message: "itemToRemove do not find in the cart!!!",
			alertType:constants.ALERT_TYPE_ERROR,
			alertTitle:"BestBuy Mobile Store",
			yesLabel:"OK"}, {});
	}
}

function showEmptyCart(){
	//=============================ajust FlexScroll native Forms...
	var posteriorFormMagin = parseInt(FormCart.FlexContainerTotal["top"]);
		
		if(posteriorFormMagin < -19) {
			var margemAalterar = posteriorFormMagin - 21;
			var string = margemAalterar+'%';
			
			FormCart[FormCart.FlexContainerTotal["id"]].animate(
			kony.ui.createAnimation(
				{"100":{"top":string,"stepConfig":{"timingFunction":kony.anim.EASE}}}),
	    	    {"delay":0,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":0.80},
	    	    {"animationEnd" : callBackFlexTotalAnimation});
	    	    
	    	    function callBackFlexTotalAnimation(){}
			
		} else {
			var margemAalterar = "-20%";
	 		FormCart[FormCart.FlexContainerTotal["id"]].animate(
	 		kony.ui.createAnimation(
	 			{"100":{"top":margemAalterar,"stepConfig":{"timingFunction":kony.anim.EASE}}}),
	        	{"delay":0,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":0.55},
	        	{"animationEnd" : MOVE_ACTION____6b93cde3861640e0b5d6adbc7ff39e5d_Callback});
	     		
	     		function MOVE_ACTION____6b93cde3861640e0b5d6adbc7ff39e5d_Callback(){} 
		}
	//==================================================================ajust FlexScroll native Forms...

	
	LblCartIsEmpty = null;
	flexInCart = [];
	
	FormCart["LblTotal"]["isVisible"] = false;
	FormCart["LblWarningNoNewProducts"]["isVisible"] = false;
	FormCart["LblWarningNewProducts"]["isVisible"] = false;
	
	var LblCartIsEmpty = new kony.ui.Label({
        	"id": "LblCartIsEmpty",
        	"top": "5%",
        	"left": "5%",
        	"maxWidth": "90%",
        	"maxHeight": "100%",
        	"zIndex": 1,
        	"isVisible": true,
        	"text": "Shopping Cart is empty. Please browse Products and add them to your Cart.",
        	"skin": "SkinLabelCartIsEmpty"
    	}, {
        	"padding": [0, 0, 0, 0],
        	"contentAlignment": constants.CONTENT_ALIGN_CENTER,
        	"marginInPixel": false,
        	"paddingInPixel": false,
        	"containerWeight": 0
    	}, {
        	"textCopyable": false
    	});
    	
    	FormCart.FlexScrollCart.addAt(LblCartIsEmpty, 0);
}

function formItemCreate(){
	var novoFlex = new kony.ui.FlexContainer({
       "id": "flexNovoProduto"+contadorHash,
       "top": "1%",
       "left": "0%",
       "height": "20%",
       "maxWidth": "100%",
       "maxHeight": "20%",
       "zIndex": 1,
       "isVisible": true,
       "clipBounds": true,
       "skin": "SkinProductLineCart",
       "layoutType": kony.flex.FREE_FORM
    }, {}, {});
    
    var LblSegmCartTitle = new kony.ui.Label({
        "id": "LblSegmCartTitle"+contadorHash,
        "top": "5%",
        "left": "0%",
        "width": "40%",
        "height": "90%",
        "minWidth": "50%",
        "maxWidth": "90%",
        "zIndex": 1,
        "isVisible": true,
        "text": clickedProduct.name,
        "skin": "slLabel"
    }, {
        "padding": [2, 2, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false
    });
    
    var LblPriceCart = new kony.ui.Label({
        "id": "LblPriceCart"+contadorHash,
        "top": "20%",
        "left": "42%",
        "width": "30%",
        "height": "30%",
        "zIndex": 1,
        "isVisible": true,
        "text": clickedProduct["formatedSalePrice"]["text"],
        "skin": "slLabel"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false
    });
    
    var ButtonCart = new kony.ui.Button({
        "id": "ButtonCart"+contadorHash,
        "top": "7%",
        "left": "77%",
        "width": "20%",
        "height": "60%",
        "zIndex": 99,
        "isVisible": true,
        "text": null,
        "skin": "SkinBtnRemoveCart",
        "focusSkin": "SkinBtnRemoveCart",
        "onClick": RemoveToCart
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {});
    
    var ImgCartRemoveItem = new kony.ui.Image2({
        "id": "ImgCartRemoveItem",
        "top": "7%",
        "left": "77%",
        "width": "20%",
        "height": "60%",
        "zIndex": 1,
        "isVisible": true,
        "src": "cartremoveitem.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {});

    novoFlex.setDefaultUnit(kony.flex.DP);
    novoFlex.add(LblSegmCartTitle, LblPriceCart, ButtonCart, ImgCartRemoveItem);
    contadorHash++; 
    FormCart.FlexScrollCart.addAt(novoFlex, 0);
    flexInCart.unshift(novoFlex);
}