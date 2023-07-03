let carga = document.querySelector('.loader-container');

function loader(){
    carga.classList.add('fade-out');
}  

function fadeOut(){
    setInterval(loader, 3000);
}

window.onload = fadeOut();

