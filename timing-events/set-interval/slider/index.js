var duration = 7000, steps = 3, contador = 1;
var elementoAnimado =  document.querySelector('.animation')
const tempo = duration/steps;

/*
    element.setAttribute(name, value);
    name é o nome do atributo como string.
    value é o novo valor desejado do atributo
*/ 

setInterval(function() {
	elementoAnimado.setAttribute('data-animation-step', contador = ++contador > steps ? 1 : contador );
}, tempo );
