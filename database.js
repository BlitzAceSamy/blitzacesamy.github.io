"use strict";

// Colors should be in pairs and contrast each other
var colors = ["yellow","red","fuchsia","black",
			  "blue","aqua","lime","white"];
var colorOfText = 0;
var colorOfBackground = colors.length / 2;

function wowwow() {
	document.getElementById('wowwow').style.color = colors[colorOfText % colors.length];
	document.body.style.backgroundColor = colors[colorOfBackground % colors.length];
	
	colorOfText++;
	colorOfBackground++;
	
	setTimeout(wowwow, 300);
}

wowwow();