
playSound = (e) => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);     //  check pressed key is available in audio element, otherwise null in browser log        
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);          // 
    if (!audio) return;     // If there is no audio, stop function
    audio.currentTime = 0;  // Rewind to the start
    audio.play()            //  audio element is there, play it.
    console.log(key)        // display key in browser console
    key.classList.add('playing');
}


removeTransition = (e) => {
    if (e.propertyName !== 'transform') return;  // Skip if it's a transform
    this.classList.remove('playing');
};


const keys = document.querySelectorAll('.key')      //Select all keys with .key class
keys.forEach(key => key.addEventListener('transitionend', removeTransition));        // When the transition end, remove it.
window.addEventListener('keydown', playSound);
