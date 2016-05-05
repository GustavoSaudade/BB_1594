function AS_Button_4b2fcd38e8ac4e2d830c14994ec94ed0(eventobject) {
function ___onClick_92fc58ffa4c940209616bd3001efd0c7_Callback(){

}function ___onClick_64cdd28e244a41fb8bcee7c0a45e315e_Callback(){

}
FormPrincipal["FlexMenuHamburguer"].animate(
kony.ui.createAnimation({"100":{"left":"-100%","stepConfig":{"timingFunction":kony.anim.EASE}}}),
{"delay":0,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":0.25},
 {"animationEnd" : ___onClick_64cdd28e244a41fb8bcee7c0a45e315e_Callback});

FormPrincipal["FlexPrincipal"].animate(
kony.ui.createAnimation({"100":{"left":"0%","stepConfig":{"timingFunction":kony.anim.EASE}}}),
{"delay":0,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":0.25},
 {"animationEnd" : ___onClick_92fc58ffa4c940209616bd3001efd0c7_Callback});
FormPrincipal["ButtonHamburguer2"]["isVisible"] = false;
FormPrincipal["ButtonHamburguer"]["isVisible"] = true;

}