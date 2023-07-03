// Importar librerias


var express = require("express");
var mysql = require("mysql");
var app = express();
var cors = require("cors");


// Configuraciones


app.use(express.json());
app.use(cors());


var conexion = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "admin",
        database: "dbColegio"
    }
);


conexion.connect(
    function (error) {
        if (error) {
            throw error;
        } else {
            console.log("Conexion Exitosa");
        }
    }
);


const port = process.env.PUERTO || 3000;


app.listen(
    port, function () {
        console.log("Servidor funcionando en puerto: " + port)
    }
);


// localhost: 3000
app.post(
    "/api/infoPer", (req, res) => {
        let data = {
            NAMEPER: req.body.NAMEPER,
            LASTNMPER: req.body.LASTNMPER,
            CELUSPER: req.body.CELUSPER,
            DIRECPER: req.body.DIRECPER,
            EMAILPER: req.body.EMAILPER,
            MSGPER: req.body.MSGPER
           
        }
        let sql = "INSERT INTO infoPer SET ?";
        conexion.query(
            sql, data, function (error, resultados) {
                if (error) {
                    throw error;
                } else {
                    console.log(data),
                    res.send(data)
                }
            }
        );
    }
);
//-------------------------------------CALENDARIO-----------------------------------------
//main path
app.get("/api/calendario", (req, res) => {
    let sql = "SELECT * FROM calendario WHERE DATECAL = CURDATE()";
  
    conexion.query(sql, function (error, resultados) {
      if (error) {
        throw error;
      } else {
        console.log(resultados);
        res.send(resultados);
      }
    });
  });

//localhost:3000 /api/infoPer/
