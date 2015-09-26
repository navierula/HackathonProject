var d = new Date();
var year = d.getFullYear();
var hour=d.getHours();
var minutes=d.getMinutes();
//document.write("UTC -0500 " + hour + ":" + minutes);

var h= {"hawaii":-6, "alaska":-4, "pacific":-3, "mountain":-2, "central":-1, "eastern":0, 
"brazil":1, "iceland":4, "ireland":5, "germany":6, "greece":7, "pakistan":9, 
"india":9.5, "bangladesh":10, "thailand":11, "china":12, "japan":13, 
"papua new guinea":14, "fiji":16};
function timeOfDay(time){
	if (time>=12){
		var timeNoon="PM";
	}
	else {
		var timeNoon="AM";
	}
	return timeNoon;
}
function timeFix(time) {
	if (time>12){
		time=time-12;
	}
	return time;
}
var div = document.getElementById('timeContainer');
function timeZone(string) {
	var localhour=hour+h[string];
	var newMinutes=minutes;
	if (localhour<0){
		localhour=localhour+24;
	}
	if (h[string]==9.5){
		newMinutes=minutes+30;
		if (newMinutes<30){
			localhour=hour+9;
		}
		if (newMinutes>30) {
			newMinutes=newMinutes-60;
			localhour=hour+10;
		}
	}
	var localTime=timeOfDay(localhour);
	localhour=timeFix(localhour);
	if(newMinutes<10){
		$( ".timeContainer" ).html(localhour + ":0" + newMinutes + localTime + "<br>");
	}
	else {
		$( ".timeContainer" ).html(localhour + ":" + newMinutes + localTime + "<br>");
	}
	Cookies.set("cookies", string);
}
if (Cookies.get("cookies")!=undefined){
	console.log(Cookies.get("cookies"));
	timeZone(Cookies.get("cookies"));
}