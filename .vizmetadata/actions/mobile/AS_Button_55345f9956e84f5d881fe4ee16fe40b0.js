function AS_Button_55345f9956e84f5d881fe4ee16fe40b0(eventobject) {
function MOVE_ACTION____6bd045f96241401caded42ba8da50155_Callback(){

}function MOVE_ACTION____e9aa4f26e7a34b528ee63c8f085db690_Callback(){

}
FormPrincipal["FlexMenuHamburguer"].animate(
kony.ui.createAnimation({"100":{"left":"-10%","stepConfig":{"timingFunction":kony.anim.EASE}}}),
{"delay":0,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":0.25},
 {"animationEnd" : MOVE_ACTION____e9aa4f26e7a34b528ee63c8f085db690_Callback});

FormPrincipal["FlexPrincipal"].animate(
kony.ui.createAnimation({"100":{"left":"90%","stepConfig":{"timingFunction":kony.anim.EASE}}}),
{"delay":0,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":0.25},
 {"animationEnd" : MOVE_ACTION____6bd045f96241401caded42ba8da50155_Callback});
FormPrincipal["ButtonHamburguer"]["isVisible"] = false;
FormPrincipal["ButtonHamburguer2"]["isVisible"] = true;

}