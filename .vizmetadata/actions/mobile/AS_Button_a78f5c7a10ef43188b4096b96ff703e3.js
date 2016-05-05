function AS_Button_a78f5c7a10ef43188b4096b96ff703e3(eventobject) {
function ___onClick_af78aaebcb7e4d9887472f47f9a3e5fc_Callback(){

}function ___onClick_f8c53bb01b264cffbc4eb65663bf0efb_Callback(){

}
FormPrincipal["FlexMenuHamburguer"].animate(
kony.ui.createAnimation({"100":{"left":"-100%","stepConfig":{"timingFunction":kony.anim.EASE}}}),
{"delay":0,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":0.25},
 {"animationEnd" : ___onClick_f8c53bb01b264cffbc4eb65663bf0efb_Callback});

FormPrincipal["FlexPrincipal"].animate(
kony.ui.createAnimation({"100":{"left":"0%","stepConfig":{"timingFunction":kony.anim.EASE}}}),
{"delay":0,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":0.25},
 {"animationEnd" : ___onClick_af78aaebcb7e4d9887472f47f9a3e5fc_Callback});
FormPrincipal["ButtonHamburguer2"]["isVisible"] = false;
FormPrincipal["ButtonHamburguer"]["isVisible"] = true;

}