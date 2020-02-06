var randomwoord =   words[Math.floor(Math.random() * words.length)];



function upperbody() {
	var lingotitel = document.createElement('h1');
	lingotitel.setAttribute("id", "lingotitel");
	document.getElementById("container").appendChild(lingotitel);
	lingotitel.innerHTML = "LINGO"

	var userInput = document.createElement('Input');
	userInput.setAttribute("id", "userInput");
	document.getElementById("container").appendChild(userInput);

	var checkword = document.createElement('button');
	checkword.setAttribute("id", "checkbutton");
	document.getElementById("container").appendChild(checkword);
	checkword.innerHTML = "CHECK"

	document.getElementById('checkbutton').onclick = check;
}

function letters() {
	for (var i = 1; i <=25; i++) {
		var showletter = document.createElement('div');
		showletter.setAttribute("id", "div" + i);
if(i == 1){
	showletter.innerHTML = randomwoord[0];
}else{
	showletter.innerHTML = '&nbsp;';
}

		document.getElementById("checkcontainer").appendChild(showletter);
	}
}
	var countbutton = 0;
function check() {
	var invoerwoord = document.getElementById('userInput')
	var invoerwoordcheck = invoerwoord.value; 
	var woordArray = randomwoord.split("")
	var invoerwoordcheckArray = invoerwoordcheck.split("")

	console.log(woordArray);
	console.log(invoerwoordcheckArray);
	
		
	
		for (var i = 0; i < woordArray.length; i++) {
			document.getElementById("div"+((i+1)+(5*countbutton))).innerHTML = invoerwoordcheckArray[i];

	 	if (woordArray[i] === invoerwoordcheckArray[i]) {
				document.getElementById("div"+((i+1)+(5*countbutton))).style.backgroundColor = "green";	
		}
		}

			for (var i = 0; i < woordArray.length; i++) {
			var letterDiv = document.getElementById("div"+((i+1)+(5*countbutton)));

		 	if (letterDiv.style.backgroundColor != 'green') {
				for (var j = 0; j < woordArray.length; j++) {
					if(i != j){
						if(invoerwoordcheckArray[i] == woordArray[j]){
						letterDiv.style.backgroundColor = 'yellow';
						letterDiv.style.borderRadius = "50%";
						}
					}
				}	
			}
		 	}
		 	countbutton += 1;
	if (countbutton == 5) {
		document.getElementById("checkbutton").disabled = true;
		setTimeout(function(){
			alert('u heeft de maximale aantal pogingen gedaan')
		},10);
		
	}	 	
	console.log(randomwoord);
	console.log(invoerwoordcheck);
	if (randomwoord === invoerwoordcheck) {
		setTimeout(function(){
			alert('u heeft het word geraden')
		},10);
	}
}



upperbody();
letters();