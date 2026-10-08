/* === DATOS DE TRANSPORTE === */

const turnos = [ 

    /* 06:00 */

    {
        vehiculo: "Chema",
        tipo: "fijo",
        salida: "06:00",
        destino: "Rosario",
        regresa: true
    },


    /* 06:20 - 06:40 */

    {
        vehiculo: "Auriga",
        tipo: "variable",
        salidaMinima: "06:20",
        salidaMaxima: "06:40",
        destino: "Rosario",
        regresa: true
    },


    /* 07:00 */

    {
        vehiculo: "Pancho",
        tipo: "fijo",
        salida: "07:00",
        destino: "Rosario",
        regresa: true
    },


    /* 07:30 */

    {
        vehiculo: "Verde",
        tipo: "fijo",
        salida: "07:30",
        destino: "Rosario",
        regresa: true
    },


    /* 08:00 */

    {
        vehiculo: "Chema",
        tipo: "fijo",
        salida: "08:00",
        destino: "Rosario",
        regresa: true
    },


    /* 08:20 - 08:40 */

    {
        vehiculo: "Auriga",
        tipo: "variable",
        salidaMinima: "08:20",
        salidaMaxima: "08:40",
        destino: "Rosario",
        regresa: true
    },


    /* 09:00 */

    {
        vehiculo: "Pancho",
        tipo: "fijo",
        salida: "09:00",
        destino: "Rosario",
        regresa: true
    },


    /* 09:20 */

    {
        vehiculo: "Chema",
        tipo: "fijo",
        salida: "09:20",
        destino: "Rosario",
        regresa: true
    },


    /* 10:00 */

    {
        vehiculo: "Verde",
        tipo: "fijo",
        salida: "10:00",
        destino: "Rosario",
        regresa: true
    },


    /* 10:40 */

    {
        vehiculo: "Pancho",
        tipo: "fijo",
        salida: "10:40",
        destino: "Rosario",
        regresa: true
    },


    /* 11:00 */

    {
        vehiculo: "Auriga",
        tipo: "fijo",
        salida: "11:00",
        destino: "Rosario",
        regresa: true
    },


    /* 11:20 */

    {
        vehiculo: "Pancho",
        tipo: "fijo",
        salida: "11:20",
        destino: "Rosario",
        regresa: true
    },


    /* 12:00 */

    {
        vehiculo: "Verde",
        tipo: "fijo",
        salida: "12:00",
        destino: "Rosario",
        regresa: true
    },


    /* 12:20 */

    {
        vehiculo: "Auriga",
        tipo: "fijo",
        salida: "12:20",
        destino: "Rosario",
        regresa: true
    },


    /* 12:40 */

    {
        vehiculo: "Pancho",
        tipo: "fijo",
        salida: "12:40",
        destino: "Rosario",
        regresa: true
    },


    /* 13:00 */

    {
        vehiculo: "Auriga",
        tipo: "fijo",
        salida: "13:00",
        destino: "Rosario",
        regresa: true
    },


    /* 13:20 */

    {
        vehiculo: "Chema",
        tipo: "fijo",
        salida: "13:20",
        destino: "Rosario",
        regresa: true
    },


    /* 14:00 */

    {
        vehiculo: "Verde",
        tipo: "fijo",
        salida: "14:00",
        destino: "Rosario",
        regresa: true
    },


    /* 14:40 */

    {
        vehiculo: "Pancho",
        tipo: "fijo",
        salida: "14:40",
        destino: "Rosario",
        regresa: true
    },


    /* 15:00 */

    {
        vehiculo: "Auriga",
        tipo: "fijo",
        salida: "15:00",
        destino: "Rosario",
        regresa: true
    },


    /* 15:20 */

    {
        vehiculo: "Chema",
        tipo: "fijo",
        salida: "15:20",
        destino: "Rosario",
        regresa: true
    },


    /* 16:00 - NO REGRESA */

    {
        vehiculo: "Verde",
        tipo: "fijo",
        salida: "16:00",
        destino: "Rosario",
        regresa: false
    },


    /* 16:40 - ULTIMO VIAJE */

    {
        vehiculo: "Chema",
        tipo: "fijo",
        salida: "16:40",
        destino: "Rosario",
        regresa: true,
        horaRegreso: "18:00"
    }

];

const transporteLosPozos = {

    salidaAguaVerde: "08:30",
    llegadaRosario: "09:05",
    salidaRosario: "12:30",
    llegadaAguaVerde: "13:10",

    diaSinServicio: 4

};

/* MENSAJES BIBLICOS DEL DIA */

const mensajesBiblicos = [

    {
        texto: "Dios cuida de ti en tu camino y protege tu salida y tu regreso.",
        cita: "Salmo 121:7-8"
    },

    {
        texto: "Dios puede acompañarte en el camino y poner personas que te ayuden.",
        cita: "Tobías 5:16-17"
    },

    {
        texto: "Dios manda a sus ángeles para cuidarte y protegerte en tus caminos.",
        cita: "Salmo 91:11-12"
    },

    {
        texto: "Dios va delante de ti y te acompaña durante el camino.",
        cita: "Éxodo 23:20"
    },

    {
        texto: "Puedes descansar en paz porque Dios está contigo.",
        cita: "Salmo 4:9"
    },

    {
        texto: "Dios va delante de ti, estará contigo y nunca te abandonará.",
        cita: "Deuteronomio 31:8"
    },

    {
        texto: "Dios está contigo dondequiera que vayas.",
        cita: "Génesis 28:15"
    },

    {
        texto: "Puedes caminar con confianza porque Dios está contigo y cuida tus pasos.",
        cita: "Proverbios 3:23-24"
    },

    {
        texto: "No importa hacia dónde vayas: la mano de Dios puede guiarte y sostenerte.",
        cita: "Salmo 139:9-10"
    },

    {
        texto: "Confía en Dios y recuerda su bondad durante tu camino.",
        cita: "Salmo 34:8"
    },

    {
        texto: "Ten presente a Dios y camina con confianza, porque Él está a tu lado.",
        cita: "Salmo 16:8"
    },

    {
        texto: "Sé fuerte y valiente. No tengas miedo, porque Dios está contigo.",
        cita: "Josué 1:9"
    },

    {
        texto: "No tengas miedo. Dios está contigo, te fortalece y te sostiene.",
        cita: "Isaías 41:10"
    },

    {
        texto: "Pon tu camino en las manos de Dios y confía en Él.",
        cita: "Salmo 37:5"
    }

];

/* MOSTRAR MENSAJE DEL DIA */

function mostrarMensajeBiblico() {

    const ahora = new Date();

    /* CALCULAR DIA DEL AÑO */

    const inicioDelAño =
        new Date(
            ahora.getFullYear(),
            0,
            0
        );

    const diferencia =
        ahora - inicioDelAño;

    const unDia =
        1000 * 60 * 60 * 24;

    const diaDelAño =
        Math.floor(
            diferencia / unDia
        );

    /* ELEGIR MENSAJE */

    const posicion =
        diaDelAño %
        mensajesBiblicos.length;

    const mensaje =
        mensajesBiblicos[posicion];

    /* MOSTRAR MENSAJE */

    document.getElementById(
        "mensaje-biblico"
    ).innerHTML = `

        <p>
            “${mensaje.texto}”
        </p>

        <strong>
            — ${mensaje.cita}
        </strong>

    `;
}

/* === FUNCION TRANSPORTE EXTERNO === */

function
mostrarTransporteExterno() {

    const contenedor =
    document.getElementById("transporte-externo");

    /* === OBTENER FECHA ACTUAL === */

    const ahora = new Date();

    /* === OBTENER DIA DE LA SEMANA === */

    const diaActual =
    ahora.getDay();

    /* === SI ES JUEVES === */

    if (
        diaActual ===
        transporteLosPozos.diaSinServicio) {

            contenedor.innerHTML = `

            <div
            class="externo-sin-servicio">

            <h3>🚫 Hoy No Pasa</h3>

            <p> El transporte de Los Pozos no circula los Jueves </p>

            </div>

            `;

            return;

        }

        /* === MOSTRAR HORARIO NORMAL === */

        contenedor.innerHTML = `

        <div class="externo-card">

            <h3>
                🚍 Los Pozos → Rosario
            </h3>

            <p>
                📍 Pasa por Agua Verde:
                <strong>8:25 AM</strong>
            </p>

            <p>
                🚌 Sale de Agua Verde:
                <strong>8:30 AM</strong>
            </p>

            <p>
                🏁 Llegada a Rosario:
                <strong>9:05 AM</strong>
            </p>


            <hr>


            <h3>
                🔄 Regreso
            </h3>

            <p>
                🚍 Sale de Rosario:
                <strong>12:30 PM</strong>
            </p>

            <p>
                🏠 Llega a Agua Verde:
                <strong>1:10 PM</strong>
            </p>

            <p>
                Después continúa hacia
                <strong>Los Pozos.</strong>
            </p>

        </div>

    `;


}

/* === AVISOS IMPORTANTES === */

/* INFORMACION DEL DIA */

const mensajesDelDia = [
    {
        titulo: "☀️ ¡Es un buen día!",
        mensaje: "Que tengas un excelente día y buen viaje."
    },
    {
        titulo: "🌿 ¡Que tengas un bonito día!",
        mensaje: "Recuerda salir con tiempo para tomar tu transporte."
    },
    {
        titulo: "🚍 ¡Buen viaje!",
        mensaje: "Consulta tus horarios antes de salir de casa."
    },
    {
        titulo: "🌤️ ¡Excelente día!",
        mensaje: "Esperamos que tengas un buen camino."
    },
    {
        titulo: "😊 ¡Que tengas un buen día!",
        mensaje: "Recuerda revisar cuál es tu próxima salida."
    },
    {
        titulo: "🌸 ¡Bonito día para todos!",
        mensaje: "Viaja con calma y toma tus precauciones."
    },
    {
        titulo: "💚 ¡Feliz día!",
        mensaje: "Que tengas un buen viaje de Agua Verde a Rosario."
    }
];

/* MOSTRAR INFORMACION DEL DIA */

function mostrarAvisos() {

    const listaAvisos =
        document.getElementById(
            "lista-avisos"
        );

    const ahora = new Date();

    const diaDeLaSemana =
        ahora.getDay();

    const mensaje =
        mensajesDelDia[
            diaDeLaSemana
        ];

    listaAvisos.innerHTML = `
        <div class="aviso">
            <h3>
                ${mensaje.titulo}
            </h3>

            <p>
                ${mensaje.mensaje}
            </p>
        </div>
    `;
}



/* FUNCION MOSTRAR TURNOS */
function mostrarTurnos() {

    const listaTurnos =
        document.getElementById("lista-turnos");

    const horaActual =
        convertirAMinutos(
            obtenerHoraActual()
        );

    /* FILTRAR TURNOS DISPONIBLES */
    const turnosDisponibles =
        turnos.filter(function(turno) {

            /* SI ES REGRESO Y NO REGRESA,
               NO MOSTRAR */
            if (
                sentidoRegreso &&
                turno.regresa === false
            ) {
                return false;
            }

            const recorrido =
                calcularRecorrido(turno);

            let horaSalida;

            if (sentidoRegreso) {
                horaSalida =
                    recorrido.salidaRosario;
            } else {
                horaSalida =
                    recorrido.salida;
            }

            return horaSalida >= horaActual;
        });


    /* MOSTRAR SOLO LOS SIGUIENTES 5 */
    const proximos =
        turnosDisponibles.slice(0, 5);


    listaTurnos.innerHTML = "";


    /* CREAR TARJETAS */
    proximos.forEach(function(
        turno,
        indice
    ) {

        const recorrido =
            calcularRecorrido(turno);

        let horaSalida;
        let textoRuta;
        let textoLlegada;


        /* ROSARIO → AGUA VERDE */
        if (sentidoRegreso) {

            horaSalida =
                recorrido.salidaRosario;

            textoRuta =
                "Rosario → Agua Verde";

            textoLlegada =
                `🏠 Llegada a Agua Verde:
                ${mostrarHoraDesdeMinutos(
                    recorrido.llegadaAguaVerde
                )}`;

        }

        /* AGUA VERDE → ROSARIO */
        else {

            horaSalida =
                recorrido.salida;

            textoRuta =
                "Agua Verde → Rosario";

            textoLlegada =
                `🏁 Llegada a Rosario:
                ${mostrarHoraDesdeMinutos(
                    recorrido.llegadaRosario
                )}`;
        }


        /* HORA */
        let textoHora =
            mostrarHoraDesdeMinutos(
                horaSalida
            );


        /* AURIGA VARIABLE */
        if (
            turno.tipo === "variable" &&
            !sentidoRegreso
        ) {

            textoHora =
                `Entre
                ${mostrarHora(
                    turno.salidaMinima
                )}
                y
                ${mostrarHora(
                    turno.salidaMaxima
                )}`;
        }


        /* CREAR ELEMENTO */
        const elemento =
            document.createElement("div");

        elemento.classList.add("turno");


        /* CONTENIDO */
        elemento.innerHTML = `

            <div class="turno-hora">
                🕐 ${textoHora}
            </div>

            <div class="turno-info">

                <h3>
                    🚍 ${turno.vehiculo}
                </h3>

                <p>
                    📍 ${textoRuta}
                </p>

                <p>
                    ${textoLlegada}
                </p>

                ${
                    turno.regresa === false
                    ?
                    `
                    <p class="estado no-regresa">
                        ⚠️ No regresa a Agua Verde
                    </p>
                    `
                    :
                    `
                    <p class="estado regresa">
                        🔄 Regresa a Agua Verde
                    </p>
                    `
                }

            </div>
        `;


        /* MARCAR PRIMERA SALIDA */
        if (indice === 0) {

            const estado =
                document.createElement("div");

            estado.classList.add(
                "estado",
                "proximo-estado"
            );

            estado.textContent =
                "🟢 Próximo";

            elemento.appendChild(
                estado
            );
        }


        listaTurnos.appendChild(
            elemento
        );

    });
}


/* TODOS LOS HORARIOS */
function mostrarTodosLosHorarios() {

    const listaCompleta =
        document.getElementById(
            "lista-completa"
        );

    listaCompleta.innerHTML = "";


    turnos.forEach(function(turno) {

        /* SI ES REGRESO Y NO REGRESA,
           NO MOSTRAR */
        if (
            sentidoRegreso &&
            turno.regresa === false
        ) {
            return;
        }


        const recorrido =
            calcularRecorrido(turno);


        let horaSalida;
        let textoRuta;
        let textoLlegada;


        /* ROSARIO → AGUA VERDE */
        if (sentidoRegreso) {

            horaSalida =
                recorrido.salidaRosario;

            textoRuta =
                "Rosario → Agua Verde";

            textoLlegada =
                "🏠 Llegada a Agua Verde: " +
                mostrarHoraDesdeMinutos(
                    recorrido.llegadaAguaVerde
                );

        }


        /* AGUA VERDE → ROSARIO */
        else {

            horaSalida =
                recorrido.salida;

            textoRuta =
                "Agua Verde → Rosario";

            textoLlegada =
                "🏁 Llegada a Rosario: " +
                mostrarHoraDesdeMinutos(
                    recorrido.llegadaRosario
                );
        }


        /* HORA */
        let textoHora =
            mostrarHoraDesdeMinutos(
                horaSalida
            );


        /* AURIGA VARIABLE */
        if (
            turno.tipo === "variable" &&
            !sentidoRegreso
        ) {

            textoHora =
                "Entre " +
                mostrarHora(
                    turno.salidaMinima
                ) +
                " y " +
                mostrarHora(
                    turno.salidaMaxima
                );
        }


        /* CREAR TARJETA */
        const elemento =
            document.createElement("div");

        elemento.classList.add("turno");


        elemento.innerHTML = `
            <div class="turno-hora">
                🕐 ${textoHora}
            </div>

            <div class="turno-info">

                <h3>
                    🚍 ${turno.vehiculo}
                </h3>

                <p>
                    📍 ${textoRuta}
                </p>

                <p>
                    ${textoLlegada}
                </p>

                ${
                    turno.regresa === false
                    ?
                    `
                    <p class="estado no-regresa">
                        ⚠️ No regresa a Agua Verde
                    </p>
                    `
                    :
                    `
                    <p class="estado regresa">
                        🔄 Regresa a Agua Verde
                    </p>
                    `
                }

            </div>
        `;


        listaCompleta.appendChild(
            elemento
        );

    });
}







/* BOTON TODOS LOS HORARIOS */

const botonHorarios =
    document.getElementById(
        "boton-horarios"
    );


const todosLosHorarios =
    document.getElementById(
        "todos-los-horarios"
    );


botonHorarios.addEventListener(
    "click",
    function() {

        /* MOSTRAR / OCULTAR */

        todosLosHorarios.classList.toggle(
            "oculto"
        );


        /* CAMBIAR TEXTO DEL BOTON */

        if (
            todosLosHorarios.classList.contains(
                "oculto"
            )
        ) {

            botonHorarios.textContent =
                "VER TODOS LOS HORARIOS";

        } else {

            botonHorarios.textContent =
                "🔽 OCULTAR HORARIOS";

        }

    }
);

/* BOTON VER PARADAS PRINCIPALES */

const botonParadas =
    document.getElementById(
        "boton-paradas"
    );


const listaParadas =
    document.getElementById(
        "lista-paradas"
    );


botonParadas.addEventListener(
    "click",
    function() {

        /* MOSTRAR / OCULTAR */

        listaParadas.classList.toggle(
            "oculto"
        );


        /* CAMBIAR TEXTO DEL BOTON */

        if (
            listaParadas.classList.contains(
                "oculto"
            )
        ) {

            botonParadas.textContent =
                "VER PARADAS PRINCIPALES";

        } else {

            botonParadas.textContent =
                "🔽 OCULTAR PARADAS";

        }

    }
);




/* FUNCION PROXIMO TURNO */
function mostrarProximoTurno() {

    const proximoTurno =
        document.getElementById(
            "proximo-turno"
        );

    const turno =
        buscarProximoTurno();

    if (!turno) {

        proximoTurno.innerHTML = `
            <h3>🌙 No hay más salidas</h3>

            <p>
                Ya terminaron los turnos de hoy.
            </p>
        `;

        return;
    }

    const recorrido =
        calcularRecorrido(turno);

    let horaSalida;
    let textoRuta;

    if (sentidoRegreso) {

        /* ROSARIO → AGUA VERDE */

        horaSalida =
            recorrido.salidaRosario;

        textoRuta =
            "Rosario → Agua Verde";

    } else {

        /* AGUA VERDE → ROSARIO */

        horaSalida =
            recorrido.salida;

        textoRuta =
            "Agua Verde → Rosario";
    }

    const minutosRestantes =
        horaSalida -
        convertirAMinutos(
            obtenerHoraActual()
        );

    let textoRestante = "";

    if (minutosRestantes === 0) {

        textoRestante =
            "¡Sale ahora!";

    } else if (minutosRestantes === 1) {

        textoRestante =
            "Sale en 1 minuto";

    } else {

        textoRestante =
            `Sale en ${minutosRestantes} minutos`;
    }

    proximoTurno.innerHTML = `
        <h3>
            🚍 ${turno.vehiculo}
        </h3>

        <p>
             ${textoRuta}
        </p>

        <strong>
             ${mostrarHoraDesdeMinutos(horaSalida)}
        </strong>

        <div class="minutos-restantes">
            ${textoRestante}
        </div>
    `;
}




/* CALCULAR HORARIOS DEL RECORRIDO */
function calcularRecorrido(turno) {

    const salida =
        convertirAMinutos(
            obtenerHoraSalida(turno)
        );

    const llegadaRosario =
        salida + 40;

    const salidaRosario =
        turno.horaRegreso
            ?
            convertirAMinutos(
                turno.horaRegreso
            )
            :
            llegadaRosario + 10;

    const llegadaAguaVerde =
        salidaRosario + 40;

    return {
        salida: salida,
        llegadaRosario: llegadaRosario,
        salidaRosario: salidaRosario,
        llegadaAguaVerde: llegadaAguaVerde
    };
}


/* FUNCION OBTENER ESTADO */

function obtenerEstado(turno) {

    const horaActual =
        convertirAMinutos(
            obtenerHoraActual()
        );


    /* HORA DE SALIDA */

    const horaSalida =
        convertirAMinutos(
            obtenerHoraSalida(turno)
        );


    /* TODAVIA NO SALE */

    if (horaActual < horaSalida) {

        return "proximo";

    }


    /* TRANSPORTE QUE NO REGRESA */

    if (turno.regresa === false) {

        if (horaActual >= horaSalida) {

            return "camino";

        }

    }


    /* CALCULAR RECORRIDO */

    const recorrido =
        calcularRecorrido(turno);


    /* VA HACIA ROSARIO */

    if (
        horaActual >= recorrido.salida &&
        horaActual < recorrido.llegadaRosario
    ) {

        return "camino";

    }


    /* ESTA EN ROSARIO */

    if (
        horaActual >= recorrido.llegadaRosario &&
        horaActual < recorrido.salidaRosario
    ) {

        return "rosario";

    }


    /* REGRESANDO */

    if (
        horaActual >= recorrido.salidaRosario &&
        horaActual < recorrido.llegadaAguaVerde
    ) {

        return "regresando";

    }


    /* YA TERMINO */

    return "terminado";

}
/* === ACTUALIZAR PÁGINA === */

setInterval(function() {

    location.reload();

}, 60000);

/* HORA ACTUAL */

function obtenerHoraActual() {

    const ahora = new Date();

    const horas = String(ahora.getHours()).padStart(2, "0");

    const minutos = String(ahora.getMinutes()).padStart(2, "0");

    return `${horas}:${minutos}`;
}


/* CONVERTIR HORA A MINUTOS */

function convertirAMinutos(hora) {

    const partes = hora.split(":");

    const horas = Number(partes[0]);

    const minutos = Number(partes[1]);

    return (horas * 60) + minutos;
}


/* OBTENER HORA DE SALIDA */

function obtenerHoraSalida(turno) {

    if (turno.tipo === "variable") {

        return turno.salidaMinima;

    }

    return turno.salida;
}

/* CALCULAR MINUTOS PARA LA SALIDA */

function
calcularMinutosRestantes(turno) {

    const horaActual =
    convertirAMinutos(obtenerHoraActual() );

    const horaSalida =
    convertirAMinutos(obtenerHoraSalida(turno));

    return horaSalida - horaActual;
}

/* SENTIDO DEL VIAJE */

let sentidoRegreso = false;

/* BUSCAR PROXIMO TURNO SEGUN SENTIDO */
function buscarProximoTurno() {

    const horaActual =
        convertirAMinutos(
            obtenerHoraActual()
        );

    const proximo =
        turnos.find(function(turno) {

            /* SI ESTAMOS EN REGRESO */
            if (
                sentidoRegreso &&
                turno.regresa === false
            ) {
                return false;
            }

            const recorrido =
                calcularRecorrido(turno);

            let horaSalida;

            if (sentidoRegreso) {

                /* ROSARIO → AGUA VERDE */

                horaSalida =
                    recorrido.salidaRosario;

            } else {

                /* AGUA VERDE → ROSARIO */

                horaSalida =
                    recorrido.salida;
            }

            return horaSalida >= horaActual;
        });

    return proximo;
}




function mostrarHora(hora) {

    const partes =
    hora.split(":");

    let horas =
    Number(partes[0]);

    const minutos = partes[1];

    const periodo = horas >=
    12 ? "PM" : "AM";

    horas = horas % 12;

    if (horas === 0) {

        horas = 12;
    }

    return `${horas}:${minutos}${periodo} `;
}


/* CONVERTIR MINUTOS A HORA */

function mostrarHoraDesdeMinutos(minutosTotales) {

    let horas =
        Math.floor(minutosTotales / 60);

    const minutos =
        minutosTotales % 60;


    /* CORREGIR SI PASAMOS DE MEDIANOCHE */

    horas = horas % 24;


    const hora =
        String(horas).padStart(2, "0");

    const minuto =
        String(minutos).padStart(2, "0");


    return mostrarHora(
        `${hora}:${minuto}`
    );

}


/* === ACTUALIZAR TRANSPORTE === */

setInterval(function() {

    mostrarProximoTurno();
    mostrarTurnos();

}, 45000);




/* === RELOJ === */

/* RELOJ Y FECHA */

function actualizarReloj() {

    const ahora = new Date();


    /* HORA */

    const horas =
        String(ahora.getHours()).padStart(2, "0");

    const minutos =
        String(ahora.getMinutes()).padStart(2, "0");

    const segundos =
        String(ahora.getSeconds()).padStart(2, "0");


    const horaActual =
        `${horas}:${minutos}:${segundos}`;


    /* DIAS DE LA SEMANA */

    const dias = [
        "Domingo",
        "Lunes",
        "Martes",
        "Miércoles",
        "Jueves",
        "Viernes",
        "Sábado"
    ];


    /* MESES */

    const meses = [
        "enero",
        "febrero",
        "marzo",
        "abril",
        "mayo",
        "junio",
        "julio",
        "agosto",
        "septiembre",
        "octubre",
        "noviembre",
        "diciembre"
    ];


    /* FECHA */

    const dia =
        dias[ahora.getDay()];

    const numeroDia =
        ahora.getDate();

    const mes =
        meses[ahora.getMonth()];

    const año =
        ahora.getFullYear();


    /* MOSTRAR TODO */

    document.getElementById("reloj").innerHTML = `

         ${horaActual}

        <br>

        <span class="fecha">

             ${dia},
            ${numeroDia} de
            ${mes} de
            ${año}

        </span>

    `;

}


/* EJECUTAR RELOJ */

actualizarReloj();


/* ACTUALIZAR CADA SEGUNDO */

setInterval(actualizarReloj, 1000);

/* === EJECUCIONES === */
mostrarAvisos();
mostrarTurnos();
mostrarTransporteExterno();
mostrarMensajeBiblico();
mostrarTodosLosHorarios();
mostrarProximoTurno();





/* BOTON SENTIDO DEL VIAJE */
const botonSentido =
    document.getElementById(
        "boton-sentido"
    );

botonSentido.addEventListener(
    "click",
    function() {

        /* CAMBIAR SENTIDO */
        sentidoRegreso =
            !sentidoRegreso;

        /* CAMBIAR BOTON */
        if (sentidoRegreso) {

            botonSentido.textContent =
                "ROSARIO → AGUA VERDE";

            document.body.classList.add(
                "modo-regreso"
            );

        } else {

            botonSentido.textContent =
                "AGUA VERDE → ROSARIO";

            document.body.classList.remove(
                "modo-regreso"
            );
        }

        /* ACTUALIZAR INMEDIATAMENTE */
        mostrarProximoTurno();
        mostrarTurnos();
        mostrarTodosLosHorarios();
    }
);
