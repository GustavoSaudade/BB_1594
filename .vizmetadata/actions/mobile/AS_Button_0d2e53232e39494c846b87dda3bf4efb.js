function AS_Button_0d2e53232e39494c846b87dda3bf4efb(eventobject) {
function ___onClick_3c1bf60dfc344febb80bf462f2559057_Callback(){

}function ___onClick_ac6c2b836bdd4eb8888b372b374e10f8_Callback(){

}
FormPrincipal["FlexMenuHamburguer"].animate(
kony.ui.createAnimation({"100":{"left":"-10%","stepConfig":{"timingFunction":kony.anim.EASE}}}),
{"delay":0,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":0.25},
 {"animationEnd" : ___onClick_ac6c2b836bdd4eb8888b372b374e10f8_Callback});

FormPrincipal["FlexPrincipal"].animate(
kony.ui.createAnimation({"100":{"left":"90%","stepConfig":{"timingFunction":kony.anim.EASE}}}),
{"delay":0,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":0.25},
 {"animationEnd" : ___onClick_3c1bf60dfc344febb80bf462f2559057_Callback});
FormPrincipal["ButtonHamburguer"]["isVisible"] = false;
FormPrincipal["ButtonHamburguer2"]["isVisible"] = true;

}