window.onload = init();

function init() {

    var slider = document.getElementById('banner');
    var items = document.getElementsByClassName('banner-item');
    var itemsTamanho = items.length;
    
    console.log(items, itemsTamanho);

    for (let index = 0; index < itemsTamanho; index++) {
        const element = items[index];

        if(index === 0) {
            setTimeout(function(){
                element.classList.add('active');
                return;
            }, 2000);
        }

        console.log(element.classList.contains('active'))
        var estouAtivo = element.classList.contains('active');
        if(estouAtivo && index < (itemsTamanho - 1)) {
            setTimeout(function(){
                element.classList.remove('active');
                items[index + 1].classList.add('active');
            }, 2000)
            
        }
    }
}



