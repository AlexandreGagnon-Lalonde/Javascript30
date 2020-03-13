document.addEventListener("keydown", playAudio);

function playAudio(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    console.log(e.keyCode);
    if (!audio) {
        return
    }
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");
    setTimeout(function(){
        key.classList.remove("playing")
    }, 70);
}