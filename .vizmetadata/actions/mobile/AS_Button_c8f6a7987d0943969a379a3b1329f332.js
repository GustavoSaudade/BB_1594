function AS_Button_c8f6a7987d0943969a379a3b1329f332(eventobject) {
function ___onClick_4f3b3e4e757442c99d48b6c70e7ba3bd_Callback(){

}function ___onClick_57fa9330968e4cf19754b5290cfb8290_Callback(){

}
FormPrincipal["FlexMenuHamburguer"].animate(
kony.ui.createAnimation({"100":{"left":"-100%","stepConfig":{"timingFunction":kony.anim.EASE}}}),
{"delay":0,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":0.25},
 {"animationEnd" : ___onClick_57fa9330968e4cf19754b5290cfb8290_Callback});

FormPrincipal["FlexPrincipal"].animate(
kony.ui.createAnimation({"100":{"left":"0%","stepConfig":{"timingFunction":kony.anim.EASE}}}),
{"delay":0,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":0.25},
 {"animationEnd" : ___onClick_4f3b3e4e757442c99d48b6c70e7ba3bd_Callback});
FormPrincipal["ButtonHamburguer2"]["isVisible"] = false;
FormPrincipal["ButtonHamburguer"]["isVisible"] = true;

}