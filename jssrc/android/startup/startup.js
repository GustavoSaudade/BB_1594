//startup.js file
var globalhttpheaders = {};
var appConfig = {
    appId: "Certification",
    appName: "Certification",
    appVersion: "1.0.1",
    platformVersion: null,
    serverIp: "192.168.25.5",
    serverPort: "8080",
    secureServerPort: "4443",
    isDebug: true,
    middlewareContext: "middleware",
    isMFApp: false,
    eventTypes: [],
    url: "http://192.168.25.5:8080/middleware/MWServlet",
    secureurl: "http://192.168.25.5:8080/middleware/MWServlet"
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
        marginsIncludedInWidgetContainerWeight: true,
        APILevel: 6500
    })
};

function themeCallBack() {
    callAppMenu();
    kony.application.setApplicationInitializationEvents({
        init: appInit,
        showstartupform: function() {
            FormPrincipal.show();
        }
    });
};

function loadResources() {
    globalhttpheaders = {};
    sdkInitConfig = {
        "appConfig": appConfig,
        "isMFApp": appConfig.isMFApp,
        "eventTypes": appConfig.eventTypes
    }
    kony.setupsdks(sdkInitConfig, null, null);
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
};

function onSuccess(oldlocalname, newlocalename, info) {
    loadResources();
};

function onFailure(errorcode, errormsg, info) {
    loadResources();
};
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//If default locale is specified. This is set even before any other app life cycle event is called.
kony.i18n.setDefaultLocaleAsync("en", onSuccess, onFailure, null);
// If you wish to debug Application Initialization events, now is the time to
// place breakpoints.
debugger;