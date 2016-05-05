//Template File
function initializeTempSegProdImgScreen() {
    var ImgTempProductImagemScreen = new kony.ui.Image2({
        "id": "ImgTempProductImagemScreen",
        "top": "5%",
        "left": "5%",
        "width": "90%",
        "height": "90%",
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
    FlexTempProductImagesScreenSegm = new kony.ui.FlexContainer({
        "id": "FlexTempProductImagesScreenSegm",
        "height": "100%",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[0,0]",
        "skin": "CopyslFbox04d8ff1476e9b43",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    FlexTempProductImagesScreenSegm.setDefaultUnit(kony.flex.DP)
    FlexTempProductImagesScreenSegm.add(
    ImgTempProductImagemScreen);
};