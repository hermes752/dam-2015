window.onload = function() {

    var botoi1 = document.getElementById("play");
    var botoi2 = document.getElementById("pause");
    var botoi3 = document.getElementById("mute");
    var botoi4 = document.getElementById("complet");
    var botoi5 = document.getElementById("backward");
    var botoi6 = document.getElementById("forward");
    var botoi7 = document.getElementById("start");
    var botoi8 = document.getElementById("end");
    var volume = document.getElementById("volume");
    var pro = document.getElementById("progress");
    pro.value = 0;
    var repro = function() {
        bideo = document.getElementById("bideo");
        bideo.play();





    };
    var pause = function() {
        bideo = document.getElementById("bideo");
        bideo.pause();



    };
    var start = function() {
        bideo = document.getElementById("bideo");
        bideo.curretncurrentTime = 0;



    };
    var end = function() {
        bideo = document.getElementById("bideo");
        bideo.curretncurrentTime = player.duration;



    };
    var backward = function() {
        bideo = document.getElementById("bideo");
        bideo.curretncurrentTime -= 10;



    };
    var forkward = function() {
        bideo = document.getElementById("bideo");
        bideo.curretncurrentTime += 10;



    };
    var complet = function() {
        // document.getElementById("bideo").requestFullScreen();
        bideo = document.getElementById("bideo");



    };
    var mute = function() {
        bideo = document.getElementById("bideo");
        if (bideo.muted === false) {
            bideo.muted = true;
        }

    };



    if (botoi1) {
        botoi1.addEventListener("click", repro, false);
    }

    if (botoi2) {
        botoi2.addEventListener("click", pause, false);
    }
    if (botoi3) {
        botoi3.addEventListener("click", mute, false);
    }
    if (botoi4) {
        botoi4.addEventListener("click", complet, false);
    }
    if (botoi5) {
        botoi5.addEventListener("click", backward, false);
    }
    if (botoi6) {
        botoi6.addEventListener("click", forward, false);
    }

    if (botoi7) {
        botoi7.addEventListener("click", start, false);
    }
    if (botoi8) {
        botoi8.addEventListener("click", end, false);
    }


};
