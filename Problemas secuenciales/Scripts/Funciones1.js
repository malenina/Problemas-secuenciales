function calcularPago() {
  const metros = parseFloat(document.getElementById("metros").value);

  const resultado = metros * 30

  document.getElementById("resultado").innerText= "el resultado es: " + resultado;
}

function calcularPago2() {
  const kilovatio = parseFloat(document.getElementById("kilovatio").value);

  const resultado = kilovatio * 0.8

  document.getElementById("resultado").innerText= "el resultado es: " + resultado;
}

function calcularPago3() {
  const dinero = parseFloat(document.getElementById("dinero").value);
  const descuento = dinero * 0.20
  const dinerocondecuento = dinero - descuento
  const iva = dinerocondecuento * 0.15

  const resultado = dinerocondecuento + iva

  document.getElementById("resultado").innerText= "el resultado es: " + resultado;
}

function calcularPago4() {
  const sueldo = parseFloat(document.getElementById("sueldo").value);
  const gananciaporaño = sueldo * 48

  const resultado = gananciaporaño * 0.15 

  document.getElementById("resultado").innerText= "el resultado es: " + resultado;
}

function calcularCheque() {
  const dias = parseInt(document.getElementById("dias").value);
  const hotel = parseFloat(document.getElementById("hotel").value);
  const comida = parseFloat(document.getElementById("comida").value);

  const otros = dias * 100;
  const total = (hotel * dias) + (comida * dias) + otros;

  document.getElementById("resultado").innerText = "El total del cheque es: $" + total;
}

function calcularPotencia() {
  const R = parseFloat(document.getElementById("resistencia").value);
  const I = parseFloat(document.getElementById("corriente").value);

  const V = R * I;
  const P = V * I;

  document.getElementById("resultado").innerText = 
    "Voltaje (V) = " + V + " V\n" +
    "Potencia (P) = " + P + " W";
}

function calcularArea() {
  const lado = parseFloat(document.getElementById("lado").value);
  const area = lado * lado;

  document.getElementById("resultado").innerText = "Área del cuadrado: " + area + " unidades cuadradas";
}


function calcularPromedio() {
  const examen1 = parseFloat(document.getElementById("examen1").value);
  const examen2 = parseFloat(document.getElementById("examen2").value);
  const examen3 = parseFloat(document.getElementById("examen3").value);

  const promedio = (examen1 * 0.25) + (examen2 * 0.25) + (examen3 * 0.5);

  document.getElementById("resultado").innerText = "El promedio final del alumno es: " + promedio;
}

function calcularTiempo() {
  const edad = parseFloat(document.getElementById("edad").value);

  const meses = edad * 12;
  const semanas = edad * 52;
  const dias = edad * 365;
  const horas = dias * 24;

  document.getElementById("resultado").innerText =
    "Años vividos: " + edad + "\n" +
    "Meses: " + meses + "\n" +
    "Semanas: " + semanas + "\n" +
    "Días: " + dias + "\n" +
    "Horas: " + horas;
}

function calcularLlamada() {
  const minutos = parseFloat(document.getElementById("minutos").value);
  const costoPorMinuto = parseFloat(document.getElementById("costo").value);

  const costoTotal = minutos * costoPorMinuto;

  document.getElementById("resultado").innerText =
    "El costo total de la llamada es: $" + costoTotal;
}

function calcularEstancia() {
  const noches = parseFloat(document.getElementById("noches").value);
  const costoPorNoche = parseFloat(document.getElementById("costo").value);

  const costoTotal = noches * costoPorNoche;

  document.getElementById("resultado").innerText =
    "El costo total de la estancia es: $" + costoTotal;
}