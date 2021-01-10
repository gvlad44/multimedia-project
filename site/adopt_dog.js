let video = document.querySelector("video");

function blackandwhite() {
  video.style.filter = "grayscale(100%)";
}

function retro() {
  video.style.filter = "sepia(100%)";
}

function tint() {
  video.style.filter =
    "hue-rotate(-270deg) sepia(55%) contrast(150%) saturate(300%) hue-rotate(270deg)";
}

function reset() {
  video.style.filter = "none";
}

var canv, cont, img;
let timing;
function loadCanvas() {
  canv = document.getElementById("CanvasEx");
  cont = canv.getContext("2d");
  img = new Image();
  img.src = "./resources/img/poza.jpeg";
  window.requestAnimationFrame(draw);
}

function draw(duration) {
  if (timing == undefined) {
    timing = duration;
  }
  const actual_duration = duration - timing;
  cont.clearRect(0, 0, 800, 600);

  cont.translate(375, 300);
  cont.rotate(Math.PI / 90);
  cont.translate(-375, -300);

  cont.drawImage(img, 150, 150, 450, 300);

  if (actual_duration < 3030) {
    window.requestAnimationFrame(draw);
  }
}

window.onload = () => {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("./sw.js")
      .then((regstr) => {
        console.log("dog sw is working");
        return regstr;
      })
      .catch((err) => {
        console.error("dog sw is not working ", err);
      });
  }
  loadCanvas();
};

function displayMdl1() {
  document.getElementById("vo_mdl1").style.display = "flex";
}

function disappearMdl1() {
  document.getElementById("vo_mdl1").style.display = "none";
}

function displayMdl2() {
  document.getElementById("vo_mdl2").style.display = "flex";
}

function disappearMdl2() {
  document.getElementById("vo_mdl2").style.display = "none";
}

function displayMdl3() {
  document.getElementById("vo_mdl3").style.display = "flex";
}

function disappearMdl3() {
  document.getElementById("vo_mdl3").style.display = "none";
}

var mdl1 = document.getElementById("vo_mdl1");
var mdl2 = document.getElementById("vo_mdl2");
var mdl3 = document.getElementById("vo_mdl3");
window.onclick = function (event) {
  if (event.target == mdl1) {
    mdl1.style.display = "none";
  }
  if (event.target == mdl2) {
    mdl2.style.display = "none";
  }
  if (event.target == mdl3) {
    mdl3.style.display = "none";
  }
};

let dog_names = document.getElementsByClassName("vo_drag");
let drop_area = document.getElementsByClassName("vo_drop_area");
addEventListener("load", () => {
  for (let i = 0; i < dog_names.length; i++) {
    dog_names[i].setAttribute("ondragstart", "dragName(event)");
  }

  for (let j = 0; j < drop_area.length; j++) {
    drop_area[j].setAttribute("ondragover", "allowDragDrop(event)");
    drop_area[j].setAttribute("ondrop", "dropName(event)");
  }
});

function dragName(evt) {
  evt.dataTransfer.setData("quizz", evt.target.attributes.quizz.value);
  evt.dataTransfer.setData("order", evt.target.attributes.order.value);
  evt.dataTransfer.effectAllowed = "move";
}

function allowDragDrop(evt) {
  evt.preventDefault();
  evt.dataTransfer.dropEffect = "move";
}

let drop_order = "";
function dropName(evt) {
  evt.preventDefault();

  var quizz = evt.dataTransfer.getData("quizz");
  var order = evt.dataTransfer.getData("order");

  if (quizz == 1) {
    drop_order = drop_order + order;
  }

  let ctr_elem = document.querySelector(
    '.vo_drag[quizz="' + quizz + '"][order="' + order + '"]'
  );
  ctr_elem.style.pointerEvents = "none";

  ctr_elem.style.backgroundColor = "#e99f71";

  let node = document.createTextNode(ctr_elem.innerText + " ");
  evt.target.appendChild(node);

  if (drop_order.length == 3) {
    evt.target.style.background = "lightblue";
  }
}

let site = document.getElementsByTagName("BODY")[0];

site.addEventListener("keydown", (evt) => {
  key = evt.key;
  code = evt.code;

  if (key == "h") {
    site.style.backgroundColor = "white";
    window.location = "#";
  }
  if (key == "a") {
    site.style.backgroundColor = "#fcf5f0";
    window.location.hash = "#about";
  }
  if (key == "m") {
    site.style.backgroundColor = "#f4cfb8";
    window.location.hash = "#dogs";
  }
  if (key == "e") {
    site.style.backgroundColor = "#fcf5f0";
    window.location.hash = "#events";
  }
  if (key == "c") {
    site.style.backgroundColor = "#f4cfb8";
    window.location.hash = "#contact";
  }
});

var voColor = document.getElementById("vo_color");
var findColor = document.getElementById("findColor");

let bg = document.getElementsByTagName("BODY")[0];
var duration = 1000;
var timer;
findColor.ontouchstart = startAction;

function startAction() {
  timer = setTimeout(secret, duration);
}
findColor.ontouchend = endAction;

function endAction() {
  if (timer) clearTimeout(timer);
}

function secret() {
  voColor.textContent = "The color of meat obviously";
  bg.style.backgroundColor = "#a0522d";
}
