var num;
var audioSources = [];

var app = new Vue({
  el: '#game',
  data: {
    storyText: 'Welcome to Drakoran\'s Dungeon'
  }
});

var audio = [];
function initAudio(){
	for(i = 1; i <= 12; i++){
		audio[(i-1)] = new Audio();
		audio[(i-1)].src='audio/typewriter' + i + '.wav';
		console.log(audio[(i-1)].src);
	}
}
document.getElementById('#music').volume = 0.2;
$( document ).keypress(function(keycode) {
	if( keycode.which == 13) console.log('Enter');
	else audio[Math.floor(Math.random() * 12)].play();
});
initAudio();