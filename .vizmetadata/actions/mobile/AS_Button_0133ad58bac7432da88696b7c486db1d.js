function AS_Button_0133ad58bac7432da88696b7c486db1d(eventobject) {
function ___onClick_826d6cdc7feb43c2bad6ebffd8472e3e_Callback(){

}function ___onClick_1b9ed3cf5723458ca499ed2d3357e56a_Callback(){

}
FormProductList["FlexPrincipalProduct"].animate(
kony.ui.createAnimation({"100":{"left":"90%","stepConfig":{"timingFunction":kony.anim.EASE}}}),
{"delay":0,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":0.25},
 {"animationEnd" : ___onClick_1b9ed3cf5723458ca499ed2d3357e56a_Callback});

FormProductList["FlexMenuHamburguer"].animate(
kony.ui.createAnimation({"100":{"left":"-10%","stepConfig":{"timingFunction":kony.anim.EASE}}}),
{"delay":0,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":0.25},
 {"animationEnd" : ___onClick_826d6cdc7feb43c2bad6ebffd8472e3e_Callback});
FormProductList["undefined"]["isVisible"] = false;
FormPrincipal["ButtonHamburguer2"]["isVisible"] = true;

}