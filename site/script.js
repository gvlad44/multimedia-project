let video = document.querySelector('video')

function blackandwhite() {
    video.style.filter = "grayscale(100%)";
}

function retro() {
    video.style.filter = "sepia(100%)";
}

function tint() {
    video.style.filter = "hue-rotate(-270deg) sepia(55%) contrast(150%) saturate(300%) hue-rotate(270deg)";
}

function reset() {
    video.style.filter = "none";
}

var canv, cont, img;
function loadCanvas() {
    canv = document.getElementById("CanvasEx");
    cont = canv.getContext('2d');
    img = new Image();
    img.src = './resources/img/poza.jpeg'
    img.onload = function() {
        cont.drawImage(img, 10, 10, 600, 300);
    }
}

function displayMdl1() {
    document.getElementById('vo_mdl1').style.display='flex';
}

function disappearMdl1() {
    document.getElementById('vo_mdl1').style.display='none';
}

function displayMdl2() {
    document.getElementById('vo_mdl2').style.display='flex';
}

function disappearMdl2() {
    document.getElementById('vo_mdl2').style.display='none';
}

function displayMdl3() {
    document.getElementById('vo_mdl3').style.display='flex';
}

function disappearMdl3() {
    document.getElementById('vo_mdl3').style.display='none';
}

var mdl1 = document.getElementById('vo_mdl1');
var mdl2 = document.getElementById('vo_mdl2');
var mdl3 = document.getElementById('vo_mdl3');
window.onclick=function(event){
    if(event.target == mdl1){
        mdl1.style.display="none";
    }
    if(event.target == mdl2){
        mdl2.style.display="none";
    }
    if(event.target == mdl3){
        mdl3.style.display="none";
    }
}