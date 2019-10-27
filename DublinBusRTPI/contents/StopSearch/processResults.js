(function(){
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for(var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
	    if (c.indexOf("results") == 0) {
	      var string = c.substring("results".length+1, c.length);
	      var result = JSON.parse(string);
	      document.getElementById("header").innerHTML = result.stopid;
	      if(result.errorcode != 0){
	    	  errorMessage(result.errorcode, result.errormessage);
	      }else{
	    	  displayResult(result.results);
	      }
	    }
	}
})();

function errorMessage(code, message){
	var report = document.getElementById("content");
	var text = document.createElement("p");
	text.innerHTML = message;
	report.appendChild(text);
}

function displayResult(results){
	var report = document.getElementById("content");
	var ul = document.createElement("ui");
	ul.setAttribute("class", "ui-listview");
	report.appendChild(ul);
	
	for(var resultIndex = 0; resultIndex < results.length; resultIndex++){
		var li = document.createElement("li");
	  	var text = results[resultIndex].route +" : ";
	  	if(results[resultIndex].duetime ==="Due"){
	  		text += results[resultIndex].duetime;
	  	}else{
	  		text += results[resultIndex].duetime + " Mins";
	  	}
		li.appendChild(document.createTextNode(text));
		ul.appendChild(li);
    }
}