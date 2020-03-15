document.addEventListener("keydown", playAudio);

function playAudio(e){
    // Create constant for audio file
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    // Create key variable depending on keydown
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    // if audio data-key doesn't exist, stops the function
    if (!audio) {
        return
    }
    // restart playtime each keydown to repeat the sound 
    audio.currentTime = 0;
    // play the sound
    audio.play();
    // add effect to the selected div
    key.classList.add("playing");
    // remove effect after 70ms
    setTimeout(function(){
        key.classList.remove("playing")
    }, 70);
}