Alumno={

    contructor (nombre){
        this.nombre= nombre
    },

    matricula: "2001314h",
    nombre:{
        paterno: "Cruz",
        materno: "Enriquez",
        nombre: "Daniel",
    },

    domicilio:{
        calle:"Vicente Rivapalacio",
        next: "165",
        nint: "",
        cp: "58460",
        colonia: "Centr",
        ciudad: "Acuitzio del Canje",
    },

    idEscolar:{
        CURP: "CUED0801602A",
        materias:[
            {
                clave: "",
                nombre: "Programacion Web",
                profesor: "Ing. Agustín Rodríguez Ponce",
                horario: {
                        Lunes :"3:00 pm a 5:00 pm",
                        Jueves: "3:00 pm a 5:00 pm",
                }
            }
        ]
    },
    getNombre: function(){
    return this.nombre.nombre + " " + this.nombre.paterno + " " + this.nombre.materno;
}

    
}
Alumno.getDomicilio = function(){
        return this.domicilio.calle +" " + this.domicilio.next+ " " + this.domicilio.nint+ " " + this.domicilio.cp + " "
    }


//console.log(Alumno);
//console.log(Alumno.idEscolar.materias);
//console.log(Alumno.getNombre)
//console.log(Alumno.getDomicilio)



//Array[Alumno];

//mate1= Alumno.idEscolar.materias[1]

function desplegar(){
    console.log("hola")
    disp = document.getElementById("display");
    disp.innerHtml = Alumno.getDomicilio(Alumno);
}