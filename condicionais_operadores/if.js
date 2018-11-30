
var isOnline = window.navigator.onLine
var body = document.body
var text = document.getElementById('showStatus')

if(isOnline) {
    body.classList.remove('offline')
    body.classList.add('online')
    text.innerHTML = 'Você está online :)'
    
} else {
    body.classList.add('offline')
    body.classList.remove('online');
    text.innerHTML = 'Você está offline :('
}

