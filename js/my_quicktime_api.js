function playPause(){
    movie = document.getElementById('movieEMBED');
    icon = document.getElementById('playPauseIcon');
    var isPlaying;
    isPlaying = movie.GetRate();
    if (!isPlaying){
	movie.Play();
	icon.setAttribute('src', "images/pausebutton.png");
    }
    else {
	movie.Stop();
	icon.setAttribute('src', "images/playbutton.png");
    }
}

function muteUnmute(){
    movie = document.getElementById('movieEMBED');
    icon = document.getElementById('muteUnmuteIcon');
    var volume = movie.GetVolume();
    if (volume) {
	movie.SetVolume(0);
	icon.setAttribute('src', "images/unmute.png");
    }
    else{
	movie.SetVolume(255);
	icon.setAttribute('src', "images/mute.png");
    }
}