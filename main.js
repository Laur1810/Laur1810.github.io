var button = document.getElementById('buton2');
var text = document.getElementById('test');
var sound = new Audio("Amogus - Sound effect.mp3");
var muie = document.getElementById('muie');
sound.volume = 1;


button.addEventListener('click', function () {
    sound.play();
    console.log("merge");
    muie.innerHTML = "MUIE";
    toggleConfetti();

});

button.addEventListener('click', function () {
    var value = text.value;
    localStorage.setItem('test', value);
    var savedValue = localStorage.getItem('test');
})

