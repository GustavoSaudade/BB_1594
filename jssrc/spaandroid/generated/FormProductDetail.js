//Form JS File
function FormProductDetail_FormProductDetail_preshow_seq0(eventobject) {
    internacionalization.call(this);
};

function FormProductDetail_FormProductDetail_postshow_seq0(eventobject) {
    registerTimeOut.call(this);
};

function FormProductDetail_BtnMore_onClick_seq0(eventobject) {
    clickShowMoreImages.call(this);
};

function FormProductDetail_BtnAddToCart_onClick_seq0(eventobject) {
    clickAddToCart.call(this);
};

function FormProductDetail_BtnProductReviewDown_onClick_seq0(eventobject) {
    closeProductReview.call(this, eventobject);
};

function FormProductDetail_BtnProductReviewUp_onClick_seq0(eventobject) {
    openProductReview.call(this, eventobject);
};

function FormProductDetail_ButtonBack_onClick_seq0(eventobject) {
    clickDetailBack.call(this);
};

function FormProductDetail_ButtonHamburguer2_onClick_seq0(eventobject) {
    closeHamburguer3.call(this, eventobject);
};

function FormProductDetail_ButtonHamburguer_onClick_seq0(eventobject) {
    openHamburguer3.call(this, eventobject);
};

function FormProductDetail_BtnMenuHome_onClick_seq0(eventobject) {
    clickHome.call(this);
};

function FormProductDetail_BtnMenuStore_onClick_seq0(eventobject) {
    clickStore.call(this);
};

function FormProductDetail_BtnMenuCart_onClick_seq0(eventobject) {
    clickCart.call(this);
};

function addWidgetsFormProductDetail() {
    var ImgProductDetail = new kony.ui.Image2({
        "id": "ImgProductDetail",
        "top": "5%",
        "left": "5%",
        "width": "35%",
        "height": "35%",
        "zIndex": 1,
        "isVisible": true,
        "src": "tv.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {});
    var LblTitleProductDetail = new kony.ui.Label({
        "id": "LblTitleProductDetail",
        "top": "1%",
        "left": "45%",
        "width": "50%",
        "height": "25%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Product Name",
        "skin": "CopyslLabel0c64e3f7a5a404b"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false
    });
    var LblPriceProductDetail = new kony.ui.Label({
        "id": "LblPriceProductDetail",
        "top": "25%",
        "left": "45%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Product Price",
        "skin": "CopyslLabel0916aa5f178ce44"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false
    });
    var LblAvgReview = new kony.ui.Label({
        "id": "LblAvgReview",
        "top": "35%",
        "left": "45%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Avg review: 4.0",
        "skin": "CopyslLabel0916aa5f178ce44"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false
    });
    var ImgStars = new kony.ui.Image2({
        "id": "ImgStars",
        "top": "41%",
        "left": "45%",
        "width": "40%",
        "height": "10%",
        "zIndex": 1,
        "isVisible": true,
        "src": "ratings_star_4.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {});
    var BtnMore = new kony.ui.Button({
        "id": "BtnMore",
        "top": "40%",
        "left": "10%",
        "width": "25%",
        "height": "10%",
        "zIndex": 1,
        "isVisible": true,
        "text": "More...",
        "skin": "CopyslButtonGlossBlue00b972e83091446",
        "focusSkin": "CopySkinBtnMore",
        "onClick": FormProductDetail_BtnMore_onClick_seq0
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {});
    var BtnAddToCart = new kony.ui.Button({
        "id": "BtnAddToCart",
        "top": "83%",
        "left": "5%",
        "width": "90%",
        "height": "15%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Add to Cart",
        "skin": "SkinBtn",
        "focusSkin": "btnAddToCartClicked",
        "onClick": FormProductDetail_BtnAddToCart_onClick_seq0
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {});
    var LblLineDivisor = new kony.ui.Label({
        "id": "LblLineDivisor",
        "top": "99%",
        "left": "0%",
        "width": "100%",
        "height": "1%",
        "zIndex": 1,
        "isVisible": true,
        "text": null,
        "skin": "CopyslLabel0d382537d782d46"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false
    });
    var LblDescriptionProductDetail = new kony.ui.Label({
        "id": "LblDescriptionProductDetail",
        "top": "5.0%",
        "left": "5.0%",
        "width": "90%",
        "zIndex": 1,
        "isVisible": true,
        "text": "A description about product... with his most apreciatte features",
        "skin": "CopyslLabel0f1f9688fa4d447"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false
    });
    var flexScrollContainer18338308151 = new kony.ui.FlexScrollContainer({
        "id": "flexScrollContainer18338308151",
        "top": "55.0%",
        "left": "0.0%",
        "width": "100%",
        "height": "27.0%",
        "zIndex": 1,
        "isVisible": true,
        "enableScrolling": true,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "verticalScrollIndicator": true,
        "bounces": true,
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "pagingEnabled": false,
        "Location": "[0,123]",
        "skin": "SkinScrollProductDetailDescription",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    flexScrollContainer18338308151.setDefaultUnit(kony.flex.DP);
    flexScrollContainer18338308151.add(
    LblDescriptionProductDetail);
    var FlexProductDetail = new kony.ui.FlexContainer({
        "id": "FlexProductDetail",
        "top": "8%",
        "left": "0%",
        "width": "100%",
        "height": "50%",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[0,36]",
        "skin": "CopyslFbox0479e9280fe7445",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    FlexProductDetail.setDefaultUnit(kony.flex.DP)
    FlexProductDetail.add(
    ImgProductDetail, LblTitleProductDetail, LblPriceProductDetail, LblAvgReview, ImgStars, BtnMore, BtnAddToCart, LblLineDivisor, flexScrollContainer18338308151);
    var LblTotalNumberOfReviews = new kony.ui.Label({
        "id": "LblTotalNumberOfReviews",
        "top": "2%",
        "left": "2%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Total number of reviews: 7",
        "skin": "CopyslLabel018633d2c63c746"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false
    });
    var SegmentProductDetailbox = new kony.ui.FlexContainer({
        "id": "SegmentProductDetailbox",
        "isVisible": true,
        "orientation": null,
        "width": "100%",
        "height": "40dp",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": null
    }, {});
    var SegmentProductDetail = new kony.ui.SegmentedUI2({
        "id": "SegmentProductDetail",
        "top": "15%",
        "left": "5%",
        "width": "90%",
        "height": "80%",
        "zIndex": 1,
        "isVisible": true,
        "retainSelection": false,
        "widgetDataMap": {
            "LblSubmittedBy": "LblSubmittedBy",
            "ImgStarSegmProdDetail": "ImgStarSegmProdDetail",
            "TempSegProdDetail": "TempSegProdDetail",
            "FlexTempSegmProductDetail": "FlexTempSegmProductDetail",
            "LblClassification": "LblClassification",
            "LblDescriptionSegmProdDetail": "LblDescriptionSegmProdDetail"
        },
        "data": [{
            "LblSubmittedBy": "Submitted By: Dmmnz",
            "ImgStarSegmProdDetail": "ratings_star_3.png",
            "LblClassification": "Great",
            "LblDescriptionSegmProdDetail": "Tranferred all my home movies. Easy to use. Awesome."
        }, {
            "LblSubmittedBy": "Submitted By: Dmmnz",
            "ImgStarSegmProdDetail": "ratings_star_3.png",
            "LblClassification": "Great",
            "LblDescriptionSegmProdDetail": "Tranferred all my home movies. Easy to use. Awesome."
        }, {
            "LblSubmittedBy": "Submitted By: Dmmnz",
            "ImgStarSegmProdDetail": "ratings_star_3.png",
            "LblClassification": "Great",
            "LblDescriptionSegmProdDetail": "Tranferred all my home movies. Easy to use. Awesome."
        }],
        "Location": "[22,25]",
        "rowTemplate": FlexTempSegmProductDetail,
        "rowSkin": "Copyseg08a8b6bccb3dc4d",
        "rowFocusSkin": "seg2Focus",
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "separatorRequired": true,
        "separatorThickness": 1,
        "separatorColor": "64646400",
        "showScrollbars": false,
        "viewType": constants.SEGUI_VIEW_TYPE_PAGEVIEW,
        "groupCells": false,
        "pageOnDotImage": "pageOnDot.png",
        "pageOffDotImage": "pageOffDot.png",
        "needPageIndicator": true,
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});
    SegmentProductDetailbox.add();
    var BtnProductReviewDown = new kony.ui.Button({
        "id": "BtnProductReviewDown",
        "top": "5%",
        "left": "40%",
        "width": "15%",
        "height": "10%",
        "zIndex": 99,
        "isVisible": true,
        "text": null,
        "skin": "BtnMenuStore",
        "focusSkin": "BtnMenuStore",
        "onClick": FormProductDetail_BtnProductReviewDown_onClick_seq0
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {});
    var BtnProductReviewUp = new kony.ui.Button({
        "id": "BtnProductReviewUp",
        "top": "5.00%",
        "left": "40%",
        "width": "15%",
        "height": "10%",
        "zIndex": 99,
        "isVisible": false,
        "text": null,
        "skin": "BtnMenuStore",
        "focusSkin": "BtnMenuStore",
        "onClick": FormProductDetail_BtnProductReviewUp_onClick_seq0
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {});
    var ImgDownArrow = new kony.ui.Image2({
        "id": "ImgDownArrow",
        "top": "5%",
        "left": "40%",
        "width": "15%",
        "height": "10%",
        "zIndex": 1,
        "isVisible": true,
        "src": "downarrow.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {});
    var ImgUpArrow = new kony.ui.Image2({
        "id": "ImgUpArrow",
        "top": "5%",
        "left": "40%",
        "width": "15%",
        "height": "10%",
        "zIndex": 1,
        "isVisible": false,
        "src": "uparrow.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {});
    var FlexSegmProductReview = new kony.ui.FlexContainer({
        "id": "FlexSegmProductReview",
        "top": "10%",
        "left": "0%",
        "width": "100%",
        "height": "90%",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[0,18]",
        "skin": "slFbox",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    FlexSegmProductReview.setDefaultUnit(kony.flex.DP)
    FlexSegmProductReview.add(
    SegmentProductDetail, BtnProductReviewDown, BtnProductReviewUp, ImgDownArrow, ImgUpArrow);
    var FlexProductReviews = new kony.ui.FlexContainer({
        "id": "FlexProductReviews",
        "top": "58%",
        "left": "0%",
        "width": "100%",
        "height": "42%",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[0,261]",
        "skin": "slFbox",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    FlexProductReviews.setDefaultUnit(kony.flex.DP)
    FlexProductReviews.add(
    LblTotalNumberOfReviews, FlexSegmProductReview);
    var ImgHamburguer = new kony.ui.Image2({
        "id": "ImgHamburguer",
        "top": "0%",
        "left": "0%",
        "width": "8%",
        "height": "100%",
        "zIndex": 1,
        "isVisible": true,
        "src": "humburger.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {});
    var ImgBack = new kony.ui.Image2({
        "id": "ImgBack",
        "top": "0%",
        "left": "20%",
        "width": "8%",
        "height": "100%",
        "zIndex": 1,
        "isVisible": true,
        "src": "ic_menu_back.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {});
    var ImgBestBuy = new kony.ui.Image2({
        "id": "ImgBestBuy",
        "top": "0%",
        "left": "40%",
        "width": "20%",
        "height": "100%",
        "zIndex": 1,
        "isVisible": true,
        "src": "bestbuy.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {});
    var ButtonBestBuy = new kony.ui.Button({
        "id": "ButtonBestBuy",
        "top": "0%",
        "left": "40%",
        "width": "20%",
        "height": "100%",
        "zIndex": 99,
        "isVisible": true,
        "text": null,
        "skin": "BtnMenuStore",
        "focusSkin": "BtnMenuStore"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {});
    var ButtonBack = new kony.ui.Button({
        "id": "ButtonBack",
        "top": "0%",
        "left": "20%",
        "width": "8%",
        "height": "100%",
        "zIndex": 99,
        "isVisible": true,
        "text": null,
        "skin": "BtnMenuStore",
        "focusSkin": "BtnMenuStore",
        "onClick": FormProductDetail_ButtonBack_onClick_seq0
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {});
    var ButtonHamburguer2 = new kony.ui.Button({
        "id": "ButtonHamburguer2",
        "top": "0%",
        "left": "0%",
        "width": "8%",
        "height": "100%",
        "zIndex": 99,
        "isVisible": false,
        "text": null,
        "skin": "BtnMenuStore",
        "focusSkin": "BtnMenuStore",
        "onClick": FormProductDetail_ButtonHamburguer2_onClick_seq0
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {});
    var ButtonHamburguer = new kony.ui.Button({
        "id": "ButtonHamburguer",
        "top": "0%",
        "left": "0%",
        "width": "8%",
        "height": "100%",
        "zIndex": 99,
        "isVisible": true,
        "text": null,
        "skin": "BtnMenuStore",
        "focusSkin": "BtnMenuStore",
        "onClick": FormProductDetail_ButtonHamburguer_onClick_seq0
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {});
    var Header = new kony.ui.FlexContainer({
        "id": "Header",
        "top": "0%",
        "left": "0%",
        "width": "100%",
        "height": "8%",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[0,0]",
        "skin": "SkinHeader",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    Header.setDefaultUnit(kony.flex.DP)
    Header.add(
    ImgHamburguer, ImgBack, ImgBestBuy, ButtonBestBuy, ButtonBack, ButtonHamburguer2, ButtonHamburguer);
    var FlexPrincipalProductDetail = new kony.ui.FlexContainer({
        "id": "FlexPrincipalProductDetail",
        "top": "0.00%",
        "left": "0%",
        "width": "100%",
        "height": "100%",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[0,0]",
        "skin": "CopyslFbox00e9bd7003f0a47",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    FlexPrincipalProductDetail.setDefaultUnit(kony.flex.DP)
    FlexPrincipalProductDetail.add(
    FlexProductDetail, FlexProductReviews, Header);
    var ImgMenuHambHome = new kony.ui.Image2({
        "id": "ImgMenuHambHome",
        "top": "10%",
        "left": "2%",
        "width": "30%",
        "height": "10%",
        "zIndex": 1,
        "isVisible": true,
        "src": "appmenuhome.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {});
    var ImgMenuHambStores = new kony.ui.Image2({
        "id": "ImgMenuHambStores",
        "top": "25%",
        "left": "2%",
        "width": "30%",
        "height": "10%",
        "zIndex": 1,
        "isVisible": true,
        "src": "appmenustore.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {});
    var ImgMenuHambCart = new kony.ui.Image2({
        "id": "ImgMenuHambCart",
        "top": "40%",
        "left": "2%",
        "width": "30%",
        "height": "10%",
        "zIndex": 1,
        "isVisible": true,
        "src": "appmenucart.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {});
    var LblMenuHambHome = new kony.ui.Label({
        "id": "LblMenuHambHome",
        "top": "13.0%",
        "left": "27%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Home",
        "skin": "CopyslLabel05a10a466681e40"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false
    });
    var LblMenuHambStores = new kony.ui.Label({
        "id": "LblMenuHambStores",
        "top": "28.0%",
        "left": "27%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Stores",
        "skin": "CopyslLabel05a10a466681e40"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false
    });
    var LblMenuHambCart = new kony.ui.Label({
        "id": "LblMenuHambCart",
        "top": "43.0%",
        "left": "27%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Cart",
        "skin": "CopyslLabel05a10a466681e40"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false
    });
    var BtnMenuHome = new kony.ui.Button({
        "id": "BtnMenuHome",
        "top": "10%",
        "left": "5%",
        "width": "70%",
        "height": "10%",
        "zIndex": 1,
        "isVisible": true,
        "text": null,
        "skin": "BtnMenuStore",
        "focusSkin": "BtnMenuStore",
        "onClick": FormProductDetail_BtnMenuHome_onClick_seq0
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {});
    var BtnMenuStore = new kony.ui.Button({
        "id": "BtnMenuStore",
        "top": "25%",
        "left": "5%",
        "width": "70%",
        "height": "10%",
        "zIndex": 1,
        "isVisible": true,
        "text": null,
        "skin": "BtnMenuStore",
        "focusSkin": "BtnMenuStore",
        "onClick": FormProductDetail_BtnMenuStore_onClick_seq0
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {});
    var BtnMenuCart = new kony.ui.Button({
        "id": "BtnMenuCart",
        "top": "40%",
        "left": "5%",
        "width": "70%",
        "height": "10%",
        "zIndex": 1,
        "isVisible": true,
        "text": null,
        "skin": "BtnMenuStore",
        "focusSkin": "BtnMenuStore",
        "onClick": FormProductDetail_BtnMenuCart_onClick_seq0
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {});
    var FlexMenuHamburguer = new kony.ui.FlexContainer({
        "id": "FlexMenuHamburguer",
        "top": "0.00%",
        "left": "-100%",
        "width": "100%",
        "height": "100%",
        "zIndex": 99,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[-450,0]",
        "skin": "skinHamburguer",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    FlexMenuHamburguer.setDefaultUnit(kony.flex.DP)
    FlexMenuHamburguer.add(
    ImgMenuHambHome, ImgMenuHambStores, ImgMenuHambCart, LblMenuHambHome, LblMenuHambStores, LblMenuHambCart, BtnMenuHome, BtnMenuStore, BtnMenuCart);
    FormProductDetail.add(
    FlexPrincipalProductDetail, FlexMenuHamburguer);
    FormProductDetail.setDefaultUnit(kony.flex.DP);
};

function FormProductDetailGlobals() {
    var MenuId = [];
    FormProductDetail = new kony.ui.Form2({
        "id": "FormProductDetail",
        "enableScrolling": true,
        "bounces": true,
        "allowHorizontalBounce": true,
        "allowVerticalBounce": true,
        "pagingEnabled": false,
        "needAppMenu": false,
        "title": null,
        "enabledForIdleTimeout": true,
        "skin": "SkinFormProductDetail",
        "preShow": FormProductDetail_FormProductDetail_preshow_seq0,
        "postShow": FormProductDetail_FormProductDetail_postshow_seq0,
        "layoutType": kony.flex.FREE_FORM,
        "addWidgets": addWidgetsFormProductDetail
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "retainScrollPosition": false,
        "inTransitionConfig": {
            "formTransition": "None"
        },
        "outTransitionConfig": {
            "formTransition": "None"
        }
    });
};