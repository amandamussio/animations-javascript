window.onload = init();

function init() {
    var percent = 0;
    var sec = 10;
    var monster = document.querySelector('.monsterText');
    var bar = document.querySelector('.bar');

    function eatCount() {
        monster.innerHTML = "Nós somos<br>SQUARE<br>Monstros!";
    }

    var timer = setInterval(function() {
        bar.style.width = `${percent}%`;
        percent += 1;
        if (percent >= 100) {
            document.querySelector('.pageLoading').classList.add("complete");
            setTimeout(eatCount, 3000);
            clearInterval(timer);
        }
    }, 30);

}