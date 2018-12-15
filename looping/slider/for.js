window.onload = init();

function init() {
    var bgTop = document.getElementById('background-1');
    var bgBottom = document.getElementById('background-2');
    var containerClock = document.getElementById('clock');
    var fadeBox = document.getElementById('fadeBox');
    
    var listImages = [
        {
            image: './images/montre_big_caoutchouc.png',
            bgTop: './images/step1_fond_top.jpg',
            bgBottom: './images/step1_fond_bottom.jpg',
        },
        {
            image: './images/montre_big_cuir.png',
            bgTop: './images/step2_fond_top.jpg',
            bgBottom: './images/step2_fond_bottom.jpg',
        },
        {
            image: './images/montre_big_metal.png',
            bgTop: './images/step3_fond_top.jpg',
            bgBottom: './images/step3_fond_bottom.jpg',
        }
    ];

    for(let index = 0; index < listImages.length; index++) {
        doSetTimeout(index)
    }

    function doSetTimeout(index) {
        setTimeout(function() {  
            bgTop.style.backgroundImage = `url('${listImages[index].bgTop}')`
            bgBottom.style.backgroundImage = `url('${listImages[index].bgBottom}')`
            createImage(listImages[index].image);
            showFade();
            if(index === listImages.length - 1) {
                setTimeout(function() {
                    removeImage() 
                    bgTop.style.display = "none"
                    bgBottom.style.display = "none"
                    depoisDoSlider();
                }, 2000)
            }

        }, index * 2000);
     }  

    function createImage(srcImage) {
        if(containerClock.children.length > 0) {
            removeImage()
        }
        let myImage = new Image(300, 600);
        myImage.src = srcImage;
        myImage.id = 'imageClock';
        containerClock.appendChild(myImage);
    }

    function removeImage() {
        let element = document.getElementById('imageClock');
        containerClock.removeChild(element);
    }

    function showFade() {
        fadeBox.classList.add('active')
    }

    // ================================




}

