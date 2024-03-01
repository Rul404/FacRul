function myFunction() {
    var x = document.getElementById("open")
    if (x.style.display === "none") {
        x.style.display = "block"
    } else {
        x.style.display = "none"
    }
}

// Bagian Video
const icon = document.getElementById("videoku");
function play() {
    if (icon.paused) {
        icon.play()
    } else {
        icon.pause()
    }
}
function skip(value) {
    var video = document.getElementById("videoku");
    video.currentTime += value;
}
function relog() {
    var video = document.getElementById("videoku");
    video.currentTime = 0;
}

const icon1 = document.getElementById("videoku1");
function play1() {
    if (icon1.paused) {
        icon1.play()
    } else {
        icon1.pause()
    }
}
function skip1(value) {
    var video = document.getElementById("videoku1");
    video.currentTime += value;
}
function relog1() {
    var video = document.getElementById("videoku1");
    video.currentTime = 0;
}

// Bagian Scroll Strory
let scrollContainer = document.querySelector('.bungkus')
let kembali = document.getElementById('kembali')
let lanjut = document.getElementById('lanjut')

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
});

lanjut.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 375;
});

kembali.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 375;
});

function bukaFile() {
    window.open('status.html', '')
};

