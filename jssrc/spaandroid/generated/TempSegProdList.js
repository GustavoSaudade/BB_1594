//Template File
function initializeTempSegProdList() {
    var ImgSegmProdList = new kony.ui.Image2({
        "id": "ImgSegmProdList",
        "top": "20%",
        "left": "5%",
        "width": "30%",
        "height": "70%",
        "zIndex": 1,
        "isVisible": true,
        "src": "imagedrag.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {});
    var LblProductName = new kony.ui.Label({
        "id": "LblProductName",
        "top": "19.0%",
        "left": "36.0%",
        "width": "60%",
        "height": "35%",
        "minWidth": "0",
        "maxWidth": "0",
        "minHeight": "0",
        "maxHeight": "0",
        "zIndex": 1,
        "isVisible": true,
        "text": "Product Name",
        "skin": "CopyslLabel0b1dbc861f3a349"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false
    });
    var LblProductPrice = new kony.ui.Label({
        "id": "LblProductPrice",
        "top": "56.0%",
        "left": "36.0%",
        "zIndex": 1,
        "isVisible": true,
        "text": "R$ Product price",
        "skin": "SkinPriceBlack"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false
    });
    var LblProductRating = new kony.ui.Label({
        "id": "LblProductRating",
        "top": "76.0%",
        "left": "36.0%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Product Rating",
        "skin": "CopyslLabel0adf7b68793be46"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false
    });
    var LblFreeShipping = new kony.ui.Label({
        "id": "LblFreeShipping",
        "top": "0%",
        "left": "0%",
        "width": "100%",
        "height": "17.0%",
        "zIndex": 1,
        "isVisible": true,
        "text": "!!! Free Shipping !!!",
        "skin": "CopyslLabel071c50ef057c149"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false
    });
    FlexTemplSegmProdList = new kony.ui.FlexContainer({
        "id": "FlexTemplSegmProdList",
        "height": "25%",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[0,0]",
        "skin": "CopyslFbox03e4704231dec4a",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    FlexTemplSegmProdList.setDefaultUnit(kony.flex.DP)
    FlexTemplSegmProdList.add(
    ImgSegmProdList, LblProductName, LblProductPrice, LblProductRating, LblFreeShipping);
};