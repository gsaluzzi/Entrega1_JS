
/*
-Variables
-Condicionales (if else o switch)
-Ciclos (for, while o do while)
-Funciones (tradicional, anónima o flecha)
-Arrays
-Métodos de arrays
-Entrada (prompt y/o confirm) y salida (alert o console) de datos
*/

let tipo;
let listaDeJugadoresSocios = [];
let InscritosCampeonato = [];

function verSocios() {
    if (listaDeJugadoresSocios.length === 0) {
        alert("Actualmente no hay Socios");
    } else {
        alert("Este es el listado de Socios Actuales: \n" + listaDeJugadoresSocios.join("\n"));      
    };
};

function agregarSocio(){
    const nuevoSocio = prompt("Ingrese el nombre del Nuevo Socio");
    
    if(nuevoSocio != null){
        listaDeJugadoresSocios.push(nuevoSocio);
        alert("Agregaste a la lista de Socios a " + nuevoSocio);
    } else {
        alert("Ingresa un nombre válido");
    };
};


function verInscritos() {
    if (InscritosCampeonato.length === 0) {
        alert("Actualmente no hay Inscritos");
    } else {
        alert("Este es el listado de Socios Inscritos en el campeonato: \n" + InscritosCampeonato.join("\n"));        
    };
};


function agregarInscrito(){
    const nuevoInscrito = prompt("Ingrese el nombre del Socio a Inscribir");
        if(listaDeJugadoresSocios.includes(nuevoInscrito)){
        InscritosCampeonato.push(nuevoInscrito);
        alert("Inscribiste en el campeonato al Socio " + nuevoInscrito);
    } else {
        alert("Primero debes Agregar como Socio a " + nuevoInscrito + " y luego inscribirlo");
    };
};




do {
    tipo = parseInt(prompt("Bienvenido al sistema de inscripción Campeonato de Tenis CODERHOUSE 2025\n\n1. Para ver la lista de Socios.\n2. Para agregar un Socio.\n3. Para ver los jugadores ya inscritos.\n4. Para Inscribir a un Socio en el Torneo.\n \nPara salir ingrese 0."));

    switch (tipo) {
        case 0:
            alert("Gracias, Que tenga un buen día!");
            break;
        case 1:
            verSocios();
            break;
        case 2:
            agregarSocio();
            break;
        case 3:
            verInscritos();
            break;
        case 4:
            agregarInscrito();
            break;
        default:
            alert("Opción inválida, Por favor ingrese una de las opciones disponibles");
            break;
    };

} while (tipo !== 0);
