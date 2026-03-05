document.addEventListener("DOMContentLoaded", function(){

// =============================
// ambil elemen HTML
// =============================

const openButton = document.getElementById("openButton");
const message = document.getElementById("message");

const judul = document.querySelector(".judul");
const text1 = document.querySelector(".text1");
const text2 = document.querySelector(".text2");
const text3 = document.querySelector(".text3");

const musik = document.getElementById("musikLebaran");
const musicToggle = document.getElementById("musicToggle");
const musicIcon = document.getElementById("musicIcon");


// =============================
// pengaturan awal musik
// =============================

musik.volume = 0;
let musicPlaying = false;


// =============================
// fungsi fade in musik
// =============================

function fadeInMusic(){

    musik.play();

    let volume = 0;

    const fade = setInterval(function(){

        if(volume < 0.4){

            volume += 0.02;
            musik.volume = volume;

        }else{

            clearInterval(fade);

        }

    },200);

}


// =============================
// animasi teks
// =============================

function showMessage(){

    setTimeout(()=>judul.classList.add("show"),500);
    setTimeout(()=>text1.classList.add("show"),1500);
    setTimeout(()=>text2.classList.add("show"),2500);
    setTimeout(()=>text3.classList.add("show"),3500);

}


// =============================
// tombol buka ucapan
// =============================

openButton.addEventListener("click", function(){

    message.classList.remove("hidden");

    openButton.style.display = "none";

    fadeInMusic();
    musicPlaying = true;

    showMessage();

});


// =============================
// tombol musik
// =============================

musicToggle.addEventListener("click", function(){

    if(musicPlaying){

        musik.pause();
        musicIcon.src = "assets/speaker-off.svg";
        musicPlaying = false;

    }else{

        musik.play();
        musicIcon.src = "assets/speaker-on.svg";
        musicPlaying = true;

    }

});

});