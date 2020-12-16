
var pulsanteGenera = document.getElementById("genera");
pulsanteGenera.addEventListener('click',
function() {
  // Valori di input
  var nome = document.getElementById('nome').value;
  var numerokm = document.getElementById('numerokm').value;
  var eta = document.getElementById('eta').value;

  console.log(nome);
  console.log(numerokm);
  console.log(eta);

  var biglietto = (numerokm * 0.21);
  var scontogiovani = ((numerokm * 0.21) * 20) / 100;
  var scontoover65 = ((numerokm * 0.21) * 40) / 100;

  if (eta == 'minorenne') {
    var biglietto = biglietto - scontogiovani;
    var offer = 'Sconto minorenni'
  }else if (eta == 'Over65') {
    var biglietto = biglietto - scontoover65;
    var offer = 'Sconto over 65'
  } else {
    var offer = 'Tariffa base'
  }

  var carrozza = Math.floor((Math.random() * 10) + 1);
  var min = 90000;
  var max = 100000;
  var cp = Math.floor(Math.random() * (max - min) ) + min;

  // Dati biglietto
  document.getElementById('nome-passeggero').innerHTML= nome;
  document.getElementById('offerta-passeggero').innerHTML= offer;
  document.getElementById('carrozza').innerHTML= carrozza;
  document.getElementById('codice-cp').innerHTML= cp;
  document.getElementById('costo-biglietto').innerHTML= biglietto.toFixed(2) + '€';

  // Effetto show
  document.getElementById('dati').className = "show";
}
);

var pulsanteAnnulla = document.getElementById("annulla");
pulsanteAnnulla.addEventListener('click',
function() {
  // Effetto hidden
  document.getElementById('dati').className = "hidden";

  // Svuotare
  var nome = document.getElementById('nome').value = "";
  var numerokm = document.getElementById('numerokm').value = "";
  var eta = document.getElementById('eta').value = "";

  document.getElementById('nome-passeggero').innerHTML= "";
  document.getElementById('offerta-passeggero').innerHTML= "";
  document.getElementById('carrozza').innerHTML= "";
  document.getElementById('codice-cp').innerHTML= "";
  document.getElementById('costo-biglietto').innerHTML= "";
}
);
