function openNav() {            // opens the side navigation
    document.getElementById("mysidenav").classList.add("open"); // applies open class css to it to open it
}

function closeNav() {           // closes the side navigation
    document.getElementById("mysidenav").classList.remove("open"); // removes open class css to it to close it
}

// create an object linked to the id
let zara_obj = document.getElementById("zara-button");

// add an event listener click to that object
zara_obj.addEventListener("click", zara_info);

// js open or go to url on click
function zara_info(url) {
    window.open('zara.html', '_self');
}

let mono_obj = document.getElementById("mono-button");

mono_obj.addEventListener("click", mono_info);

function mono_info(url) {
    window.open('mono.html', '_self');
}

let dragon_obj = document.getElementById("dragon-button");

dragon_obj.addEventListener("click", dragon_info);

function dragon_info(url) {
    window.open('dragonventure.html', '_self');
}

let phoenix_obj = document.getElementById("phoenix-button");

phoenix_obj.addEventListener("click", phoenix_info);

function phoenix_info(url) {
    window.open('thephoenixlantern.html', '_self');
}