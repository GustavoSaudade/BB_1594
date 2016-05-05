function AS_Button_2562af4600a9446fb35429201e6c2ebb(eventobject) {
function MOVE_ACTION____de87e8a38e3f444e824d0732993b2651_Callback(){

}function MOVE_ACTION____f30ffe9e55b54a3fba67df516ae1a003_Callback(){

}
FormProductList["FlexPrincipalProduct"].animate(
kony.ui.createAnimation({"100":{"left":"90%","stepConfig":{"timingFunction":kony.anim.EASE}}}),
{"delay":0,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":0.25},
 {"animationEnd" : MOVE_ACTION____f30ffe9e55b54a3fba67df516ae1a003_Callback});

FormProductList["FlexMenuHamburguer"].animate(
kony.ui.createAnimation({"100":{"left":"-10%","stepConfig":{"timingFunction":kony.anim.EASE}}}),
{"delay":0,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":0.25},
 {"animationEnd" : MOVE_ACTION____de87e8a38e3f444e824d0732993b2651_Callback});
FormProductList["undefined"]["isVisible"] = false;
FormPrincipal["ButtonHamburguer2"]["isVisible"] = true;

}