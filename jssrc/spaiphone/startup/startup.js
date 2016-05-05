//startup.js file
var appConfig = {
    appId: "Certification",
    appName: "Certification",
    appVersion: "1.0.1",
    platformVersion: null,
    serverIp: "192.168.25.5",
    serverPort: "8080",
    secureServerPort: "4443",
    isMFApp: false,
    url: "http://192.168.25.5:8080/middleware/MWServlet",
    secureurl: "http://192.168.25.5:8080/middleware/MWServlet",
    middlewareContext: "middleware"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    initializeTempSegProdDetail();
    initializeTempSegProdImgScreen();
    initializeTempSegProdList();
    initializeTempCallOut();
    FormCartGlobals();
    FormLocatorGlobals();
    FormPrincipalGlobals();
    FormProductDetailGlobals();
    FormProductImagesScreenGlobals();
    FormProductListGlobals();
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true,
        APILevel: 6500
    })
};

function themeCallBack() {
    kony.application.setApplicationInitializationEvents({
        init: appInit,
        showstartupform: function() {
            FormPrincipal.show();
        }
    });
};

function loadResources() {
    kony.theme.packagedthemes(
    ["default"]);
    globalhttpheaders = {};
    callAppMenu();
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
};

function onSuccess(oldlocalname, newlocalename, info) {
    loadResources();
};

function onFailure(errorcode, errormsg, info) {
    loadResources();
};

function initializeApp() {
    kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
    //If default locale is specified. This is set even before any other app life cycle event is called.
    kony.i18n.setDefaultLocaleAsync("en", onSuccess, onFailure, null);
};