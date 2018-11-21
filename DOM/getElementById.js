var texto = document.getElementById('demo');
console.log('texto', texto)
// texto.innerHTML = 'oi'
var container = document.getElementById('container');
// console.log('texto', container)

/*
    elemento é o elemento pai.
    filho é o nó a ser adicionado como filho de elemento. Também é devolvido.
*/

var exemplo = 'tÍTULO'
var h1 = document.createElement('h1');
container.appendChild(h1);
h1.innerHTML = exemplo
// elemento.appendChild(filho);

