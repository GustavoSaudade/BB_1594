function AS_Button_468e87e782b545508542f3caa10b7792(eventobject) {
function ___onClick_73aacb3a24084429bb869ee35db66ee3_Callback(){

}function ___onClick_f4cb6c22c03641439efa52e2a5292659_Callback(){

}
FormPrincipal["FlexMenuHamburguer"].animate(
kony.ui.createAnimation({"100":{"left":"-10%","stepConfig":{"timingFunction":kony.anim.EASE}}}),
{"delay":0,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":0.25},
 {"animationEnd" : ___onClick_f4cb6c22c03641439efa52e2a5292659_Callback});

FormPrincipal["FlexPrincipal"].animate(
kony.ui.createAnimation({"100":{"left":"90%","stepConfig":{"timingFunction":kony.anim.EASE}}}),
{"delay":0,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":0.25},
 {"animationEnd" : ___onClick_73aacb3a24084429bb869ee35db66ee3_Callback});
FormPrincipal["ButtonHamburguer"]["isVisible"] = false;
FormPrincipal["ButtonHamburguer2"]["isVisible"] = true;

}