//Form JS File
function FormCart_ButtonHamburguer2_onClick_seq0(eventobject) {
    closeHamburguer5.call(this, eventobject);
};

function FormCart_ButtonHamburguer_onClick_seq0(eventobject) {
    openHamburguer5.call(this, eventobject);
};

function FormCart_BtnMenuHome_onClick_seq0(eventobject) {
    clickHome.call(this);
};

function FormCart_BtnMenuStore_onClick_seq0(eventobject) {
    clickStore.call(this);
};

function FormCart_BtnMenuCart_onClick_seq0(eventobject) {
    clickCart.call(this);
};

function addWidgetsFormCart() {
    var LblTotal = new kony.ui.Label({
        "id": "LblTotal",
        "top": "10.0%",
        "left": "35%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Total Price: R$ 1000,00",
        "skin": "CopyslLabel0daba3cefc11548"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false
    });
    var FlexContainerTotal = new kony.ui.FlexContainer({
        "id": "FlexContainerTotal",
        "top": "0%",
        "left": "0%",
        "width": "100%",
        "height": "20%",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[0,0]",
        "skin": "slFbox",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    FlexContainerTotal.setDefaultUnit(kony.flex.PERCENTAGE)
    FlexContainerTotal.add(
    LblTotal);
    var LblWarningNewProducts = new kony.ui.Label({
        "id": "LblWarningNewProducts",
        "top": "0%",
        "left": "0%",
        "width": "100%",
        "height": "100%",
        "zIndex": 99,
        "isVisible": false,
        "text": "You have items that are New. Shipping may be delayed.",
        "skin": "SkinLblWarningNewProduct"
    }, {
        "padding": [0, 5, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_TOP_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false
    });
    var LblWarningNoNewProducts = new kony.ui.Label({
        "id": "LblWarningNoNewProducts",
        "top": "0%",
        "left": "0%",
        "width": "100%",
        "height": "100%",
        "zIndex": 1,
        "isVisible": false,
        "text": "Normal Shipping Schedule",
        "skin": "SkinLblWarningNoNewProducts"
    }, {
        "padding": [0, 5, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_TOP_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false
    });
    var FlexContainerNewProducts = new kony.ui.FlexContainer({
        "id": "FlexContainerNewProducts",
        "top": "0%",
        "left": "0%",
        "width": "100%",
        "height": "20%",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[0,82]",
        "skin": "slFbox",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    FlexContainerNewProducts.setDefaultUnit(kony.flex.DP)
    FlexContainerNewProducts.add(
    LblWarningNewProducts, LblWarningNoNewProducts);
    var FlexScrollCart = new kony.ui.FlexScrollContainer({
        "id": "FlexScrollCart",
        "top": "0dp",
        "left": "0%",
        "width": "100%",
        "height": "100%",
        "maxWidth": "0%",
        "zIndex": 1,
        "isVisible": true,
        "enableScrolling": true,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "verticalScrollIndicator": true,
        "bounces": true,
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "pagingEnabled": false,
        "Location": "[0,0]",
        "skin": "slFSbox",
        "layoutType": kony.flex.FLOW_VERTICAL
    }, {
        "padding": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    FlexScrollCart.setDefaultUnit(kony.flex.DP);
    FlexScrollCart.add(
    FlexContainerTotal, FlexContainerNewProducts);
    var FlexContentCart = new kony.ui.FlexContainer({
        "id": "FlexContentCart",
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
    FlexContentCart.setDefaultUnit(kony.flex.DP)
    FlexContentCart.add(
    FlexScrollCart);
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
    }, {
        "pressedSkin": "BtnMenuStore"
    });
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
        "onClick": FormCart_ButtonHamburguer2_onClick_seq0
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
        "onClick": FormCart_ButtonHamburguer_onClick_seq0
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
    ImgHamburguer, ImgBestBuy, ButtonBestBuy, ButtonHamburguer2, ButtonHamburguer);
    var FlexPrincipalCart = new kony.ui.FlexContainer({
        "id": "FlexPrincipalCart",
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
    FlexPrincipalCart.setDefaultUnit(kony.flex.DP)
    FlexPrincipalCart.add(
    FlexContentCart, Header);
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
        "onClick": FormCart_BtnMenuHome_onClick_seq0
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
        "focusSkin": "BtnMenuStore",
        "onClick": FormCart_BtnMenuStore_onClick_seq0
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
        "focusSkin": "BtnMenuStore",
        "onClick": FormCart_BtnMenuCart_onClick_seq0
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
    FormCart.add(
    FlexPrincipalCart, FlexMenuHamburguer);
    FormCart.setDefaultUnit(kony.flex.DP);
};

function FormCartGlobals() {
    var MenuId = [];
    FormCart = new kony.ui.Form2({
        "id": "FormCart",
        "enableScrolling": true,
        "bounces": true,
        "allowHorizontalBounce": true,
        "allowVerticalBounce": true,
        "pagingEnabled": false,
        "needAppMenu": false,
        "title": null,
        "enabledForIdleTimeout": false,
        "skin": "CopySkinPrincipalToCart",
        "layoutType": kony.flex.FREE_FORM,
        "addWidgets": addWidgetsFormCart
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