/* ---------- onscroll start ---------- */
AOS.init();
window.onscroll = function() {myFunction()};
var myTopnav = document.getElementById("topnavid");
var sticky = myTopnav.offsetHeight;
function myFunction() {
	if (window.pageYOffset >= sticky) {
		myTopnav.classList.add("sticky");
	} else {
		myTopnav.classList.remove("sticky");
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
function incdropdownhight() {
	var z = document.getElementById("dropdownid");
	if (z.className === "dropdown responsive") {
		z.className += " responsive2";
	} else {
		z.className = "dropdown responsive";
	}
}
/* ---------- menu icon start ---------- */
function myMenu1(x) {
	x.classList.toggle("change");
}
function myMenu2() {
	var x = document.getElementById("dropdownid");
	if (x.className === "dropdown") {
		x.className += " responsive";
	} else {
		x.className = "dropdown";
	}
}
/* ---------- menu icon end ---------- */
/* ---------- nav end ---------- */
/* ---------- swiper start ---------- */
var swiper = new Swiper('.swiper-container', {
	slidesPerView: 1,
	spaceBetween: 30,
	loop: true,
	effect: 'coverflow',
	grabCursor: true,
	centeredSlides: true,
	slidesPerView: 'auto',
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	coverflowEffect: {
		rotate: 30,
		stretch: 0,
		depth: 400,
		modifier: 1,
		slideShadows : true,
	},
	pagination: {
		el: '.swiper-pagination',
		dynamicBullets: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});
/* ---------- swiper end ---------- */
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