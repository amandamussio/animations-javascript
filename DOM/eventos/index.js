var buttonBlack = document.getElementById('button-black');
var car = document.getElementById('image-car');

function captureColor(event) {
    const element = event.target; //captura o elemento clicado
    let color = element.getAttribute("data-color") //captura um determinado atributo
    // console.log(color)
    switch(color) {
        case 'black': 
            // car.setAttribute('src','./images/carro-preto.png');
            changeCar('preto')
            break;
        case 'red':
            // car.setAttribute('src','./images/carro-branco.png');
            changeCar('vermelho')
            break;
        case 'white': 
            // car.setAttribute('src','./images/carro-branco.png');  
            changeCar('branco')
            break;
        case 'silver':   
            // car.setAttribute('src','./images/carro-prata.png');
            changeCar('prata')
            break;
        default:           
    }
}

function changeCar(nomeImagem) {
    // car.setAttribute('src','./images/carro-'+nomeImagem+ '.png');
    car.setAttribute('src',`./images/carro-${nomeImagem}.png`);
}