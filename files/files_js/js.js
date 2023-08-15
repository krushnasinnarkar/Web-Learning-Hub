/* ---------- onscroll start ---------- */
AOS.init();
var myVar = setInterval(myFunction, 1);
window.onload = function() {myFunction()};
var myTopnav = document.getElementById("topnavid");
var myLeftnav = document.getElementById("leftnavid");
var sticky = myTopnav.offsetHeight;
function myFunction() {
	if (window.pageYOffset >= sticky) {
		myTopnav.classList.add("sticky");
		myLeftnav.classList.add("sticky4");
	} else {
		myTopnav.classList.remove("sticky");
		myLeftnav.classList.remove("sticky4");
	}
	if (window.pageYOffset >= sticky/4) {
		myLeftnav.classList.add("sticky1");
	} else {
		myLeftnav.classList.remove("sticky1");
	}
	if (window.pageYOffset >= sticky/2) {
		myLeftnav.classList.add("sticky2");
	} else {
		myLeftnav.classList.remove("sticky2");
	}
	if (window.pageYOffset >= sticky/1.333) {
		myLeftnav.classList.add("sticky3");
	} else {
		myLeftnav.classList.remove("sticky3");
	}
}
/* ---------- onscroll end ---------- */
/* ---------- nav start ---------- */                
function starttutorials() {
	var x = document.getElementById("tutorialsid");
	var y = document.getElementById("tutorialscontentid");
	if (x.className === "tutorials") {
		x.className += " responsive";
	} else {
		x.className = "tutorials";
	}
	if (y.className === "tutorialscontent") {
		y.className += " responsive";
	} else {
		y.className = "tutorialscontent";
	}
}
function closetutorials() {
	var x = document.getElementById("tutorialsid");
	var y = document.getElementById("tutorialscontentid");
	if (x.className === "tutorials responsive") {
		x.className = "tutorials";
	}
	if (y.className === "tutorialscontent responsive") {
		y.className = "tutorialscontent";
	}
}
function startreferences() {
	var x = document.getElementById("referencesid");
	var y = document.getElementById("referencescontentid");
	if (x.className === "references") {
		x.className += " responsive";
	} else {
		x.className = "references";
	}
	if (y.className === "referencescontent") {
		y.className += " responsive";
	} else {
		y.className = "referencescontent";
	}
}
function closereferences() {
	var x = document.getElementById("referencesid");
	var y = document.getElementById("referencescontentid");
	if (x.className === "references responsive") {
		x.className = "references";
	}
	if (y.className === "referencescontent responsive") {
		y.className = "referencescontent";
	}
}
function startexamples() {
	var x = document.getElementById("examplesid");
	var y = document.getElementById("examplescontentid");
	if (x.className === "examples") {
		x.className += " responsive";
	} else {
		x.className = "examples";
	}
	if (y.className === "examplescontent") {
		y.className += " responsive";
	} else {
		y.className = "examplescontent";
	}
}
function closeexamples() {
	var x = document.getElementById("examplesid");
	var y = document.getElementById("examplescontentid");
	if (x.className === "examples responsive") {
		x.className = "examples";
	}
	if (y.className === "examplescontent responsive") {
		y.className = "examplescontent";
	}
}
function startexercises() {
	var x = document.getElementById("exercisesid");
	var y = document.getElementById("exercisescontentid");
	if (x.className === "exercises") {
		x.className += " responsive";
	} else {
		x.className = "exercises";
	}
	if (y.className === "exercisescontent") {
		y.className += " responsive";
	} else {
		y.className = "exercisescontent";
	}
}
function closeexercises() {
	var x = document.getElementById("exercisesid");
	var y = document.getElementById("exercisescontentid");
	if (x.className === "exercises responsive") {
		x.className = "exercises";
	}
	if (y.className === "exercisescontent responsive") {
		y.className = "exercisescontent";
	}
}
/* ---------- nav end ---------- */
/* ---------- sidenav start ---------- */
function leftnav1(x) {
	x.classList.toggle("change");
}
function leftnav2() {
	var x = document.getElementById("leftnavid");
	x.classList.toggle("responsive");
}
function subleft() {
	var x = document.getElementById("subleftid");
	if (x.className === "subleft") {
		x.className += " responsive";
	} else {
		x.className = "subleft";
	}
}
function openoutput() {
	var x = document.getElementById("examploutputid");
	var y = document.getElementById("outputid");
	var z = document.getElementById("examploutputheadingid");
	if (x.className === "examploutput") {
		x.className += " responsive";
	} else {
		x.className = "examploutput";
	}
	if (y.className === "output") {
		y.className += " responsive";
	} else {
		y.className = "output";
	}
	if (z.className === "examploutputheading") {
		z.className += " responsive";
	} else {
		z.className = "examploutputheading";
	}
	
}
function openoutput2() {
	var x = document.getElementById("examploutput2id");
	var y = document.getElementById("output2id");
	var z = document.getElementById("examploutputheading2id");
	if (x.className === "examploutput examploutput2") {
		x.className += " responsive";
	} else {
		x.className = "examploutput examploutput2";
	}
	if (y.className === "output output2") {
		y.className += " responsive";
	} else {
		y.className = "output output2";
	}
	if (z.className === "examploutputheading examploutputheading2") {
		z.className += " responsive";
	} else {
		z.className = "examploutputheading examploutputheading2";
	}
	
}
function openoutput3() {
	var x = document.getElementById("examploutput3id");
	var y = document.getElementById("output3id");
	var z = document.getElementById("examploutputheading3id");
	if (x.className === "examploutput examploutput3") {
		x.className += " responsive";
	} else {
		x.className = "examploutput examploutput3";
	}
	if (y.className === "output output3") {
		y.className += " responsive";
	} else {
		y.className = "output output3";
	}
	if (z.className === "examploutputheading examploutputheading3") {
		z.className += " responsive";
	} else {
		z.className = "examploutputheading examploutputheading3";
	}
	
}
function openoutput4() {
	var x = document.getElementById("examploutput4id");
	var y = document.getElementById("output4id");
	var z = document.getElementById("examploutputheading4id");
	if (x.className === "examploutput examploutput4") {
		x.className += " responsive";
	} else {
		x.className = "examploutput examploutput4";
	}
	if (y.className === "output output4") {
		y.className += " responsive";
	} else {
		y.className = "output output4";
	}
	if (z.className === "examploutputheading examploutputheading4") {
		z.className += " responsive";
	} else {
		z.className = "examploutputheading examploutputheading4";
	}
	
}
function openoutput5() {
	var x = document.getElementById("examploutput5id");
	var y = document.getElementById("output5id");
	var z = document.getElementById("examploutputheading5id");
	if (x.className === "examploutput examploutput5") {
		x.className += " responsive";
	} else {
		x.className = "examploutput examploutput5";
	}
	if (y.className === "output output5") {
		y.className += " responsive";
	} else {
		y.className = "output output5";
	}
	if (z.className === "examploutputheading examploutputheading5") {
		z.className += " responsive";
	} else {
		z.className = "examploutputheading examploutputheading5";
	}
	
}
function openoutput6() {
	var x = document.getElementById("examploutput6id");
	var y = document.getElementById("output6id");
	var z = document.getElementById("examploutputheading6id");
	if (x.className === "examploutput examploutput6") {
		x.className += " responsive";
	} else {
		x.className = "examploutput examploutput6";
	}
	if (y.className === "output output6") {
		y.className += " responsive";
	} else {
		y.className = "output output6";
	}
	if (z.className === "examploutputheading examploutputheading6") {
		z.className += " responsive";
	} else {
		z.className = "examploutputheading examploutputheading6";
	}
	
}
function openoutput7() {
	var x = document.getElementById("examploutput7id");
	var y = document.getElementById("output7id");
	var z = document.getElementById("examploutputheading7id");
	if (x.className === "examploutput examploutput7") {
		x.className += " responsive";
	} else {
		x.className = "examploutput examploutput7";
	}
	if (y.className === "output output7") {
		y.className += " responsive";
	} else {
		y.className = "output output7";
	}
	if (z.className === "examploutputheading examploutputheading7") {
		z.className += " responsive";
	} else {
		z.className = "examploutputheading examploutputheading7";
	}
	
}
function openoutput8() {
	var x = document.getElementById("examploutput8id");
	var y = document.getElementById("output8id");
	var z = document.getElementById("examploutputheading8id");
	if (x.className === "examploutput examploutput8") {
		x.className += " responsive";
	} else {
		x.className = "examploutput examploutput8";
	}
	if (y.className === "output output8") {
		y.className += " responsive";
	} else {
		y.className = "output output8";
	}
	if (z.className === "examploutputheading examploutputheading8") {
		z.className += " responsive";
	} else {
		z.className = "examploutputheading examploutputheading8";
	}
	
}
function openoutput9() {
	var x = document.getElementById("examploutput9id");
	var y = document.getElementById("output9id");
	var z = document.getElementById("examploutputheading9id");
	if (x.className === "examploutput examploutput9") {
		x.className += " responsive";
	} else {
		x.className = "examploutput examploutput9";
	}
	if (y.className === "output output9") {
		y.className += " responsive";
	} else {
		y.className = "output output9";
	}
	if (z.className === "examploutputheading examploutputheading9") {
		z.className += " responsive";
	} else {
		z.className = "examploutputheading examploutputheading9";
	}
	
}
/* ---------- sidenav end ---------- */
/* ---------- report start ---------- */
function report() {
	var x = document.getElementById("footertopid");
	if (x.className === "footertop") {
		x.className += " responsive";
	} else {
		x.className = "footertop";
	}
}
function copytext() {
	/* Get the text field */
	var copyText = document.getElementById("mailid");
	/* Select the text field */
	copyText.select();
	copyText.setSelectionRange(0, 99999); /*For mobile devices*/
	/* Copy the text inside the text field */
	document.execCommand("copy");
	/* Alert the copied text */
	var tooltip = document.getElementById("myTooltip");
	tooltip.innerHTML = "Copied: " + copyText.value;
}
function outFunc() {
	var tooltip = document.getElementById("myTooltip");
	tooltip.innerHTML = "Copy to clipboard";
}
/* ---------- report end ---------- */
/* ---------- go to top start ---------- */
function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}
/* ---------- go to top end ---------- */