function AS_Button_2c82d069671d47c3b6a8c08b39842a34(eventobject) {
function MOVE_ACTION____dc7e6266485b49efa964cf0a9bc3f761_Callback(){

}
FormProductDetail["FlexSegmProductReview"].animate(
kony.ui.createAnimation({"100":{"left":"10%","stepConfig":{"timingFunction":kony.anim.EASE}}}),
{"delay":0,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":0.25},
 {"animationEnd" : MOVE_ACTION____dc7e6266485b49efa964cf0a9bc3f761_Callback});
FormProductDetail["BtnProductReviewUp"]["isVisible"] = false;
FormProductDetail["BtnProductReviewDown"]["isVisible"] = true;
FormProductDetail["ImgUpArrow"]["isVisible"] = false;
FormProductDetail["ImgDownArrow"]["isVisible"] = true;

}