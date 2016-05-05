//Template File
function initializeTempSegProdDetail() {
    var LblClassification = new kony.ui.Label({
        "id": "LblClassification",
        "top": "5%",
        "left": "5%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Great",
        "skin": "CopyslLabel04951928019e148"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false
    });
    var LblDescriptionSegmProdDetail = new kony.ui.Label({
        "id": "LblDescriptionSegmProdDetail",
        "top": "60%",
        "left": "5%",
        "minWidth": "90%",
        "maxWidth": "90.0%",
        "minHeight": "38.0%",
        "maxHeight": "38.0%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Tranferred all my home movies. Easy to use. Awesome.",
        "skin": "CopyslLabel04951928019e148"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false
    });
    var LblSubmittedBy = new kony.ui.Label({
        "id": "LblSubmittedBy",
        "top": "20%",
        "left": "5%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Submitted By: Dmmnz",
        "skin": "CopyslLabel04951928019e148"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false
    });
    var ImgStarSegmProdDetail = new kony.ui.Image2({
        "id": "ImgStarSegmProdDetail",
        "top": "35%",
        "left": "5%",
        "width": "40%",
        "height": "20%",
        "zIndex": 1,
        "isVisible": true,
        "src": "ratings_star_3.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {});
    FlexTempSegmProductDetail = new kony.ui.FlexContainer({
        "id": "FlexTempSegmProductDetail",
        "height": "100%",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[0,0]",
        "skin": "CopyslFbox06ba23bfb686e44",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    FlexTempSegmProductDetail.setDefaultUnit(kony.flex.DP)
    FlexTempSegmProductDetail.add(
    LblClassification, LblDescriptionSegmProdDetail, LblSubmittedBy, ImgStarSegmProdDetail);
};