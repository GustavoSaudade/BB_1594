//Form JS File
function FormProductImagesScreen_ListBoxProductScreen_onSelection_seq0(eventobject) {
    clickChoiceAImage.call(this);
};

function FormProductImagesScreen_ButtonBack_onClick_seq0(eventobject) {
    ProductImagesClickBack.call(this);
};

function FormProductImagesScreen_ButtonHamburguer2_onClick_seq0(eventobject) {
    closeHamburguer4.call(this, eventobject);
};

function FormProductImagesScreen_ButtonHamburguer_onClick_seq0(eventobject) {
    openHamburguer4.call(this, eventobject);
};

function FormProductImagesScreen_BtnMenuHome_onClick_seq0(eventobject) {
    clickHome.call(this);
};

function FormProductImagesScreen_BtnMenuStore_onClick_seq0(eventobject) {
    clickStore.call(this);
};

function FormProductImagesScreen_BtnMenuCart_onClick_seq0(eventobject) {
    clickCart.call(this);
};

function addWidgetsFormProductImagesScreen() {
    var ListBoxProductScreen = new kony.ui.ListBox({
        "id": "ListBoxProductScreen",
        "top": "60%",
        "left": "5%",
        "width": "90%",
        "height": "8%",
        "zIndex": 1,
        "isVisible": true,
        "masterData": [
            ["largeFront", "Large Front"]
        ],
        "selectedKey": "largeFront",
        "skin": "CopyslListBox05221d20888594c",
        "onSelection": FormProductImagesScreen_ListBoxProductScreen_onSelection_seq0
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {});
    var LblSelectAimageToShow = new kony.ui.Label({
        "id": "LblSelectAimageToShow",
        "top": "50%",
        "left": "5%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Select a image to show:",
        "skin": "CopyslLabel067f2bcfcd7754d"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false
    });
    var ImgProductImageScreen = new kony.ui.Image2({
        "id": "ImgProductImageScreen",
        "top": "5%",
        "left": "5%",
        "width": "90%",
        "height": "40%",
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
    var FlexContentImagesScreen = new kony.ui.FlexContainer({
        "id": "FlexContentImagesScreen",
        "top": "8%",
        "left": "0%",
        "width": "100%",
        "height": "92%",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[0,36]",
        "skin": "slFbox",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    FlexContentImagesScreen.setDefaultUnit(kony.flex.DP)
    FlexContentImagesScreen.add(
    ListBoxProductScreen, LblSelectAimageToShow, ImgProductImageScreen);
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
        "onClick": FormProductImagesScreen_ButtonBack_onClick_seq0
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
        "onClick": FormProductImagesScreen_ButtonHamburguer2_onClick_seq0
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
        "onClick": FormProductImagesScreen_ButtonHamburguer_onClick_seq0
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
    var FlexPrincipalProductImagesScreen = new kony.ui.FlexContainer({
        "id": "FlexPrincipalProductImagesScreen",
        "top": "0%",
        "left": "0%",
        "width": "100%",
        "height": "100%",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[0,0]",
        "skin": "slFbox",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    FlexPrincipalProductImagesScreen.setDefaultUnit(kony.flex.DP)
    FlexPrincipalProductImagesScreen.add(
    FlexContentImagesScreen, Header);
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
        "onClick": FormProductImagesScreen_BtnMenuHome_onClick_seq0
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
        "onClick": FormProductImagesScreen_BtnMenuStore_onClick_seq0
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
        "onClick": FormProductImagesScreen_BtnMenuCart_onClick_seq0
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
    FormProductImagesScreen.add(
    FlexPrincipalProductImagesScreen, FlexMenuHamburguer);
    FormProductImagesScreen.setDefaultUnit(kony.flex.DP);
};

function FormProductImagesScreenGlobals() {
    var MenuId = [];
    FormProductImagesScreen = new kony.ui.Form2({
        "id": "FormProductImagesScreen",
        "enableScrolling": true,
        "bounces": true,
        "allowHorizontalBounce": true,
        "allowVerticalBounce": true,
        "pagingEnabled": false,
        "needAppMenu": false,
        "title": null,
        "enabledForIdleTimeout": false,
        "skin": "SkinProductImagesScreen",
        "layoutType": kony.flex.FREE_FORM,
        "addWidgets": addWidgetsFormProductImagesScreen
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