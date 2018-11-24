// Mostrar window document navigator
var container = document.getElementById('container');
// console.log('texto', container)
container.style.backgroundColor = 'skyblue';

var texto = document.getElementById('demo');
console.log('texto', texto)
texto.innerHTML = 'oi'


//style

var image = document.getElementById('image-boom');
image.src = 'https://www.aprenderexcel.com.br//imagens/post/385/2901-1.jpg';
image.style.borderRadius = '5px';

//classList
texto.classList.add("anotherclass");
// Se estiver visível, remova-o, caso contrário, adicione-o
texto.classList.toggle("visible");
texto.classList.remove("anotherclass");

/*
    CREATE HTML E INNER
    elemento é o elemento pai.
    filho é o nó a ser adicionado como filho de elemento. Também é devolvido.
*/

var btn = document.createElement("BUTTON");        // Create a <button> element
var t = document.createTextNode("CLICK ME");       // Create a text node
btn.appendChild(t);                                // Append the text to <button>
document.body.appendChild(btn);                    // Append <button> to <body>

var titulo = document.createElement("h1");
var node = document.createTextNode("Titulo");
titulo.appendChild(node)
document.body.appendChild(titulo);   

var parent = document.createElement("div");
var p = document.createElement("p");
parent.append("Some text", p);
document.body.appendChild(parent);  

