// hide text
function hideText(){
	document.getElementById('st5').style.display='none';
}


// fontsize
function fontChange(){
	document.getElementById('st4').style.fontSize ='30px';
}

// on/off the bulb ex4
function bulbOn(){
	document.getElementById('bulb').src = "images/on.gif";
}

function bulbOff(){
	document.getElementById('bulb').src = "images/off.gif";
	
}



// change text ex3
function showDate(){
	document.getElementById('st3').innerHTML = Date();
}

// change text ex2
function changeText(){
	document.getElementById('st2').innerHTML = "Lorem ipsum dolor, sit, amet consectetur adipisicing elit. Tempora, iste.";
}


// show text ex1
function showText(){
	document.getElementById('st').innerHTML = "Lorem ipsum dolor, sit, amet consectetur adipisicing elit. Tempora, iste.";
} 

