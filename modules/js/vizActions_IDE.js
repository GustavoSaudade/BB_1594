/*This is a auto generated file.Any changes to this file will be overwritten.*/
function closeSearchMenu(eventobject) {
	function MOVE_ACTION____23312baf7b944386b4e1c88c27164fdc_Callback(){
		FormPrincipal.ListBoxSearch.selectedKey="none";
	}
	FormPrincipal["FlexSearch"].animate(
		kony.ui.createAnimation(
			{"100":{"top":"100%","stepConfig":{"timingFunction":kony.anim.EASE}}}),
			{"delay":0,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":0.25},
 			{"animationEnd" : MOVE_ACTION____23312baf7b944386b4e1c88c27164fdc_Callback});
}

function closeHamburguer(eventobject) {
	function MOVE_ACTION____44585f2ae55c46fb98d331c6a00192d4_Callback(){}
	function MOVE_ACTION____ae8217c476ae409297d97e6cb1372460_Callback(){}

	FormPrincipal["FlexMenuHamburguer"].animate(
		kony.ui.createAnimation(
			{"100":{"left":"-100%","stepConfig":{"timingFunction":kony.anim.EASE}}}),
			{"delay":0,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":0.25},
 			{"animationEnd" : MOVE_ACTION____ae8217c476ae409297d97e6cb1372460_Callback});

	FormPrincipal["FlexPrincipal"].animate(
		kony.ui.createAnimation(
			{"100":{"left":"0%","stepConfig":{"timingFunction":kony.anim.EASE}}}),
			{"delay":0,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":0.25},
 			{"animationEnd" : MOVE_ACTION____44585f2ae55c46fb98d331c6a00192d4_Callback});
	FormPrincipal["ButtonHamburguer2"]["isVisible"] = false;
	FormPrincipal["ButtonHamburguer"]["isVisible"] = true;
}

function openHamburguer(eventobject) {
	function MOVE_ACTION____6bd045f96241401caded42ba8da50155_Callback(){

	}
	function MOVE_ACTION____e9aa4f26e7a34b528ee63c8f085db690_Callback(){

	}
	FormPrincipal["FlexMenuHamburguer"].animate(
	kony.ui.createAnimation(
		{"100":{"left":"-10%","stepConfig":{"timingFunction":kony.anim.EASE}}}),
		{"delay":0,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":0.25},
 		{"animationEnd" : MOVE_ACTION____e9aa4f26e7a34b528ee63c8f085db690_Callback});

	FormPrincipal["FlexPrincipal"].animate(
		kony.ui.createAnimation(
			{"100":{"left":"90%","stepConfig":{"timingFunction":kony.anim.EASE}}}),
			{"delay":0,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":0.25},
 			{"animationEnd" : MOVE_ACTION____6bd045f96241401caded42ba8da50155_Callback});
	FormPrincipal["ButtonHamburguer"]["isVisible"] = false;
	FormPrincipal["ButtonHamburguer2"]["isVisible"] = true;
}

function openSearchMenu(eventobject) {
	function MOVE_ACTION____7c97e08e391140b797a28ac102c0c2be_Callback(){}
	FormPrincipal["FlexSearch"].animate(
		kony.ui.createAnimation(
			{"100":{"top":"0%","stepConfig":{"timingFunction":kony.anim.EASE}}}),
			{"delay":0,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":0.25},
 			{"animationEnd" : MOVE_ACTION____7c97e08e391140b797a28ac102c0c2be_Callback});
 	
 	//clean Search Criteria
 	FormPrincipal.TextFieldSearch.text = "";
}

function openHamburguer2(eventobject) {
  function MOVE_ACTION____de87e8a38e3f444e824d0732993b2651_Callback(){}
  function MOVE_ACTION____f30ffe9e55b54a3fba67df516ae1a003_Callback(){}
  FormProductList["FlexPrincipalProduct"].animate(
    kony.ui.createAnimation(
      {"100":{"left":"90%","stepConfig":{"timingFunction":kony.anim.EASE}}}),
      {"delay":0,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":0.25},
      {"animationEnd" : MOVE_ACTION____f30ffe9e55b54a3fba67df516ae1a003_Callback});

  FormProductList["FlexMenuHamburguer"].animate(
    kony.ui.createAnimation(
      {"100":{"left":"-10%","stepConfig":{"timingFunction":kony.anim.EASE}}}),
      {"delay":0,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":0.25},
      {"animationEnd" : MOVE_ACTION____de87e8a38e3f444e824d0732993b2651_Callback});

  FormProductList["ButtonHamburguer"]["isVisible"] = false;
  FormProductList["ButtonHamburguer2"]["isVisible"] = true;
}

function closeHamburguer2(eventobject) {
  function MOVE_ACTION____8071aa81d12a47abb49dcb5bb11ffd91_Callback(){}
  function MOVE_ACTION____6474479677864ea4944bfcb9a2b510e1_Callback(){}

  FormProductList["FlexPrincipalProduct"].animate(
    kony.ui.createAnimation(
      {"100":{"left":"0%","stepConfig":{"timingFunction":kony.anim.EASE}}}),
      {"delay":0,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":0.25},
      {"animationEnd" : MOVE_ACTION____6474479677864ea4944bfcb9a2b510e1_Callback});

  FormProductList["FlexMenuHamburguer"].animate(
    kony.ui.createAnimation(
      {"100":{"left":"-100%","stepConfig":{"timingFunction":kony.anim.EASE}}}),
      {"delay":0,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":0.25},
      {"animationEnd" : MOVE_ACTION____8071aa81d12a47abb49dcb5bb11ffd91_Callback});

    FormProductList["ButtonHamburguer2"]["isVisible"] = false;
	FormProductList["ButtonHamburguer"]["isVisible"] = true;
}

function closeProductReview(eventobject) {
	function MOVE_ACTION____f7999c9cc8104f6792204b2114ff4fc7_Callback(){}
	FormProductDetail["FlexSegmProductReview"].animate(
		kony.ui.createAnimation(
			{"100":{"top":"87%","stepConfig":{"timingFunction":kony.anim.EASE}}}),
			{"delay":0,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":0.25},
 		{"animationEnd" : MOVE_ACTION____f7999c9cc8104f6792204b2114ff4fc7_Callback});
	FormProductDetail["BtnProductReviewDown"]["isVisible"] = false;
	FormProductDetail["BtnProductReviewUp"]["isVisible"] = true;
	FormProductDetail["ImgDownArrow"]["isVisible"] = false;
    FormProductDetail["ImgUpArrow"]["isVisible"] = true;
}

function openProductReview(eventobject) {
	function MOVE_ACTION____dc7e6266485b49efa964cf0a9bc3f761_Callback(){}
	FormProductDetail["FlexSegmProductReview"].animate(
		kony.ui.createAnimation(
			{"100":{"top":"10%","stepConfig":{"timingFunction":kony.anim.EASE}}}),
			{"delay":0,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":0.25},
 			{"animationEnd" : MOVE_ACTION____dc7e6266485b49efa964cf0a9bc3f761_Callback});
	FormProductDetail["BtnProductReviewUp"]["isVisible"] = false;
	FormProductDetail["BtnProductReviewDown"]["isVisible"] = true;
	FormProductDetail["ImgDownArrow"]["isVisible"] = true;
    FormProductDetail["ImgUpArrow"]["isVisible"] = false;
}

function openHamburguer3(eventobject) {
	function MOVE_ACTION____10155f1c4ce341b4b2c2601995eb9d70_Callback(){}
	function MOVE_ACTION____d8672c398a074f9c8d327b45341c3dcf_Callback(){}

	FormProductDetail["FlexMenuHamburguer"].animate(
		kony.ui.createAnimation(
			{"100":{"left":"-10%","stepConfig":{"timingFunction":kony.anim.EASE}}}),
			{"delay":0,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":0.25},
 			{"animationEnd" : MOVE_ACTION____d8672c398a074f9c8d327b45341c3dcf_Callback});

	FormProductDetail["FlexPrincipalProductDetail"].animate(
		kony.ui.createAnimation(
			{"100":{"left":"90%","stepConfig":{"timingFunction":kony.anim.EASE}}}),
			{"delay":0,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":0.25},
 			{"animationEnd" : MOVE_ACTION____10155f1c4ce341b4b2c2601995eb9d70_Callback});
	FormProductDetail["ButtonHamburguer"]["isVisible"] = false;
	FormProductDetail["ButtonHamburguer2"]["isVisible"] = true;
}

function closeHamburguer3(eventobject) {
	function MOVE_ACTION____7075a34876f64fb7a1689cb9cf73ef91_Callback(){}
	function MOVE_ACTION____b95be4376c9e4583b36911efe367cfb1_Callback(){}

	FormProductDetail["FlexMenuHamburguer"].animate(
		kony.ui.createAnimation(
			{"100":{"left":"-100%","stepConfig":{"timingFunction":kony.anim.EASE}}}),
			{"delay":0,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":0.25},
 			{"animationEnd" : MOVE_ACTION____b95be4376c9e4583b36911efe367cfb1_Callback});

	FormProductDetail["FlexPrincipalProductDetail"].animate(
		kony.ui.createAnimation(
			{"100":{"left":"0%","stepConfig":{"timingFunction":kony.anim.EASE}}}),
			{"delay":0,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":0.25},
 			{"animationEnd" : MOVE_ACTION____7075a34876f64fb7a1689cb9cf73ef91_Callback});
	FormProductDetail["ButtonHamburguer2"]["isVisible"] = false;
	FormProductDetail["ButtonHamburguer"]["isVisible"] = true;
}

function openHamburguer4(eventobject) {
	function MOVE_ACTION____838eb1848ebf446587e722a57ededa6b_Callback(){}
	function MOVE_ACTION____dcbb3aeb92ce4871a2b4d546e0e3c440_Callback(){}
	FormProductImagesScreen["FlexPrincipalProductImagesScreen"].animate(
		kony.ui.createAnimation(
			{"100":{"left":"90%","stepConfig":{"timingFunction":kony.anim.EASE}}}),
			{"delay":0,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":0.25},
 			{"animationEnd" : MOVE_ACTION____dcbb3aeb92ce4871a2b4d546e0e3c440_Callback});

	FormProductImagesScreen["FlexMenuHamburguer"].animate(
		kony.ui.createAnimation(
			{"100":{"left":"-10%","stepConfig":{"timingFunction":kony.anim.EASE}}}),
			{"delay":0,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":0.25},
 			{"animationEnd" : MOVE_ACTION____838eb1848ebf446587e722a57ededa6b_Callback});

	FormProductImagesScreen["ButtonHamburguer"]["isVisible"] = false;
	FormProductImagesScreen["ButtonHamburguer2"]["isVisible"] = true;
}

function closeHamburguer4(eventobject) {
	function MOVE_ACTION____f4c101446b7c409c940a1348d92fe1a0_Callback(){}
	function MOVE_ACTION____0870eb7b0b354ec7bac3bf64c6198826_Callback(){}
	FormProductImagesScreen["FlexMenuHamburguer"].animate(
		kony.ui.createAnimation(
			{"100":{"left":"-100%","stepConfig":{"timingFunction":kony.anim.EASE}}}),
			{"delay":0,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":0.25},
 			{"animationEnd" : MOVE_ACTION____0870eb7b0b354ec7bac3bf64c6198826_Callback});

	FormProductImagesScreen["FlexPrincipalProductImagesScreen"].animate(
		kony.ui.createAnimation(
			{"100":{"left":"0%","stepConfig":{"timingFunction":kony.anim.EASE}}}),
			{"delay":0,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":0.25},
 			{"animationEnd" : MOVE_ACTION____f4c101446b7c409c940a1348d92fe1a0_Callback});

	FormProductImagesScreen["ButtonHamburguer2"]["isVisible"] = false;
	FormProductImagesScreen["ButtonHamburguer"]["isVisible"] = true;
}

function openHamburguer5(eventobject) {
	function MOVE_ACTION____3714b07bb5fb4f5f9c10b739134c789c_Callback(){}
	function MOVE_ACTION____551bc649a9374b0aba2c44195428cf62_Callback(){}
	FormCart["FlexPrincipalCart"].animate(
		kony.ui.createAnimation(
			{"100":{"left":"90%","stepConfig":{"timingFunction":kony.anim.EASE}}}),
			{"delay":0,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":0.25},
 			{"animationEnd" : MOVE_ACTION____551bc649a9374b0aba2c44195428cf62_Callback});

	FormCart["FlexMenuHamburguer"].animate(
		kony.ui.createAnimation(
			{"100":{"left":"-10%","stepConfig":{"timingFunction":kony.anim.EASE}}}),
			{"delay":0,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":0.25},
 			{"animationEnd" : MOVE_ACTION____3714b07bb5fb4f5f9c10b739134c789c_Callback});

	FormCart["ButtonHamburguer"]["isVisible"] = false;
	FormCart["ButtonHamburguer2"]["isVisible"] = true;
}

function closeHamburguer5(eventobject) {
	function ___onClick_0b89d1b0c10e4572bc19a388927d220b_Callback(){}
	function ___onClick_ee016380d18b4254a6f660b1bbe45ae4_Callback(){}

	FormCart["FlexMenuHamburguer"].animate(
		kony.ui.createAnimation(
			{"100":{"left":"-100%","stepConfig":{"timingFunction":kony.anim.EASE}}}),
			{"delay":0,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":0.25},
 			{"animationEnd" : ___onClick_ee016380d18b4254a6f660b1bbe45ae4_Callback});

	FormCart["FlexPrincipalCart"].animate(
		kony.ui.createAnimation(
			{"100":{"left":"0%","stepConfig":{"timingFunction":kony.anim.EASE}}}),
			{"delay":0,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":0.25},
 			{"animationEnd" : ___onClick_0b89d1b0c10e4572bc19a388927d220b_Callback});

	FormCart["ButtonHamburguer2"]["isVisible"] = false;
	FormCart["ButtonHamburguer"]["isVisible"] = true;
}

function openHamburguer6(eventobject) {
  function MOVE_ACTION____62c98d4b288142f69c73d354513f3f01_Callback(){}
  function MOVE_ACTION____b922228c736e44d781c389ee3b521c48_Callback(){}
  FormLocator["FlexPrincipalLocator"].animate(
    kony.ui.createAnimation(
      {"100":{"left":"90%","stepConfig":{"timingFunction":kony.anim.EASE}}}),
      {"delay":0,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":0.25},
      {"animationEnd" : MOVE_ACTION____b922228c736e44d781c389ee3b521c48_Callback});

  FormLocator["FlexMenuHamburguer"].animate(
    kony.ui.createAnimation(
      {"100":{"left":"-10%","stepConfig":{"timingFunction":kony.anim.EASE}}}),
      {"delay":0,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":0.25},
      {"animationEnd" : MOVE_ACTION____62c98d4b288142f69c73d354513f3f01_Callback});
  FormLocator["ButtonHamburguer"]["isVisible"] = false;
  FormLocator["ButtonHamburguer2"]["isVisible"] = true;
}

function closeHamburguer6(eventobject) {
  function MOVE_ACTION____a462e677e0ec4f98bd6154e7c89474bf_Callback(){}
  function MOVE_ACTION____a22d1e97f3fe44b38521f69f0b5f6fad_Callback(){}
  FormLocator["FlexPrincipalLocator"].animate(
    kony.ui.createAnimation(
      {"100":{"left":"0%","stepConfig":{"timingFunction":kony.anim.EASE}}}),
      {"delay":0,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":0.25},
      {"animationEnd" : MOVE_ACTION____a22d1e97f3fe44b38521f69f0b5f6fad_Callback});

  FormLocator["FlexMenuHamburguer"].animate(
    kony.ui.createAnimation(
      {"100":{"left":"-100%","stepConfig":{"timingFunction":kony.anim.EASE}}}),
      {"delay":0,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":0.25},
      {"animationEnd" : MOVE_ACTION____a462e677e0ec4f98bd6154e7c89474bf_Callback});
  FormLocator["ButtonHamburguer"]["isVisible"] = true;
  FormLocator["ButtonHamburguer2"]["isVisible"] = false;
}

