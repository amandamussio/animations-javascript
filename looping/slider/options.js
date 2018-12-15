function depoisDoSlider() {

    var fadeBox = document.getElementById('fadeBox');
    var pulseira1 = document.getElementById('pulseiraTopo');
    var pulseira2 = document.getElementById('pulseiraRodape');
    var buttonPrev = document.getElementById('prev');
    var buttonNext = document.getElementById('next');
    var bullets = document.getElementById('bullets');

    var listaPulseiras = [
        {
            pulseiraTopo: './images/fin_strap_caoutchouc_top.png',
            pulseiraRodape: './images/fin_strap_caoutchouc_bottom.png',
        },
        {
            pulseiraTopo: './images/fin_strap_metal_top.png',
            pulseiraRodape: './images/fin_strap_metal_bottom.png',
        },
        {
            pulseiraTopo: './images/fin_strap_cuir_top.png',
            pulseiraRodape: './images/fin_strap_cuir_bottom.png',
        }
    ];

    var limit = listaPulseiras.length - 1;
    var count = 0;

   
    function iniciaRelogio() {
        fadeBox.remove();
        criaPulseiras();
    }

    iniciaRelogio();

    function criaPulseiras() {
        if(pulseira1.children.length > 0) {
            pulseira1.childNodes[0].classList.remove('entrada');
            pulseira2.childNodes[0].classList.remove('entrada');
            pulseira1.childNodes[0].classList.add('saida');
            pulseira2.childNodes[0].classList.add('saida');

            setTimeout(
                function() {
                    pulseira1.removeChild(pulseira1.childNodes[0]);
                    pulseira2.removeChild(pulseira2.childNodes[0]);

                    let myImage1 = new Image(300, 600);
                    myImage1.src = listaPulseiras[count].pulseiraTopo;
                    myImage1.className = 'entrada'

                    let myImage2 = new Image(300, 600);
                    myImage2.src = listaPulseiras[count].pulseiraRodape;
                    myImage2.className = 'entrada'

                    pulseira1.appendChild(myImage1);
                    pulseira2.appendChild(myImage2);
                },
            500) 
        } else {

            let myImage1 = new Image(300, 600);
            myImage1.src = listaPulseiras[count].pulseiraTopo;
            myImage1.className = 'entrada'
    
    
            let myImage2 = new Image(300, 600);
            myImage2.src = listaPulseiras[count].pulseiraRodape;
            myImage2.className = 'entrada'
    
            pulseira1.appendChild(myImage1);
            pulseira2.appendChild(myImage2);

        }

    }

    buttonNext.addEventListener('click', function next() {
        if (count >= limit) return console.log('Não tem mais relógios')
        ++count
        criaPulseiras();
        bulletsControl();
    })

    buttonPrev.addEventListener('click', function prev() {
        if (count === 0) return console.log('Inicio relofios')
        --count;
        criaPulseiras();
        bulletsControl();
    })

    function bulletsControl() {
        let bulletActive = document.querySelector('.bullet.active');
        bulletActive.classList.remove('active');
        bullets.children[count].classList.add('active');
    }






}