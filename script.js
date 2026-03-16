/* ambil elemen */

const openBtn = document.getElementById("openMessage");
const messageBox = document.getElementById("messageBox");

const music = document.getElementById("bgMusic");

const playBtn = document.getElementById("playMusic");
const pauseBtn = document.getElementById("pauseMusic");

/* buka ucapan + mulai musik */

openBtn.addEventListener("click", function () {
  messageBox.classList.remove("hidden");

  openBtn.innerText = "Selamat Lebaran ✨";

  music.play();
});

/* play music */

playBtn.addEventListener("click", function () {
  music.play();
});

/* pause music */

pauseBtn.addEventListener("click", function () {
  music.pause();
});
