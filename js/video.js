function startVideo() {
    var ran = Math.random();
    var src = "";
    if (ran < .25) {
	src = "http://player.vimeo.com/video/18479965?title=0&amp;byline=0&amp;portrait=0";
    }
    else if ( ran < .5) {
	src = "http://player.vimeo.com/video/15410051?title=0&amp;byline=0&amp;portrait=0";
    }
    else if ( ran < .75) {
	src = "http://player.vimeo.com/video/17140123?title=0&amp;byline=0&amp;portrait=0";
    }
    else {
	src = "http://player.vimeo.com/video/15952585?title=0&amp;byline=0&amp;portrait=0";
    }
    src += "&api=1";
    alert(ran);
    document.getElementById("vimeoVid").src = src;
    document.getElementById("vimeoVid").api_play();
    alert("hello");
}

