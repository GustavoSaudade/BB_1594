//Template File
function initializeTempCallOut() {
    var ImgCallOut = new kony.ui.Image2({
        "id": "ImgCallOut",
        "top": "5%",
        "left": "5%",
        "width": "25%",
        "height": "30%",
        "zIndex": 1,
        "isVisible": true,
        "src": "compass.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {});
    var LblNameCallOut = new kony.ui.Label({
        "id": "LblNameCallOut",
        "top": "5%",
        "left": "35%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Store Name",
        "skin": "SkinLblCallOut"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false
    });
    var LblAdressTitleCallOut = new kony.ui.Label({
        "id": "LblAdressTitleCallOut",
        "top": "25%",
        "left": "35%",
        "zIndex": 1,
        "isVisible": true,
        "text": "ADDRESS:",
        "skin": "CopyslLabel07093d870966143"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false
    });
    var LblAddressCallOut = new kony.ui.Label({
        "id": "LblAddressCallOut",
        "top": "40%",
        "left": "35%",
        "width": "65%",
        "maxWidth": "65%",
        "zIndex": 1,
        "isVisible": true,
        "text": "13510 West Paxton St",
        "skin": "SkinLblAddressCallOut"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false
    });
    var LblHoursTitleCallOut = new kony.ui.Label({
        "id": "LblHoursTitleCallOut",
        "top": "50%",
        "left": "5%",
        "zIndex": 1,
        "isVisible": true,
        "text": "HOURS:",
        "skin": "SkinLblHoursTitleCallOut"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false
    });
    var LblHoursCallOut = new kony.ui.Label({
        "id": "LblHoursCallOut",
        "top": "60%",
        "left": "5%",
        "width": "90%",
        "height": "40%",
        "maxWidth": "90%",
        "maxHeight": "40%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Mon: 10-9; Tue: 10-9; Wed: 10-9; Thurs: 10-9; Fri: 10-9; Sat: 10-9; Sun: 11-8",
        "skin": "SkinLblhoursCallOut"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false
    });
    FlexTempCallOut = new kony.ui.FlexContainer({
        "id": "FlexTempCallOut",
        "height": "40.0%",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[0,0]",
        "skin": "SkinCallOut",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    FlexTempCallOut.setDefaultUnit(kony.flex.DP)
    FlexTempCallOut.add(
    ImgCallOut, LblNameCallOut, LblAdressTitleCallOut, LblAddressCallOut, LblHoursTitleCallOut, LblHoursCallOut);
};