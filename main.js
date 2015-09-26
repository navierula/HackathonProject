var d = new Date();
var year = d.getFullYear();
var hour=d.getHours();
var minutes=d.getMinutes();
document.write("UTC -0500 " + hour + ":" + minutes);

var h= {"hawaii":-6, "alaska":-4, "pacific":-3, "mountain":-2, "central":-1,
"brazil":1, "iceland":4, "ireland":5, "germany":6, "greece":7, "pakistan":9, 
"india":9.5, "bangladesh":10, "thailand":11, "china":12, "japan":13, 
"papua new guinea":14, "fiji":16};
function timeFix(time) {
	if (time>12){
		time=time-12;
	}
	return time;
}

function timeZone(string, hour) {
	var localhour=hour+h[string];
	if (localhour<0){
		localhour=localhour+24;
	}
	if (h[string]=9.5){
		minutes=minutes+30;
		if (minutes<30){
			localhour=hour+9;
		}
		if (minutes>30) {
			minutes=minutes-60;
			localhour=hour+10;
		}
	}
	localhour=timeFix(localhour);
	if (minutes<10){
		document.write("<br>" + localhour + ":0" + minutes);
	}
	else {
		document.write("<br>" + localhour + ":" + minutes);
	}
}
var string="india";
timeZone(string, hour);