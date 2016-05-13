function initMap(){
	kony.print("@@@@@@@@@@@@@@@@@@@@@@@@@> INIT SEARCH THE STORES...");
	
	if (FormLocator.TextFieldCity.text == ""){
		var locationData = {lat :"0",lon :"0"};
		FormLocator.WidgetMap.navigateToLocation(locationData,false,false);
		
		//var cityName = "New York";
	} else {
		var cityName = FormLocator.TextFieldCity.text;
		kony.print("@@@@@@@@@@@@@@@@@@@@@@@@@> SEARCHING FOR: " + cityName);
		searchStores(cityName);
		FormLocator.WidgetMap.zoomLevel = 9;
	}
	
}

function searchStores(cityName) {
	var inputParams = {
		serviceID: 'getStores',
		city: cityName,
		apiKey: 'c8ar37znr5983r6rvhzf8yra'
	};
	
	kony.print("@@@@@@@@@@@@@@@@@@@@@@@@@> CALL THE SERVICE STORES WITH ATTRIBUTES: " + JSON.stringify(inputParams));
	
	kony.application.showLoadingScreen(null,"Searching for Stores",constants.LOADING_SCREEN_POSITION_ONLY_CENTER, false,true,{enableMenuKey:true, enableBackKey:true});
	appmiddlewareinvokerasync(inputParams, processLoadStoresResult);
}

function processLoadStoresResult(status, loadStoresResult){
	if (status == 400){
		kony.application.dismissLoadingScreen();
		
		if (loadStoresResult != null && loadStoresResult.opstatus == 0){
			kony.print("@@@@@@@@@@@@@@@@@@@@@@@@@> SERVICE RESPONSE LOADED: " + JSON.stringify(loadStoresResult));
		
			if (loadStoresResult.stores != null && loadStoresResult.stores.length > 0){
				arrangeStores(loadStoresResult.stores);
			} else{
				kony.ui.Alert({
					message: "No BestBuy Stores in this City... ",
					alertType:constants.ALERT_TYPE_ERROR,
					alertTitle:"BestBuy",
					yesLabel:"OK",
					alertHandler: handle2}, {});
					
				function handle2(response){
					cleanCityCriteria();
					var locationData = {lat :"0",lon :"0"};
					FormLocator.WidgetMap.navigateToLocation(locationData,false,false);
				}
			}
		}
		else{
			kony.ui.Alert({
				message: "Service call failed with opstatus " + loadCategoryProductListResult.opstatus,
				alertType:constants.ALERT_TYPE_ERROR,
				alertTitle:"BestBuy",
				yesLabel:"OK"}, {});
		}
	}	
}

function arrangeStores(stores) {	
	kony.print("@@@@@@@@@@@@@@@@@@@@@@@@@> ARRANGING STORES IN SCREEN: " + JSON.stringify(stores));
	
	var mapData = [];
	
	for (var i in stores) {
		var store = stores[i];
		mapData.push({
			lat: store['lat'],
			lon: store['lng'],
			name: store['name'],
			desc: store['hours'],
			showcallout: true,
			calloutData:{
				name: store['name'],
				address: store['address'],
				hours: store['hours'],
				template: FlexTempCallOut,
				image: "compass.png"
			}
		});
	}
	
	
	FormLocator.WidgetMap.calloutTemplate = FlexTempCallOut;
	FormLocator.WidgetMap.calloutWidth = '200dp';
	
	FormLocator.WidgetMap.widgetDataMapForCallout = {
		LblNameCallOut: 'name',
		LblAddressCallOut: 'address',
		LblHoursCallOut: 'hours',
		ImgCallOut: 'image'
	};
	FormLocator.WidgetMap.locationData = mapData;
	
	kony.print("@@@@@@@@@@@@@@@@@@@@@@@@@> ARRANGING TO MAP WIDGET: " + JSON.stringify(mapData));
	
	 
}


