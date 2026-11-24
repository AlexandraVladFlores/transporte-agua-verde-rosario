/* === DATOS DE TRANSPORTE === */

const turnos = [
    { vehiculo: "Chema",  tipo: "fijo",     salida: "06:00", destino: "Rosario", regresa: true },
    { vehiculo: "Auriga", tipo: "variable", salidaMinima: "06:20", salidaMaxima: "06:40", destino: "Rosario", regresa: true },
    { vehiculo: "Pancho", tipo: "fijo",     salida: "07:00", destino: "Rosario", regresa: true },
    { vehiculo: "Verde",  tipo: "fijo",     salida: "07:30", destino: "Rosario", regresa: true },
    { vehiculo: "Chema",  tipo: "fijo",     salida: "08:00", destino: "Rosario", regresa: true },
    { vehiculo: "Auriga", tipo: "variable", salidaMinima: "08:20", salidaMaxima: "08:40", destino: "Rosario", regresa: true },
    { vehiculo: "Pancho", tipo: "fijo",     salida: "09:00", destino: "Rosario", regresa: true },
    { vehiculo: "Chema",  tipo: "fijo",     salida: "09:20", destino: "Rosario", regresa: true },
    { vehiculo: "Verde",  tipo: "fijo",     salida: "10:00", destino: "Rosario", regresa: true },
    { vehiculo: "Pancho", tipo: "fijo",     salida: "10:40", destino: "Rosario", regresa: true },
    { vehiculo: "Auriga", tipo: "fijo",     salida: "11:00", destino: "Rosario", regresa: true },
    { vehiculo: "Pancho", tipo: "fijo",     salida: "11:20", destino: "Rosario", regresa: true },
    { vehiculo: "Verde",  tipo: "fijo",     salida: "12:00", destino: "Rosario", regresa: true },
    { vehiculo: "Auriga", tipo: "fijo",     salida: "12:20", destino: "Rosario", regresa: true },
    { vehiculo: "Pancho", tipo: "fijo",     salida: "12:40", destino: "Rosario", regresa: true },
    { vehiculo: "Auriga", tipo: "fijo",     salida: "13:00", destino: "Rosario", regresa: true },
    { vehiculo: "Chema",  tipo: "fijo",     salida: "13:20", destino: "Rosario", regresa: true },
    { vehiculo: "Verde",  tipo: "fijo",     salida: "14:00", destino: "Rosario", regresa: true },
    { vehiculo: "Pancho", tipo: "fijo",     salida: "14:40", destino: "Rosario", regresa: true },
    { vehiculo: "Auriga", tipo: "fijo",     salida: "15:00", destino: "Rosario", regresa: true },
    { vehiculo: "Chema",  tipo: "fijo",     salida: "15:20", destino: "Rosario", regresa: true },

    /* 16:00 - NO REGRESA */
    { vehiculo: "Verde",  tipo: "fijo",     salida: "16:00", destino: "Rosario", regresa: false },

    /* 16:40 - ULTIMO VIAJE */
    { vehiculo: "Chema",  tipo: "fijo",     salida: "16:40", destino: "Rosario", regresa: true, horaRegreso: "18:00" }
];

const transporteLosPozos = {
    salidaAguaVerde: "08:30",
    llegadaRosario: "09:05",
    salidaRosario: "12:30",
    llegadaAguaVerde: "13:10",
    diaSinServicio: 4
};

/* SENTIDO DEL VIAJE (false = Agua Verde → Rosario) */

let sentidoRegreso = false;


/* === MENSAJES BIBLICOS DEL DIA === */

const mensajesBiblicos = [
    { texto: "Dios cuida de ti en tu camino y protege tu salida y tu regreso.", cita: "Salmo 121:7-8" },
    { texto: "Dios puede acompañarte en el camino y poner personas que te ayuden.", cita: "Tobías 5:16-17" },
    { texto: "Dios manda a sus ángeles para cuidarte y protegerte en tus caminos.", cita: "Salmo 91:11-12" },
    { texto: "Dios va delante de ti y te acompaña durante el camino.", cita: "Éxodo 23:20" },
    { texto: "Puedes descansar en paz porque Dios está contigo.", cita: "Salmo 4:9" },
    { texto: "Dios va delante de ti, estará contigo y nunca te abandonará.", cita: "Deuteronomio 31:8" },
    { texto: "Dios está contigo dondequiera que vayas.", cita: "Génesis 28:15" },
    { texto: "Puedes caminar con confianza porque Dios está contigo y cuida tus pasos.", cita: "Proverbios 3:23-24" },
    { texto: "No importa hacia dónde vayas: la mano de Dios puede guiarte y sostenerte.", cita: "Salmo 139:9-10" },
    { texto: "Confía en Dios y recuerda su bondad durante tu camino.", cita: "Salmo 34:8" },
    { texto: "Ten presente a Dios y camina con confianza, porque Él está a tu lado.", cita: "Salmo 16:8" },
    { texto: "Sé fuerte y valiente. No tengas miedo, porque Dios está contigo.", cita: "Josué 1:9" },
    { texto: "No tengas miedo. Dios está contigo, te fortalece y te sostiene.", cita: "Isaías 41:10" },
    { texto: "Pon tu camino en las manos de Dios y confía en Él.", cita: "Salmo 37:5" }
];

function mostrarMensajeBiblico() {

    const ahora = new Date();

    /* CALCULAR DIA DEL AÑO */
    const inicioDelAño = new Date(ahora.getFullYear(), 0, 0);
    const unDia = 1000 * 60 * 60 * 24;
    const diaDelAño = Math.floor((ahora - inicioDelAño) / unDia);

    /* ELEGIR MENSAJE */
    const mensaje = mensajesBiblicos[diaDelAño % mensajesBiblicos.length];

    document.getElementById("mensaje-biblico").innerHTML = `
        <p>“${mensaje.texto}”</p>
        <strong>— ${mensaje.cita}</strong>
    `;
}


/* === TRANSPORTE DE LOS POZOS === */

function mostrarTransporteExterno() {

    const contenedor = document.getElementById("transporte-externo");

    /* SI ES JUEVES */
    if (new Date().getDay() === transporteLosPozos.diaSinServicio) {

        contenedor.innerHTML = `
            <div class="externo-sin-servicio">
                <h3>Hoy no pasa</h3>
                <p>El transporte de Los Pozos no circula los jueves.</p>
            </div>
        `;

        return;
    }

    /* HORARIO NORMAL */
    contenedor.innerHTML = `
        <div class="externo-card">

            <h3>Los Pozos → Rosario</h3>

            <div class="fila-externo"><span>Pasa por Agua Verde</span><strong>8:25 AM</strong></div>
            <div class="fila-externo"><span>Sale de Agua Verde</span><strong>8:30 AM</strong></div>
            <div class="fila-externo"><span>Llegada a Rosario</span><strong>9:05 AM</strong></div>

            <h3 class="externo-regreso">Regreso</h3>

            <div class="fila-externo"><span>Sale de Rosario</span><strong>12:30 PM</strong></div>
            <div class="fila-externo"><span>Llega a Agua Verde</span><strong>1:10 PM</strong></div>

            <p class="nota">Después continúa hacia <strong>Los Pozos.</strong></p>

        </div>
    `;
}


/* === INFORMACION DEL DIA === */

const mensajesDelDia = [
    { titulo: "¡Es un buen día!", mensaje: "Que tengas un excelente día y buen viaje." },
    { titulo: "¡Que tengas un bonito día!", mensaje: "Recuerda salir con tiempo para tomar tu transporte." },
    { titulo: "¡Buen viaje!", mensaje: "Consulta tus horarios antes de salir de casa." },
    { titulo: "¡Excelente día!", mensaje: "Esperamos que tengas un buen camino." },
    { titulo: "¡Que tengas un buen día!", mensaje: "Recuerda revisar cuál es tu próxima salida." },
    { titulo: "¡Bonito día para todos!", mensaje: "Viaja con calma y toma tus precauciones." },
    { titulo: "¡Feliz día!", mensaje: "Que tengas un buen viaje de Agua Verde a Rosario." }
];

/* AVISO DE PRECAUCION
   Se muestra todos los días desde el 24 hasta el 30 de noviembre de 2026.
   Para cambiar las fechas, edita estos números (el mes empieza en 0:
   enero = 0, noviembre = 10). */

const avisoPrecaucion = {
    año: 2026,
    mes: 10,
    diaInicio: 24,
    diaFin: 30,
    titulo: "Viaja con precaución",
    mensaje: "Hay operaciones militares en la zona. Toma tus precauciones, sal con tiempo, avisa a tu familia a dónde vas y sigue las indicaciones de las autoridades."
};

function hayAvisoPrecaucion() {

    const ahora = new Date();

    return ahora.getFullYear() === avisoPrecaucion.año &&
           ahora.getMonth() === avisoPrecaucion.mes &&
           ahora.getDate() >= avisoPrecaucion.diaInicio &&
           ahora.getDate() <= avisoPrecaucion.diaFin;
}

function mostrarAvisos() {

    const mensaje = mensajesDelDia[new Date().getDay()];

    let html = "";

    /* AVISO DE PRECAUCION (aparece primero) */
    if (hayAvisoPrecaucion()) {

        html += `
            <div class="aviso aviso-precaucion">
                <h3>${avisoPrecaucion.titulo}</h3>
                <p>${avisoPrecaucion.mensaje}</p>
            </div>
        `;
    }

    /* MENSAJE NORMAL DEL DIA */
    html += `
        <div class="aviso">
            <h3>${mensaje.titulo}</h3>
            <p>${mensaje.mensaje}</p>
        </div>
    `;

    document.getElementById("lista-avisos").innerHTML = html;
}


/* === HORAS === */

function obtenerHoraActual() {

    const ahora = new Date();

    const horas = String(ahora.getHours()).padStart(2, "0");
    const minutos = String(ahora.getMinutes()).padStart(2, "0");

    return `${horas}:${minutos}`;
}

/* "06:20" → 380 */
function convertirAMinutos(hora) {

    const partes = hora.split(":");

    return (Number(partes[0]) * 60) + Number(partes[1]);
}

/* "14:40" → "2:40 PM" */
function mostrarHora(hora) {

    const partes = hora.split(":");

    let horas = Number(partes[0]);
    const minutos = partes[1];

    const periodo = horas >= 12 ? "PM" : "AM";

    horas = horas % 12;

    if (horas === 0) {
        horas = 12;
    }

    return `${horas}:${minutos} ${periodo}`;
}

/* 880 → "2:40 PM" */
function mostrarHoraDesdeMinutos(minutosTotales) {

    /* CORREGIR SI PASAMOS DE MEDIANOCHE */
    const horas = Math.floor(minutosTotales / 60) % 24;
    const minutos = minutosTotales % 60;

    return mostrarHora(
        String(horas).padStart(2, "0") + ":" + String(minutos).padStart(2, "0")
    );
}

function obtenerHoraSalida(turno) {

    if (turno.tipo === "variable") {
        return turno.salidaMinima;
    }

    return turno.salida;
}

/* 95 → "Sale en 1 h 35 min" */
function textoTiempo(minutos) {

    if (minutos <= 0) {
        return "¡Sale ahora!";
    }

    if (minutos === 1) {
        return "Sale en 1 minuto";
    }

    if (minutos < 60) {
        return `Sale en ${minutos} minutos`;
    }

    const horas = Math.floor(minutos / 60);
    const resto = minutos % 60;

    return resto === 0
        ? `Sale en ${horas} h`
        : `Sale en ${horas} h ${resto} min`;
}


/* === CALCULOS DEL RECORRIDO === */

function calcularRecorrido(turno) {

    const salida = convertirAMinutos(obtenerHoraSalida(turno));

    const llegadaRosario = salida + 40;

    const salidaRosario = turno.horaRegreso
        ? convertirAMinutos(turno.horaRegreso)
        : llegadaRosario + 10;

    const llegadaAguaVerde = salidaRosario + 40;

    return {
        salida: salida,
        llegadaRosario: llegadaRosario,
        salidaRosario: salidaRosario,
        llegadaAguaVerde: llegadaAguaVerde
    };
}

/* Hora de salida según el sentido elegido */
function obtenerHoraSegunSentido(turno) {

    const recorrido = calcularRecorrido(turno);

    return sentidoRegreso ? recorrido.salidaRosario : recorrido.salida;
}

/* ¿Este turno se muestra en el sentido actual? */
function aplicaEnSentido(turno) {

    return !(sentidoRegreso && turno.regresa === false);
}

function buscarProximoTurno() {

    const horaActual = convertirAMinutos(obtenerHoraActual());

    return turnos.find(function(turno) {

        return aplicaEnSentido(turno) &&
               obtenerHoraSegunSentido(turno) >= horaActual;
    });
}

/* Estado del turno (por si lo quieres usar después) */
function obtenerEstado(turno) {

    const horaActual = convertirAMinutos(obtenerHoraActual());
    const recorrido = calcularRecorrido(turno);

    if (horaActual < recorrido.salida) return "proximo";

    if (turno.regresa === false) return "camino";

    if (horaActual < recorrido.llegadaRosario) return "camino";
    if (horaActual < recorrido.salidaRosario) return "rosario";
    if (horaActual < recorrido.llegadaAguaVerde) return "regresando";

    return "terminado";
}


/* === TARJETA DE UN TURNO ===
   retraso: milisegundos para la animación de entrada
   (si es undefined, la tarjeta aparece sin animación) */

function crearTarjeta(turno, marcarProximo, retraso) {

    const recorrido = calcularRecorrido(turno);

    let horaSalida;
    let textoRuta;
    let textoLlegada;

    if (sentidoRegreso) {

        /* ROSARIO → AGUA VERDE */
        horaSalida = recorrido.salidaRosario;
        textoRuta = "Rosario → Agua Verde";
        textoLlegada = "Llegada a Agua Verde: " +
            mostrarHoraDesdeMinutos(recorrido.llegadaAguaVerde);

    } else {

        /* AGUA VERDE → ROSARIO */
        horaSalida = recorrido.salida;
        textoRuta = "Agua Verde → Rosario";
        textoLlegada = "Llegada a Rosario: " +
            mostrarHoraDesdeMinutos(recorrido.llegadaRosario);
    }

    /* HORA (Auriga variable muestra un rango) */
    let textoHora = mostrarHoraDesdeMinutos(horaSalida);

    if (turno.tipo === "variable" && !sentidoRegreso) {

        textoHora = "Entre " + mostrarHora(turno.salidaMinima) +
                    " y " + mostrarHora(turno.salidaMaxima);
    }

    const elemento = document.createElement("div");

    elemento.classList.add("turno");

    if (retraso !== undefined) {
        elemento.classList.add("entrar");
        elemento.style.animationDelay = retraso + "ms";
    }

    if (marcarProximo) {
        elemento.classList.add("turno-proximo");
    }

    elemento.innerHTML = `
        <div class="turno-hora">${textoHora}</div>

        <div class="turno-info">

            <h3>${turno.vehiculo}</h3>

            <p><span>Ruta:</span> ${textoRuta}</p>

            <p>${textoLlegada}</p>

            ${
                turno.regresa === false
                ? `<div class="estado no-regresa">No regresa a Agua Verde</div>`
                : `<div class="estado regresa">Regresa a Agua Verde</div>`
            }

        </div>
    `;

    /* MARCAR PRIMERA SALIDA */
    if (marcarProximo) {

        const estado = document.createElement("div");

        estado.classList.add("estado", "proximo-estado");
        estado.innerHTML = `<span class="punto"></span>Próximo`;

        elemento.querySelector(".turno-info").prepend(estado);
    }

    return elemento;
}


/* === PROXIMAS 5 SALIDAS === */

function mostrarTurnos(animar) {

    const listaTurnos = document.getElementById("lista-turnos");

    const horaActual = convertirAMinutos(obtenerHoraActual());

    const proximos = turnos
        .filter(function(turno) {
            return aplicaEnSentido(turno) &&
                   obtenerHoraSegunSentido(turno) >= horaActual;
        })
        .slice(0, 5);

    listaTurnos.innerHTML = "";

    if (proximos.length === 0) {

        listaTurnos.innerHTML = `<p class="sin-salidas">No hay más salidas por hoy.</p>`;
        return;
    }

    proximos.forEach(function(turno, indice) {

        const retraso = animar ? indice * 90 : undefined;

        listaTurnos.appendChild(
            crearTarjeta(turno, indice === 0, retraso)
        );
    });
}


/* === TODOS LOS HORARIOS === */

function mostrarTodosLosHorarios() {

    const listaCompleta = document.getElementById("lista-completa");

    listaCompleta.innerHTML = "";

    turnos.forEach(function(turno) {

        if (!aplicaEnSentido(turno)) {
            return;
        }

        listaCompleta.appendChild(
            crearTarjeta(turno, false)
        );
    });
}


/* === TARJETA GRANDE: QUIEN SIGUE === */

function mostrarProximoTurno() {

    const contenedor = document.getElementById("proximo-turno");

    const turno = buscarProximoTurno();

    if (!turno) {

        contenedor.innerHTML = `
            <p class="proximo-vehiculo">No hay más salidas</p>
            <p class="proximo-ruta">Ya terminaron los turnos de hoy.</p>
        `;

        return;
    }

    const horaSalida = obtenerHoraSegunSentido(turno);

    const textoRuta = sentidoRegreso
        ? "Rosario → Agua Verde"
        : "Agua Verde → Rosario";

    const minutosRestantes =
        horaSalida - convertirAMinutos(obtenerHoraActual());

    contenedor.innerHTML = `
        <p class="proximo-vehiculo">${turno.vehiculo}</p>

        <p class="proximo-ruta">${textoRuta}</p>

        <strong class="proximo-hora">${mostrarHoraDesdeMinutos(horaSalida)}</strong>

        <div class="minutos-restantes">
            <span class="punto"></span>
            ${textoTiempo(minutosRestantes)}
        </div>
    `;
}


/* === RELOJ Y FECHA === */

function actualizarReloj() {

    const ahora = new Date();

    const horas = String(ahora.getHours()).padStart(2, "0");
    const minutos = String(ahora.getMinutes()).padStart(2, "0");
    const segundos = String(ahora.getSeconds()).padStart(2, "0");

    const dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

    const meses = [
        "enero", "febrero", "marzo", "abril", "mayo", "junio",
        "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
    ];

    document.getElementById("reloj").innerHTML = `
        <span class="hora">${horas}:${minutos}:${segundos}</span>
        <span class="fecha">
            ${dias[ahora.getDay()]}, ${ahora.getDate()} de
            ${meses[ahora.getMonth()]} de ${ahora.getFullYear()}
        </span>
    `;
}


/* === VISITA ESTOS LUGARES (cambia cada 20 minutos) ===
   Para agregar otro lugar, copia un bloque { ... } y cambia sus datos.
   Si no tiene WhatsApp, deja enlace: "" y no aparece el botón. */

const lugares = [
    {
        imagen: "renta-mobiliario.jpg",
        nombre: "Renta de Mobiliario",
        descripcion: "Mesas y sillas infantiles, mesas y sillas de plástico y mesas para eventos. Pregunta por sus paquetes y reserva con anticipación.",
        enlace: "https://wa.me/526941155456",
        textoBoton: "Escribir por WhatsApp"
    },
    {
        imagen: "tres-hermanos.jpg",
        nombre: "Los Tres Hermanos",
        descripcion: "Mesas, sillas, banquetes y comidas, pasteles y postres para tu celebración. Pide tu cotización desde su página.",
        enlace: "https://alexandravladflores.github.io/Los-Tres-Hermanos/",
        textoBoton: "Visitar su página"
    },
    {
        imagen: "comida-navidena.jpg",
        nombre: "Comida Navideña de Sonia Flores",
        descripcion: "Pavo navideño, barbacoa, rollitos primavera, tamales, gelatinas de mosaico, chesecake y fresas con crema. Ideal para posadas y cenas familiares.",
        enlace: "https://wa.me/526692485864",
        textoBoton: "Hacer pedido por WhatsApp"
    }
];

const minutosPorLugar = 20;

let lugarMostrado = -1;

function mostrarLugar() {

    const bloque = minutosPorLugar * 60 * 1000;

    /* TODOS VEN EL MISMO LUGAR A LA MISMA HORA */
    const indice = Math.floor(Date.now() / bloque) % lugares.length;

    /* BARRA: CUANTO FALTA PARA EL SIGUIENTE CAMBIO */
    const avance = (Date.now() % bloque) / bloque;

    document.getElementById("lugar-barra").style.width =
        (avance * 100) + "%";

    if (indice === lugarMostrado) {
        return;
    }

    const primeraVez = lugarMostrado === -1;

    lugarMostrado = indice;

    const contenedor = document.getElementById("lugar-actual");

    function pintar() {

        const lugar = lugares[indice];

        contenedor.innerHTML = `
            <img src="${lugar.imagen}" alt="${lugar.nombre}">

            <h3>${lugar.nombre}</h3>

            <p>${lugar.descripcion}</p>

            ${
                lugar.enlace
                ? `<a class="boton-lugar" href="${lugar.enlace}" target="_blank" rel="noopener">${lugar.textoBoton}</a>`
                : ""
            }
        `;

        /* PUNTOS INDICADORES */
        document.getElementById("lugar-puntos").innerHTML =
            lugares.map(function(_, i) {
                return `<span class="${i === indice ? "activo" : ""}"></span>`;
            }).join("");

        contenedor.classList.remove("saliendo");
    }

    if (primeraVez) {

        pintar();

    } else {

        /* SALE EL ANTERIOR Y ENTRA EL NUEVO */
        contenedor.classList.add("saliendo");
        setTimeout(pintar, 400);
    }
}


/* === BOTONES DE MOSTRAR / OCULTAR === */

function activarBotonDesplegable(idBoton, idPanel, textoVer, textoOcultar) {

    const boton = document.getElementById(idBoton);
    const panel = document.getElementById(idPanel);

    boton.addEventListener("click", function() {

        panel.classList.toggle("oculto");

        const oculto = panel.classList.contains("oculto");

        boton.textContent = oculto ? textoVer : textoOcultar;
        boton.setAttribute("aria-expanded", String(!oculto));
    });
}

activarBotonDesplegable(
    "boton-horarios", "todos-los-horarios",
    "VER TODOS LOS HORARIOS", "OCULTAR HORARIOS"
);

activarBotonDesplegable(
    "boton-paradas", "lista-paradas",
    "VER PARADAS PRINCIPALES", "OCULTAR PARADAS"
);


/* === BOTON SENTIDO DEL VIAJE === */

const botonSentido = document.getElementById("boton-sentido");

botonSentido.addEventListener("click", function() {

    sentidoRegreso = !sentidoRegreso;

    if (sentidoRegreso) {

        botonSentido.textContent = "ROSARIO → AGUA VERDE";
        document.body.classList.add("modo-regreso");

    } else {

        botonSentido.textContent = "AGUA VERDE → ROSARIO";
        document.body.classList.remove("modo-regreso");
    }

    /* ACTUALIZAR INMEDIATAMENTE (con animación) */
    mostrarProximoTurno();
    mostrarTurnos(true);
    mostrarTodosLosHorarios();
});


/* === TELEFONOS IMPORTANTES ===
   Para agregar otro, copia un bloque { ... } y cambia sus datos.
   El "tel" va sin espacios ni guiones, con +52 al inicio
   (para el 911 va solo 911). */

const telefonos = [
    {
        nombre: "Emergencias 911",
        detalle: "Policía, bomberos y ambulancia",
        numero: "911",
        tel: "911",
        emergencia: true
    },
    {
        nombre: "Protección Civil El Rosario",
        detalle: "(694) 952 0410",
        numero: "(694) 952 0410",
        tel: "+526949520410",
        emergencia: false
    }
];

function mostrarTelefonos() {

    const lista = document.getElementById("lista-telefonos");

    lista.innerHTML = telefonos.map(function(t) {

        return `
            <div class="telefono ${t.emergencia ? "emergencia" : ""}">
                <div>
                    <h3>${t.nombre}</h3>
                    <p>${t.detalle}</p>
                </div>
                <a class="boton-llamar" href="tel:${t.tel}">Llamar</a>
            </div>
        `;
    }).join("");
}


/* === COMPARTIR POR WHATSAPP === */

document.getElementById("boton-compartir").addEventListener("click", function() {

    const texto = "Horarios del transporte Agua Verde ↔ Rosario, paradas y teléfonos importantes: ";

    const enlace = "https://wa.me/?text=" +
        encodeURIComponent(texto + window.location.href);

    window.open(enlace, "_blank", "noopener");
});


/* === ACTUALIZACIONES AUTOMATICAS ===
   Ya no se recarga la página: así no se pierde el sentido
   elegido ni los paneles abiertos. */

setInterval(actualizarReloj, 1000);

setInterval(function() {

    mostrarProximoTurno();
    mostrarTurnos(false);
    mostrarAvisos();
    mostrarTransporteExterno();
    mostrarMensajeBiblico();
    mostrarLugar();

}, 30000);


/* === EJECUCIONES AL CARGAR === */

actualizarReloj();
mostrarAvisos();
mostrarTurnos(true);
mostrarTransporteExterno();
mostrarMensajeBiblico();
mostrarTodosLosHorarios();
mostrarProximoTurno();
mostrarLugar();
mostrarTelefonos();