// sleep function
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// variable for displaying timer
let timer = document.querySelector(".timer h1");

// variable for banner animation
let banner = document.querySelector(".rightCol img");

// sound buttons
let sound = document.getElementById("sound");
let no_sound = document.getElementById("no_sound");
let x = document.getElementById("myAudio");

// timer implementation
let time = 30;
timer.innerHTML = `00:${time}`;
async function Timer() {
  for (let i = time - 1; i >= 0; i--) {
    await sleep(1000);
    timer.innerHTML = `00:${i}`;
    if (i < 10) {
      timer.innerHTML = `00:0${i}`;
    }
  }
}

// banner animaiton implementation
async function Animation() {
  for (let i = Number.MAX_SAFE_INTEGER; i >= 0; i--) {
    await sleep(300);
    banner.src = "./images/banner1.png";
    await sleep(300);
    banner.src = "./images/banner2.png";
  }
}
Timer();
Animation();

// audio controls
function playAudio() {
  x.play();
  sound.style.display = "block";
  no_sound.style.display = "none";
}

function pauseAudio() {
  x.pause();
  no_sound.style.display = "block";
  sound.style.display = "none";
}
