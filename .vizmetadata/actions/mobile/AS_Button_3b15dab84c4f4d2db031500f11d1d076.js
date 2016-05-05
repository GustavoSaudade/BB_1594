function AS_Button_3b15dab84c4f4d2db031500f11d1d076(eventobject) {
function ___onClick_114e36bc73f0462bb2ac529a36578cde_Callback(){

}function ___onClick_8e94619d90fb46fda9511f7f72783437_Callback(){

}
FormPrincipal["FlexMenuHamburguer"].animate(
kony.ui.createAnimation({"100":{"left":"-10%","stepConfig":{"timingFunction":kony.anim.EASE}}}),
{"delay":0,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":0.25},
 {"animationEnd" : ___onClick_8e94619d90fb46fda9511f7f72783437_Callback});

FormPrincipal["FlexPrincipal"].animate(
kony.ui.createAnimation({"100":{"left":"90%","stepConfig":{"timingFunction":kony.anim.EASE}}}),
{"delay":0,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":0.25},
 {"animationEnd" : ___onClick_114e36bc73f0462bb2ac529a36578cde_Callback});
FormPrincipal["ButtonHamburguer"]["isVisible"] = false;
FormPrincipal["ButtonHamburguer2"]["isVisible"] = true;

}