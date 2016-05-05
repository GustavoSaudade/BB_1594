function AS_Button_b0cb271bbf3e4f61a9beacbd08a4afe0(eventobject) {
function ___onClick_fef034c2bd6f4f86a4c9b83c2168cca5_Callback(){

}function ___onClick_728ad445f8034860a5e0c60f65c19f93_Callback(){

}
FormPrincipal["FlexMenuHamburguer"].animate(
kony.ui.createAnimation({"100":{"left":"-100%","stepConfig":{"timingFunction":kony.anim.EASE}}}),
{"delay":0,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":0.25},
 {"animationEnd" : ___onClick_728ad445f8034860a5e0c60f65c19f93_Callback});

FormPrincipal["FlexPrincipal"].animate(
kony.ui.createAnimation({"100":{"left":"0%","stepConfig":{"timingFunction":kony.anim.EASE}}}),
{"delay":0,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":0.25},
 {"animationEnd" : ___onClick_fef034c2bd6f4f86a4c9b83c2168cca5_Callback});
FormPrincipal["ButtonHamburguer2"]["isVisible"] = false;
FormPrincipal["ButtonHamburguer"]["isVisible"] = true;

}