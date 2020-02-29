var video;

function getVid(){
	video = document.querySelector("#myVideo");
}

function playVid() {
	video.play();
	let vol = document.querySelector("#volume");
	vol.innerHTML=video.volume *100 +"%";
	console.log("Play Video");
	console.log(video)
}

function pauseVid() {
	video.pause();
	console.log("Pause Video");
}

function decreaseSpeed() {
	var vid = document.getElementById("myVideo");
	vid.playbackRate -= 0.2;
  	console.log("Speed is "+ video.playbackRate);
}

function increaseSpeed() {
	var vid = document.getElementById("myVideo");
	vid.playbackRate += 0.25;
	console.log("Speed is "+ video.playbackRate);
}

function skipAhead() {
	if (video.currentTime + 60 > video.duration){
		video.currentTime = 0;
	video.pause();
	video.playbackRate = 1;
	console.log("Current location is "+ video.currentTime);
	}
    else {
    	video.currentTime += 60;

	console.log("Current location is "+ video.currentTime);
	}
}
function mute() {
  	 if (video.muted) {
		 console.log("Changing to Unmuted");
		 video.muted = false;
		 document.querySelector("#mute").innerHTML = "Mute"
	 }
  	 else {
		 console.log("Changing to Muted");
		 video.muted = true;
		 document.querySelector("#mute").innerHTML = "Unmute"

	 }
}

function changeVolume() {
	var slider = document.querySelector("#volumeSlider");
	var output = document.querySelector("#volume");
	output.innerHTML = slider.value;

	slider.oninput = function() {
		output.innerHTML = this.value;
	console.log("Volume is "+ this.value);
}
}

function gray() {
	var color = document.getElementById("myVideo");
	color.classList.toggle("grayscale");
	console.log("In grayscale")
}

function color() {
	var normal = document.getElementById("myVideo");
	normal.classList.remove("grayscale");
	console.log("In grayscale")

	console.log("In color")
}
