var buttonBlack = document.getElementById('button-black');
var car = document.getElementById('image-car');

function captureColor(event) {
    // console.log(event)
    const element = event.target;
    let color = element.getAttribute("data-color")
    console.log(color)
    switch(color) {
        case 'black': 
            car.setAttribute('src','./images/carro-preto.png');
            break;
        case 'red':
            car.setAttribute('src','./images/carro-vermelho.png');
            break;
        case 'white': 
            car.setAttribute('src','./images/carro-branco.png');  
            break;
        case 'silver':   
            car.setAttribute('src','./images/carro-prata.png');
            break;
        default:           
    }
}