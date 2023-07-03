const downloadBtn = document.querySelector(".download-btn");
const fileLink = "file:///D:/AS212_Datos%20actualizados%20-%20Relaci%C3%B3n%20Actual.pdf/uc?export=download&id=1aYiaLn3YOjL-_o5QBCy7tU1epqA6gZoi";

const initTimer = () => {
    if(downloadBtn.classList.contains("disable-timer")) {
        return location.href = fileLink;
    }
    let timer = downloadBtn.dataset.timer;
    downloadBtn.classList.add("timer");
    downloadBtn.innerHTML = `Descargado <b>${timer}</b> segundos`;
    const initCounter = setInterval(() => {
        if(timer > 0) {
            timer--;
            return downloadBtn.innerHTML = `Descargado <b>${timer}</b> segundoss`;
        }
        clearInterval(initCounter);
        location.href = fileLink;
        downloadBtn.innerText = "Descargando...";
        setTimeout(() => {
            downloadBtn.classList.replace("timer", "disable-timer");
            downloadBtn.innerHTML = `<span class="icon material-symbols-rounded">Descarga</span>
                                     <span class="text">completa</span>`;
        }, 3000);
    }, 1000);
}

downloadBtn.addEventListener("click", initTimer);