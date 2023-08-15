window.onscroll = function() {
	var run = document.getElementById("run2id");
	if (window.pageYOffset >= 10) {
		run.classList.add("display");
	} else {
		run.classList.remove("display");
	}	
};
function rotate() {
	var x = document.getElementById("containerid");
	if (x.className === "container") {
		x.className += " responsive";
	} else {
		x.className = "container";
	}
}
var myVar = setInterval(ready, 1);
function ready() {
	$(document).ready(function () {
		var txt = "";
		txt += "O/P Screen Res.<br>" + $("#iframe").width() + " * " + $("#iframe").height() + "<br>";
		$(".screnres").html(txt);
	});
}
function update() {
	var run = document.getElementById('iframe').contentWindow.document;
	run.open();
	run.write(ah.getValue());
	run.write('<style>'+ac.getValue()+'</style>');
	run.write('<script>'+ajs.getValue()+'</script>');
	run.close();
	run.body.style.backgroundColor = "#ffffff";
	run.body.style.color = "#000000";
}