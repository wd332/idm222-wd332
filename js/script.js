function openNav() {            // opens the side navigation
    document.getElementById("mysidenav").classList.add("open"); // applies open class css to it to open it
}

function closeNav() {           // closes the side navigation
    document.getElementById("mysidenav").classList.remove("open"); // removes open class css to it to close it
}

// let rocket_obj = document.getElementById("rocket-button");

// rocket_obj.addEventListener("click", rocket_info);

// function rocket_info(url) {
//     window.open('rocketship.html', '_self');
// }

// Creates a variable and stores the HTML button element in it
let zara_obj = document.getElementById("zara-button");

// if it exists, add an event listener click to that object
if (zara_obj) {
    zara_obj.addEventListener("click", zara_info);
}

// js open or go to url on click
function zara_info() {
    window.open('zara.html', '_self');
}

let mono_obj = document.getElementById("mono-button");
if (mono_obj) {
    mono_obj.addEventListener("click", mono_info);
}
function mono_info() {
    window.open('mono.html', '_self');
}

let dragon_obj = document.getElementById("dragon-button");
if (dragon_obj) {
    dragon_obj.addEventListener("click", dragon_info);
}
function dragon_info() {
    window.open('dragonventure.html', '_self');
}

let phoenix_obj = document.getElementById("phoenix-button");
if (phoenix_obj) {
    phoenix_obj.addEventListener("click", phoenix_info);
}
function phoenix_info() {
    window.open('thephoenixlantern.html', '_self');
}