window.onload = function() {

    var botoi1 = document.getElementById("play");
    var botoi2 = document.getElementById("pause");
    var botoi3 = document.getElementById("mute");
    var botoi4 = document.getElementById("complet");
    var botoi5 = document.getElementById("backward");
    var botoi6 = document.getElementById("forward");
    var botoi7 = document.getElementById("start");
    var botoi8 = document.getElementById("end");
    var playlist= document.querySelectorAll('#tracklist');
   
    var pro = document.getElementById("progress");
    var change = document.getElementById("changen");
    pro.value = 0;
    var repro = function() {
        bideo = document.getElementById("bideo");
        bideo.play();
        pro.value=bideo.currentTime/bideo.duration * 100;




    };

    var changevideo=function(e){
    	 bideo = document.getElementById("bideo");
    	var src=e.traget.dataset.src;
    	if(modernizer.video.h264){
    		bideo.src=src+'.mp4';
    	}else{
    		bideo.src=src+'webm';
    	}
    };
    var updatefn=function(){
    	pro.value=currentTime/player.duration * 100;
    };

    var volumefn=function(){
    	    bideo = document.getElementById("bideo");
    	    bideo.volume=this.value/100;

    };

    var pause = function() {
        bideo = document.getElementById("bideo");
        bideo.pause();



    };
    var start = function() {
        bideo = document.getElementById("bideo");
        bideo.currentTime = 0;



    };
    var end = function() {
        bideo = document.getElementById("bideo");
        bideo.currentTime = bideo.duration;



    };
    var backward = function() {
        bideo = document.getElementById("bideo");
        bideo.currentTime -= 10;



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
      if (changen) {
        changen.addEventListener("input", volumefn, false);
    }


};
