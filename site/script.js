let video = document.querySelector('video')

function blackandwhite() {
    video.style.filter = "grayscale(100%)";
}

function retro() {
    video.style.filter = "sepia(100%)";
}

function saturate() {
    video.style.filter = "saturate(50%)";
}

function reset() {
    video.style.filter = "none";
}