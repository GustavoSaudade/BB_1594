function AS_Button_87866178f7774f2884269a2949939286(eventobject) {
function ___onClick_3dd17796439c4928a403ecb47f69ccfb_Callback(){

}function ___onClick_588208838392443688898cdcc6e5f0a6_Callback(){

}
FormProductList["FlexPrincipalProduct"].animate(
kony.ui.createAnimation({"100":{"left":"90%","stepConfig":{"timingFunction":kony.anim.EASE}}}),
{"delay":0,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":0.25},
 {"animationEnd" : ___onClick_588208838392443688898cdcc6e5f0a6_Callback});

FormProductList["FlexMenuHamburguer"].animate(
kony.ui.createAnimation({"100":{"left":"-10%","stepConfig":{"timingFunction":kony.anim.EASE}}}),
{"delay":0,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":0.25},
 {"animationEnd" : ___onClick_3dd17796439c4928a403ecb47f69ccfb_Callback});
FormProductList["undefined"]["isVisible"] = false;
FormPrincipal["ButtonHamburguer2"]["isVisible"] = true;

}