// let numeroSecreto = 6;
// let numeroUsuario = prompt("Me indicas un n�mero por favor:");

// console.log(numeroUsuario);

// if (numeroUsuario == numeroSecreto) {
//     alert('Acertaste el n�mero');
// }

let numeroMaxPosible = 100;
let numeroSecreto = Math.floor(Math.random() * numeroMaxPosible) + 1;
let numeroUsuario = 0;
let intentos = 1;
// let palabraVeces = "vez";
let maximoIntentos = 3;

while (numeroUsuario != numeroSecreto) {
  numeroUsuario = parseInt(
    prompt(`Dame un numero entre 1 y ${numeroMaxPosible}`)
  );
  console.log(numeroUsuario);

  // este es un comentari
  if (numeroUsuario == numeroSecreto) {
    alert(
      `acertaste el numero: ${numeroSecreto}. Lo hiciste en ${intentos} ${
        intentos == 1 ? "vez" : "veces"
      }`
    );
  } else {
    if (numeroUsuario > numeroSecreto) {
      alert("El numero es menor");
    } else {
      alert(`el numero mayor`);
    }
    // incrementamos el contador cuando no acierta
    // intentos = intentos + 1;
    intentos++;
    // palabraVeces = "Veces";
    if (intentos > maximoIntentos) {
      alert(`Llegaste al numero maximo de intentos: ${maximoIntentos}`);
      break;
    }
  }
}
