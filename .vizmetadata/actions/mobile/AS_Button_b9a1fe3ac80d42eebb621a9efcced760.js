function AS_Button_b9a1fe3ac80d42eebb621a9efcced760(eventobject) {
function ___onClick_8381e56820324195bd6c74e425dca504_Callback(){

}function ___onClick_5d9d9eb566ed4d81a8920561e0e8788c_Callback(){

}
FormPrincipal["FlexMenuHamburguer"].animate(
kony.ui.createAnimation({"100":{"left":"-10%","stepConfig":{"timingFunction":kony.anim.EASE}}}),
{"delay":0,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":0.25},
 {"animationEnd" : ___onClick_5d9d9eb566ed4d81a8920561e0e8788c_Callback});

FormPrincipal["FlexPrincipal"].animate(
kony.ui.createAnimation({"100":{"left":"90%","stepConfig":{"timingFunction":kony.anim.EASE}}}),
{"delay":0,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":0.25},
 {"animationEnd" : ___onClick_8381e56820324195bd6c74e425dca504_Callback});
FormPrincipal["ButtonHamburguer"]["isVisible"] = false;
FormPrincipal["ButtonHamburguer2"]["isVisible"] = true;

}