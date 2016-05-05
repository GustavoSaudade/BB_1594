function AS_Button_9942614d6aff4f1d925459f06b04438c(eventobject) {
function MOVE_ACTION____7075a34876f64fb7a1689cb9cf73ef91_Callback(){

}function MOVE_ACTION____b95be4376c9e4583b36911efe367cfb1_Callback(){

}
FormProductDetail["FlexMenuHamburguer"].animate(
kony.ui.createAnimation({"100":{"left":"-100%","stepConfig":{"timingFunction":kony.anim.EASE}}}),
{"delay":0,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":0.25},
 {"animationEnd" : MOVE_ACTION____b95be4376c9e4583b36911efe367cfb1_Callback});

FormProductDetail["FlexPrincipalProductDetail"].animate(
kony.ui.createAnimation({"100":{"left":"0%","stepConfig":{"timingFunction":kony.anim.EASE}}}),
{"delay":0,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":0.25},
 {"animationEnd" : MOVE_ACTION____7075a34876f64fb7a1689cb9cf73ef91_Callback});
FormProductDetail["undefined"]["isVisible"] = false;
FormProductDetail["undefined"]["isVisible"] = true;

}