function AS_Button_335cfe54a29240ecb65a0346e96bedba(eventobject) {
function MOVE_ACTION____8071aa81d12a47abb49dcb5bb11ffd91_Callback(){

}function MOVE_ACTION____6474479677864ea4944bfcb9a2b510e1_Callback(){

}
FormProductList["FlexPrincipalProduct"].animate(
kony.ui.createAnimation({"100":{"left":"0%","stepConfig":{"timingFunction":kony.anim.EASE}}}),
{"delay":0,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":0.25},
 {"animationEnd" : MOVE_ACTION____6474479677864ea4944bfcb9a2b510e1_Callback});

FormProductList["FlexMenuHamburguer"].animate(
kony.ui.createAnimation({"100":{"left":"-100%","stepConfig":{"timingFunction":kony.anim.EASE}}}),
{"delay":0,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":0.25},
 {"animationEnd" : MOVE_ACTION____8071aa81d12a47abb49dcb5bb11ffd91_Callback});
FormProductList["undefined"]["isVisible"] = false;
FormProductList["undefined"]["isVisible"] = true;

}