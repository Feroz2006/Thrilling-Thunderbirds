function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

let timer = document.querySelector(".timer h1");
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
Timer();
