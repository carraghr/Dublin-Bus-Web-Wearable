function searchStop(event) {
	event.preventDefault();
	document.getElementById("Submit_id").disabled=true;
	console.log("ok");
	var url = "https://data.smartdublin.ie/cgi-bin/rtpi/realtimebusinformation?stopid="+ event.srcElement[0].value +"&format=json";
	
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			document.getElementById("Submit_id").disabled=false;
			console.log(this.responseText);
			var obj = JSON.parse(this.responseText);
			var rest = {};
			rest.stopid = obj.stopid;
			rest.errorcode = obj.errorcode;
			rest.errormessage = obj.errormessage;
			rest.results = [];
			for(var i = 0; i < obj.results.length; i++){
				var temp = {};
				temp.route = obj.results[i].route;
				temp.duetime = obj.results[i].duetime;
				rest.results.push(temp);
			}
			console.log(rest);
			document.cookie = "results" + "="+JSON.stringify(rest)+";";			  
			tau.changePage('./displayResults.html');
			document.cookie = "hello=world;";	
			console.log(document.cookie);
		}
	};
	xhttp.open("GET", url, true);
	xhttp.send();

	return false;
}