var frutas = ['Maçã', 'Banana', 'Abacate'];

console.log('a primeira fruta é ', frutas[0])
console.log('a segunda fruta é ', frutas[1])
console.log('a terceira fruta é ', frutas[2])
console.log('a quantidade de frutas que preciso comprar são: ', frutas.length)

// adicionando mais uma fruta
// frutas[3] = 'Amora';
frutas.push('Amora');
console.log('Frutas', frutas);
//Remove o último elemento
frutas.pop()
console.log('Frutas', frutas);
//Remove o primeiro item
frutas.shift();
console.log('Frutas', frutas);