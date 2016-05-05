//Form JS File
function FormPrincipal_FormPrincipal_init_seq0(eventobject) {
    loadRootCategories.call(this);
};

function FormPrincipal_Segment1_onRowClick_seq0(eventobject, sectionNumber, rowNumber) {
    clickCategory.call(this);
};

function FormPrincipal_ButtonSearch_onClick_seq0(eventobject) {
    openSearchMenu.call(this, eventobject);
};

function FormPrincipal_ButtonBack_onClick_seq0(eventobject) {
    clickCategoryBack.call(this);
};

function FormPrincipal_ButtonHamburguer2_onClick_seq0(eventobject) {
    closeHamburguer.call(this, eventobject);
};

function FormPrincipal_ButtonHamburguer_onClick_seq0(eventobject) {
    openHamburguer.call(this, eventobject);
};

function FormPrincipal_TextFieldSearch_onDone_seq0(eventobject, changedtext) {
    executeSearch.call(this);
};

function FormPrincipal_BtnCancel_onClick_seq0(eventobject) {
    closeSearchMenu.call(this, eventobject);
};

function FormPrincipal_BtnMenuHome_onClick_seq0(eventobject) {
    clickHome.call(this);
};

function FormPrincipal_BtnMenuStore_onClick_seq0(eventobject) {
    clickStore.call(this);
};

function FormPrincipal_BtnMenuCart_onClick_seq0(eventobject) {
    clickCart.call(this);
};

function addWidgetsFormPrincipal() {
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
    var ImgSearch = new kony.ui.Image2({
        "id": "ImgSearch",
        "top": "0%",
        "left": "90%",
        "width": "10%",
        "height": "100%",
        "zIndex": 1,
        "isVisible": true,
        "src": "search.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {});
    var ButtonSearch = new kony.ui.Button({
        "id": "ButtonSearch",
        "top": "0%",
        "left": "90%",
        "width": "10%",
        "height": "100%",
        "zIndex": 99,
        "isVisible": true,
        "text": null,
        "skin": "BtnMenuStore",
        "focusSkin": "BtnMenuStore",
        "onClick": FormPrincipal_ButtonSearch_onClick_seq0
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
        "onClick": FormPrincipal_ButtonBack_onClick_seq0
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
        "onClick": FormPrincipal_ButtonHamburguer2_onClick_seq0
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
        "onClick": FormPrincipal_ButtonHamburguer_onClick_seq0
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
    ImgHamburguer, ImgBack, ImgBestBuy, ImgSearch, ButtonSearch, ButtonBestBuy, ButtonBack, ButtonHamburguer2, ButtonHamburguer);
    var Segment1box = new kony.ui.FlexContainer({
        "id": "Segment1box",
        "isVisible": true,
        "orientation": null,
        "width": "100%",
        "height": "40dp",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": null
    }, {});
    var Segment1 = new kony.ui.SegmentedUI2({
        "id": "Segment1",
        "top": "10%",
        "left": "5%",
        "width": "90%",
        "height": "85%",
        "zIndex": 1,
        "isVisible": true,
        "retainSelection": false,
        "widgetDataMap": {
            "LabelSegment1": "LabelSegment1"
        },
        "data": [{
            "LabelSegment1": "Label"
        }, {
            "LabelSegment1": "Label"
        }, {
            "LabelSegment1": "Label"
        }],
        "Location": "[22,41]",
        "rowTemplate": Segment1box,
        "rowSkin": "SkinSegment",
        "rowFocusSkin": "seg2Focus",
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "separatorRequired": true,
        "separatorThickness": 1,
        "separatorColor": "64646400",
        "showScrollbars": false,
        "groupCells": false,
        "onRowClick": FormPrincipal_Segment1_onRowClick_seq0,
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});
    var LabelSegment1 = new kony.ui.Label({
        "id": "LabelSegment1",
        "top": "2%",
        "left": "2%",
        "zIndex": 1,
        "isVisible": true,
        "skin": "SkinLabelSegm"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 7
    }, {
        "textCopyable": false
    });
    Segment1box.add(
    LabelSegment1);
    var LabelSequence = new kony.ui.Label({
        "id": "LabelSequence",
        "top": "2%",
        "left": "5%",
        "minWidth": "90%",
        "maxWidth": "90.0%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Label",
        "skin": "CopyslLabel0cef052028d034c"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false
    });
    var FlexNavigation = new kony.ui.FlexContainer({
        "id": "FlexNavigation",
        "top": "8.00%",
        "left": "-0.05%",
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
    FlexNavigation.setDefaultUnit(kony.flex.DP)
    FlexNavigation.add(
    Segment1, LabelSequence);
    var TextFieldSearch = new kony.ui.TextBox2({
        "id": "TextFieldSearch",
        "top": "10%",
        "left": "5%",
        "width": "70%",
        "height": "10%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Search...",
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "placeholder": "Search...",
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "onDone": FormPrincipal_TextFieldSearch_onDone_seq0,
        "skin": "SkinTxtBoxSearch",
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
    var BtnCancel = new kony.ui.Button({
        "id": "BtnCancel",
        "top": "10%",
        "left": "77%",
        "width": "18%",
        "height": "10%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Cancel",
        "skin": "SkinBtnCancelSearch",
        "focusSkin": "SkinBtnCancelSearchFocus",
        "onClick": FormPrincipal_BtnCancel_onClick_seq0
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "pressedSkin": "SkinBtnCancelSearchFocus"
    });
    var LabelFilterBy = new kony.ui.Label({
        "id": "LabelFilterBy",
        "top": "25%",
        "left": "5%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Filter By:",
        "skin": "SkinLabelFilterBy"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false
    });
    var ListBoxSearch = new kony.ui.ListBox({
        "id": "ListBoxSearch",
        "top": "30%",
        "left": "5%",
        "width": "90%",
        "height": "10%",
        "zIndex": 1,
        "isVisible": true,
        "masterData": [
            ["Cheap", "Cheap"],
            ["Mid", "Mid Price"],
            ["Expensive", "Expensive"],
            ["none", "<Select a Filter>"]
        ],
        "selectedKey": "none",
        "skin": "SkinListBoxSearch"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "popupIcon": null,
        "applySkinsToPopup": true,
        "dropDownImage": null,
        "placeholder": null,
        "popupTitle": null,
        "tickedImage": null,
        "untickedImage": null,
        "viewType": constants.LISTBOX_VIEW_TYPE_LISTVIEW
    });
    var FlexSearch = new kony.ui.FlexContainer({
        "id": "FlexSearch",
        "top": "100%",
        "left": "0%",
        "width": "100%",
        "height": "100%",
        "zIndex": 99,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[0,450]",
        "skin": "SkinFlexSearch",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    FlexSearch.setDefaultUnit(kony.flex.DP)
    FlexSearch.add(
    TextFieldSearch, BtnCancel, LabelFilterBy, ListBoxSearch);
    var FlexPrincipal = new kony.ui.FlexContainer({
        "id": "FlexPrincipal",
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
    FlexPrincipal.setDefaultUnit(kony.flex.DP)
    FlexPrincipal.add(
    Header, FlexNavigation, FlexSearch);
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
        "onClick": FormPrincipal_BtnMenuHome_onClick_seq0
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
        "onClick": FormPrincipal_BtnMenuStore_onClick_seq0
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
        "onClick": FormPrincipal_BtnMenuCart_onClick_seq0
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
    FormPrincipal.add(
    FlexPrincipal, FlexMenuHamburguer);
    FormPrincipal.setDefaultUnit(kony.flex.DP);
};

function FormPrincipalGlobals() {
    var MenuId = [];
    FormPrincipal = new kony.ui.Form2({
        "id": "FormPrincipal",
        "enableScrolling": true,
        "bounces": true,
        "allowHorizontalBounce": true,
        "allowVerticalBounce": true,
        "pagingEnabled": false,
        "needAppMenu": false,
        "title": null,
        "enabledForIdleTimeout": false,
        "skin": "SkinPrincipal",
        "init": FormPrincipal_FormPrincipal_init_seq0,
        "layoutType": kony.flex.FREE_FORM,
        "addWidgets": addWidgetsFormPrincipal
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