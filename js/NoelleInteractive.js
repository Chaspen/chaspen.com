const NoelleScream = new Audio("../audio/noelle-scare.wav")

function ScareNoelle() {
    noelleImg = document.getElementById("noelle");
    NoelleScream.play();
    NoelleScream.volume = 0.4;
    noelleImg.src = "../img/interests/noelle/noelle-scare-once.gif"
    setTimeout(function(){
        noelleImg.src = "../img/interests/noelle/noelle-still.png"
    }, 2000);
    noelleImg.removeAttribute("onclick")
}