function AS_Button_48411867455445d29fef9c9d0dd9134e(eventobject) {
function MOVE_ACTION____44585f2ae55c46fb98d331c6a00192d4_Callback(){

}function MOVE_ACTION____ae8217c476ae409297d97e6cb1372460_Callback(){

}
FormPrincipal["FlexMenuHamburguer"].animate(
kony.ui.createAnimation({"100":{"left":"-100%","stepConfig":{"timingFunction":kony.anim.EASE}}}),
{"delay":0,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":0.25},
 {"animationEnd" : MOVE_ACTION____ae8217c476ae409297d97e6cb1372460_Callback});

FormPrincipal["FlexPrincipal"].animate(
kony.ui.createAnimation({"100":{"left":"0%","stepConfig":{"timingFunction":kony.anim.EASE}}}),
{"delay":0,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":0.25},
 {"animationEnd" : MOVE_ACTION____44585f2ae55c46fb98d331c6a00192d4_Callback});
FormPrincipal["ButtonHamburguer2"]["isVisible"] = false;
FormPrincipal["ButtonHamburguer"]["isVisible"] = true;

}