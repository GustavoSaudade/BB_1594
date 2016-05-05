//Form JS File
function FormLocator_TextFieldCity_onTouchStart_seq0(eventobject, x, y) {
    cleanCityCriteria.call(this);
};

function FormLocator_BtnSearchLocator_onClick_seq0(eventobject) {
    initMap.call(this);
};

function FormLocator_ButtonHamburguer2_onClick_seq0(eventobject) {
    closeHamburguer6.call(this, eventobject);
};

function FormLocator_ButtonHamburguer_onClick_seq0(eventobject) {
    openHamburguer6.call(this, eventobject);
};

function FormLocator_BtnMenuHome_onClick_seq0(eventobject) {
    clickHome.call(this);
};

function FormLocator_BtnMenuStore_onClick_seq0(eventobject) {
    clickStore.call(this);
};

function FormLocator_BtnMenuCart_onClick_seq0(eventobject) {
    clickCart.call(this);
};

function addWidgetsFormLocator() {
    var TextFieldCity = new kony.ui.TextBox2({
        "id": "TextFieldCity",
        "top": "5%",
        "left": "5%",
        "width": "55%",
        "height": "80%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Enter City...",
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "placeholder": null,
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "onTouchStart": FormLocator_TextFieldCity_onTouchStart_seq0,
        "skin": "SkinTextFieldCity",
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "autoFilter": false,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var BtnSearchLocator = new kony.ui.Button({
        "id": "BtnSearchLocator",
        "top": "5%",
        "left": "65%",
        "width": "30%",
        "height": "80%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Search!",
        "skin": "SkinBtnSearchLocator",
        "focusSkin": "CopySkinBtnSearchLocator",
        "onClick": FormLocator_BtnSearchLocator_onClick_seq0
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {});
    var FlexSearchCity = new kony.ui.FlexContainer({
        "id": "FlexSearchCity",
        "top": "8%",
        "left": "0%",
        "width": "100%",
        "height": "10%",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[0,36]",
        "skin": "slFbox",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    FlexSearchCity.setDefaultUnit(kony.flex.DP)
    FlexSearchCity.add(
    TextFieldCity, BtnSearchLocator);
    var WidgetMap = new kony.ui.Map({
        "id": "WidgetMap",
        "top": "0%",
        "left": "0%",
        "width": "100%",
        "height": "100%",
        "zIndex": 1,
        "isVisible": true,
        "mapKey": "AIzaSyCWlTAeIU5pFmTAHQ0uv8d_g0n7pqSpD7s",
        "provider": constants.MAP_PROVIDER_GOOGLE,
        "defaultPinImage": "pinb.png",
        "calloutWidth": 80
    }, {
        "containerHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "showZoomControl": true,
        "mode": constants.MAP_VIEW_MODE_NORMAL,
        "zoomLevel": 11
    });
    var FlexMap = new kony.ui.FlexContainer({
        "id": "FlexMap",
        "top": "18%",
        "left": "0%",
        "width": "100%",
        "height": "82%",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[0,81]",
        "skin": "slFbox",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    FlexMap.setDefaultUnit(kony.flex.DP)
    FlexMap.add(
    WidgetMap);
    var ButtonBestBuy = new kony.ui.Button({
        "id": "ButtonBestBuy",
        "top": "0%",
        "left": "40%",
        "width": "20%",
        "height": "100%",
        "zIndex": 1,
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
    }, {
        "pressedSkin": "BtnMenuStore"
    });
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
        "onClick": FormLocator_ButtonHamburguer2_onClick_seq0
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "pressedSkin": "BtnMenuStore"
    });
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
        "onClick": FormLocator_ButtonHamburguer_onClick_seq0
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "pressedSkin": "BtnMenuStore"
    });
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
    ButtonBestBuy, ImgHamburguer, ImgBestBuy, ButtonHamburguer2, ButtonHamburguer);
    var FlexPrincipalLocator = new kony.ui.FlexContainer({
        "id": "FlexPrincipalLocator",
        "top": "0%",
        "left": "0%",
        "width": "100%",
        "height": "100%",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[0,0]",
        "skin": "CopyslFbox063a241057f2143",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    FlexPrincipalLocator.setDefaultUnit(kony.flex.DP)
    FlexPrincipalLocator.add(
    FlexSearchCity, FlexMap, Header);
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
        "top": "12%",
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
        "top": "27%",
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
        "top": "42%",
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
        "onClick": FormLocator_BtnMenuHome_onClick_seq0
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "pressedSkin": "BtnMenuStore"
    });
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
        "focusSkin": "CopyslButtonGlossRed075ea31d60d4149",
        "onClick": FormLocator_BtnMenuStore_onClick_seq0
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "pressedSkin": "BtnMenuStore"
    });
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
        "focusSkin": "CopyslButtonGlossRed075ea31d60d4149",
        "onClick": FormLocator_BtnMenuCart_onClick_seq0
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "pressedSkin": "BtnMenuStore"
    });
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
    FormLocator.add(
    FlexPrincipalLocator, FlexMenuHamburguer);
    FormLocator.setDefaultUnit(kony.flex.DP);
};

function FormLocatorGlobals() {
    var MenuId = [];
    FormLocator = new kony.ui.Form2({
        "id": "FormLocator",
        "enableScrolling": true,
        "bounces": true,
        "allowHorizontalBounce": true,
        "allowVerticalBounce": true,
        "pagingEnabled": false,
        "needAppMenu": false,
        "title": null,
        "enabledForIdleTimeout": false,
        "skin": "SkinFormLocator",
        "layoutType": kony.flex.FREE_FORM,
        "addWidgets": addWidgetsFormLocator
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "paddingInPixel": false
    }, {
        "retainScrollPosition": false,
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE,
        "titleBar": true,
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "formAnimation": 0
        },
        "outTransitionConfig": {
            "formAnimation": 0
        },
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU
    });
};