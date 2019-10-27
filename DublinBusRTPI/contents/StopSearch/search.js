function searchStop(event) {
	event.preventDefault();
	document.getElementById("Submit_id").disabled=true;
	console.log("ok")
	var url = "https://data.smartdublin.ie/cgi-bin/rtpi/realtimebusinformation?stopid="+ event.srcElement[0].value +"&format=json"
	
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			document.getElementById("Submit_id").disabled=false;
			
			document.cookie = "results" + "="+this.responseText+";";			  
			tau.changePage('./displayResults.html');
		}
	};
	xhttp.open("GET", url, true);
	xhttp.send();

	return false;
}