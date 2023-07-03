const url = "http://localhost:3000/api/infoPer/";
let resultados = '';
const formArticulo = document.querySelector("form");
const NAMEPER = document.getElementById("NAMEPER");
const LASTNMPER = document.getElementById("LASTNMPER");
const CELUSPER = document.getElementById("CELUSPER");
const DIRECPER = document.getElementById("DIRECPER");
const EMAILPER = document.getElementById("EMAILPER");
const MSGPER = document.getElementById("MSGPER");


let option = '';


btnCrear.addEventListener('click', () => {
    console.log("Acción de listar activada");
    option = 'crear';
});


formArticulo.addEventListener('submit',
    (e) => {
    e.preventDefault();
    if (option == 'crear') {
        if( NAMEPER.value == "" || LASTNMPER.value == ""|| CELUSPER.value == ""|| DIRECPER.value== ""|| EMAILPER.value== ""|| MSGPER.value=="") {
            alert("Asegúrese de que todos los campos estén completos");
            return false;

        } else {
            console.log("Todos los campos están completos");
            fetch(
                url,
                {
                    method: 'POST',
                    headers: {
                        'content-Type':'application/json'
                    },
                    body: JSON.stringify(
                        {
                            NAMEPER: NAMEPER.value,
                            LASTNMPER: LASTNMPER.value,
                            CELUSPER: CELUSPER.value,
                            DIRECPER: DIRECPER.value,
                            EMAILPER: EMAILPER.value,
                            MSGPER: MSGPER.value
                        }
                    )
                }
            )
            .then(
                response => response.json()
            )
            .then(
                response => location.reload()
            );
        }
    } else if(opcion == 'editar'){
        console.log("Activado el ");
    }
}
);