//Agregamos un evento DOMcontent y generamos una funcion que se ejecute en un periodo de tiempo (settimes)
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
      // Realizar la consulta a la base de datos
        fetch("http://127.0.0.1:3000/api/calendario")
        .then(response => response.json())
        .then(data => {
            if (data.length === 0) {
            console.log("no hay datos que mostrar")
            return;
            }

            const nombre = data.map(item => item.NAMECAL);
            const fecha = data.map(item => {
            const date = new Date(item.DATECAL);
            const formattedDate = `${getDayName(date)}, ${date.getDate()} de ${getMonthName(date)} del ${date.getFullYear()}`;
            return formattedDate;
            });
            const descripcion = data.map(item => item.DESCCAL);

            Swal.fire({
            title: "Hoy celebremos juntos!",
            html: `<p>Hoy ${fecha} se celebra <strong>${nombre}.</strong></p><p>Una pequeña descripción: </p><p>${descripcion}</p>`,
            icon: "info",
            timer: 10000,
            timerProgressBar: true,
            showConfirmButton: false
            });
        })
        .catch(error => {
            console.log(error);
        });
    }, 1000);
    });
// days genera una constante que nos trae array 
//return nos devuelve un valor o nos ejecuta una funcion 
    function getDayName(date) {
    const days = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    return days[date.getDay()];
    }

    function getMonthName(date) {
    const months = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
    return months[date.getMonth()];
    }