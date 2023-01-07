document.getElementById('Marca').addEventListener('change', function() {
  if (this.value === 'Marca') {
      document.getElementById('Modelo').disabled = true;
  } else {
      document.getElementById('Modelo').disabled = false;
  }
    });
const botaoformu = document.getElementById('botaoformu');
const formulario = document.getElementById('formulario');
botaoformu.addEventListener('click', () => {
  if (formulario.style.display === 'none') {
      formulario.style.display = 'block';
  } else {
      formulario.style.display = 'none';
  }
});
const botaoestados = document.getElementById('calcular');
const estado = document.getElementById('estado');
botaoestados.addEventListener('click', () => {

  if(calcular()==0){
    return 0;
  }
  if (estado.style.display === 'none') {
      estado.style.display = 'block';
  } else {
      estado.style.display = 'none';
  }
});

const financiamento = document.getElementById('financiamento');
function botaofinanciamento(){

    if (financiamento.style.display === 'none') {
        financiamento.style.display = 'block';
    } else {
        financiamento.style.display = 'none';
    }

}

const estados = document.getElementById('estado');

var marca = document.getElementById("Marca");
var modelo = document.getElementById("Modelo");


marca.addEventListener("change", function() {
  modelo.innerHTML = "";
  if (marca.value == "Alfa_Romeo") {
    modelo.innerHTML = `
      <option value="GUILIETTA">GUILIETTA</option>
    `;
  } else if (marca.value == "Audi") {
    modelo.innerHTML = `
      <option value="A1">A1</option>
      <option value="A1 SPORTBACK">A1 SPORTBACK</option>
      <option value="A3 LIMOUSINE">A1 Sport-back</option>
      <option value="A3 SPORTBACK">A3 SPORTBACK</option>
      <option value="A4 AVANT">A4 AVANT</option>
      <option value="A6 AVANT">A6 AVANT</option>
      <option value="E-TRON">E-TRON</option>
      <option value="Q2">Q2</option>

    `;
  }
 else if (marca.value == "BMW") {
    modelo.innerHTML = `
      <option value="SERIE 1">SERIE 1</option>
      <option value="SERIE 2 ACTIVE TOURER">SERIE 2 ACTIVE TOURER</option>
      <option value="SERIE 2 GRAN COUPE">SERIE 2 GRAN COUPE</option>
      <option value="SERIE 3">SERIE 3</option>
      <option value="SERIE 3 GRANTURISMO">SERIE 3 GRANTURISMO</option>
      <option value="SERIE 3 TOURING">SERIE 3 TOURING</option>
      <option value="SERIE 4 CABRIO">SERIE 4 CABRIO</option>
      <option value="SERIE 4 GRAN COUPE">SERIE 4 GRAN COUPE</option>
      <option value="SERIE 5 TOURING">SERIE 5 TOURING</option>
      <option value="X1">X1</option>
      <option value="X2">X2</option>
    `;
  }
  else if (marca.value == "Citroen") {
    modelo.innerHTML = `
      <option value="C-ELYSÉE">C-ELYSÉE</option>
      <option value="C3 AIRCROSS">C3 AIRCROSS</option>
      <option value="C4">C4</option>
      <option value="C4 CACTUS">C4 CACTUS</option>
      <option value="C5 AIRCROSS">C5 AIRCROSS</option>
      <option value="E-C4">E-C4</option>
      <option value="GRAND C4 SPACETOURER">GRAND C4 SPACETOURER</option>
    `;
  }
  else if (marca.value == "Dacia") {
    modelo.innerHTML = `
      <option value="DUSTER">DUSTER</option>
      <option value="SANDERO">SANDERO</option>
    `;
  }
  else if (marca.value == "DS") {
    modelo.innerHTML = `
      <option value="DS5">DS5</option>

    `;
  }
  else if (marca.value == "Fiat") {
    modelo.innerHTML = `
    <option value="500">500</option>
    <option value="500C">500C</option>
    <option value="500L">500L</option>
    <option value="500X">500X</option>
    <option value="DOBLO">DOBLO</option>
    <option value="FIORNO">FIORNO</option>
    <option value="PUNTO">PUNTO</option>
    <option value="PUNTO VAN">PUNTO VAN</option>
    <option value="TIPO">TIPO</option>
    <option value="TIPO CROSS">TIPO CROSS</option>
    <option value="TIPO SW">TIPO SW</option>
    `;
  }
  else if (marca.value == "Ford") {
    modelo.innerHTML = `
    <option value="FIESTA">FIESTA</option>
    <option value="FOCUS">FOCUS</option>
    <option value="FOCUS SW">FOCUS SW</option>
    <option value="GRAND C-MAX">GRAND C-MAX</option>
    <option value="MONDEO STATION">MONDEO STATION</option>
    <option value="PUMA">PUMA</option>
    `;
  }
  else if (marca.value == "Honda") {
    modelo.innerHTML = `
    <option value="CIVIC">CIVIC</option>
    <option value="CR-V">CR-V</option>
    <option value="JAZZ">JAZZ</option>
    `;
  }
  else if (marca.value == "Hyundai") {
    modelo.innerHTML = `
    <option value="120">120</option>
    <option value="130">130</option>
    <option value="130 FASTBACK">130 FASTBACK</option>
    <option value="KAUAI">KAUAI</option>
    <option value="TUCSON">TUCSON</option>
    `;
  }
  else if (marca.value == "Isuzu") {
    modelo.innerHTML = `
    <option value="D-MAX">D-MAX</option>
    `;
  }
  else if (marca.value == "Jaguar") {
    modelo.innerHTML = `
    <option value="F-PACE">F-PACE</option>
    <option value="XE">XE</option>
    `;
  }
  else if (marca.value == "Jeep") {
    modelo.innerHTML = `
    <option value="RENEGADE">RENEGADE</option>
    `;
  }
  else if (marca.value == "Kia") {
    modelo.innerHTML = `
    <option value="CEED SW">CEED SW</option>
    <option value="NIRO">NIRO</option>
    <option value="PICANTO">PICANTO</option>
    <option value="RIO">RIO</option>
    <option value="RIO VAN">RIO VAN</option>
    <option value="XCEED">XCEED</option>
    `;
  }
  else if (marca.value == "Land_Rover") {
    modelo.innerHTML = `
    <option value="RANGE ROVER EVOQUE">RANGE ROVER EVOQUE</option>
    `;
  }
  else if (marca.value == "Lexus") {
    modelo.innerHTML = `
    <option value="RX">RX</option>
    <option value="UX 250H">UX 250H</option>
    <option value="UX 300E">UX 300E</option>
    `;
  }
  else if (marca.value == "Mazda") {
    modelo.innerHTML = `
    <option value="2">2</option>
    <option value="CX-3">CX-3</option>
    <option value="CX-30">CX-30</option>
    <option value="MAZDA 3">MAZDA 3</option>
    <option value="MX-5">MX-5</option>
    `;
  }
  else if (marca.value == "Mercedez_Benz") {
    modelo.innerHTML = `
    <option value="CLASSE A">CLASSE A</option>
    <option value="CLASSE B">CLASSE B</option>
    <option value="CLASSE C">CLASSE C</option>
    <option value="CLASSE C STATION">CLASSE C STATION</option>
    <option value="CLASSE GLA">CLASSE GLA</option>
    <option value="CLASSE GLC">CLASSE GLC</option>
    <option value="CLASSE GLC GOUPÉ">CLASSE GLC GOUPÉ</option>
    <option value="VITO">VITO</option>
    `;
  }
  else if (marca.value == "Mini") {
    modelo.innerHTML = `
    <option value="CLUBMAN">CLUBMAN</option>
    <option value="COUNTRYMAN">COUNTRYMAN</option>
    <option value="MINI">MINI</option>
    <option value="MINI CABRIO">MINI CABRIO</option>
    `;
  }
  else if (marca.value == "Nissan") {
    modelo.innerHTML = `
    <option value="JUKE">JUKE</option>
    <option value="MICRA">MICRA</option>
    <option value="PULSAR">PULSAR</option>
    <option value="QASHQAI">QASHQAI</option>
    `;
  }
  else if (marca.value == "Opel") {
    modelo.innerHTML = `
    <option value="ADAM">ADAM</option>
    <option value="ASTRA">ASTRA</option>
    <option value="ASTRA SPORTS TOURER">ASTRA SPORTS TOURER</option>
    <option value="CORSA">CORSA</option>
    <option value="CROSSLAND X">CROSSLAND X</option>
    <option value="GRASSLAND X">GRASSLAND X</option>
    <option value="INSIGNIA SPORTS TOURER">INSIGNIA SPORTS TOURER</option>
    <option value="KARL">KARL</option>
    <option value="VIVARO">VIVARO</option>
    <option value="ZAFIRA TOURER">ZAFIRA TOURER</option>
    `;
  }
  else if (marca.value == "Peugeot") {
    modelo.innerHTML = `
    <option value="2008">2008</option>
    <option value="208">208</option>
    <option value="208 VAN">208 VAN</option>
    <option value="3008">3008</option>
    <option value="308">308</option>
    <option value="308 SW">308 SW</option>
    <option value="508 SW">508 SW</option>
    <option value="E-2008">E-2008</option>
    <option value="PARTNER">PARTNER</option>
    `;
  }
  else if (marca.value == "Seat") {
    modelo.innerHTML = `
    <option value="ALHAMBRA">ALHAMBRA</option>
    <option value="ARONA">ARONA</option>
    <option value="ATECA">ATECA</option>
    <option value="IBIZA">IBIZA</option>
    <option value="LEON">LEON</option>
    <option value="LEON ST">LEON ST</option>
    `;
  }
  else if (marca.value == "Skoda") {
    modelo.innerHTML = `
    <option value="CITIGO">CITIGO</option>
    <option value="KODIAQ">KODIAQ</option>
    <option value="OCTAVIA BREAK">OCTAVIA BREAK</option>
    <option value="SCALA">SCALA</option>
    `;
  }
  else if (marca.value == "Smart") {
    modelo.innerHTML = `
    <option value="FORFOUR">FORFOUR</option>
    <option value="FORTWO">FORTWO</option>
    <option value="FORTWO COUPÉ">FORTWO COUPÉ</option>
    `;
  }
  else if (marca.value == "Toyota") {
    modelo.innerHTML = `
    <option value="AYGO">AYGO</option>
    <option value="YARIS">YARIS</option>
    `;
  }
  else if (marca.value == "Volkswagen") {
    modelo.innerHTML = `
    <option value="ARTEON">ARTEON</option>
    <option value="CADDY">CADDY</option>
    <option value="GOLF">GOLF</option>
    <option value="GOLF VARIANT">GOLF VARIANT</option>
    <option value="ID 3">ID 3</option>
    <option value="PASSAT VARIANT">PASSAT VARIANT</option>
    <option value="POLO">POLO</option>
    <option value="SHARAN">SHARAN</option>
    <option value="T-CROSS">T-CROSS</option>
    <option value="T-ROC">T-ROC</option>
    <option value="TIGUAN">TIGUAN</option>
    <option value="TOURAN">TOURAN</option>
    <option value="UP">UP</option>
    `;
  }
  else if (marca.value == "Volvo") {
    modelo.innerHTML = `
    <option value="S90">S90</option>
    <option value="V40">V40</option>
    <option value="V40 CROSS COUNTRY">V40 CROSS COUNTRY</option>
    <option value="V60">V60</option>
    <option value="V90">V90</option>
    <option value="XC40">XC40</option>
    <option value="XC60">XC60</option>
    <option value="XC90">XC90</option>
    `;
  }
});

  var valormau, valorbom, valormbom;

function calcular() {
  var precoaq = parseInt(document.getElementById("precoaq").value);
  var Quilometragem = document.getElementById("Quilometragem").value;
  var anomatricula = document.getElementById("Anomatricula").value;
  var c2, precofinal, anomatriculaaux, estadomau, estadobom, estadomuitobom;

  if(document.getElementById("precoaq").value== 0 || precoaq<= 0){
    alert("Insira o preço de aquisição");
    return 0;
  }
  if(document.getElementById("Maarca").value == ""){
    alert("Insira a marca do carro");
    return 0;
  }
  if(document.getElementById("Moodelo").value == ""){
    alert("Insira o modelo do carro");
    return 0;
  }
  anomatriculaaux= 2023 - anomatricula;
  if(Quilometragem <= 30000){
      c2=1;
  }
  else if(Quilometragem > 30000 && Quilometragem <= 70000){
      c2=0.95;
  }
  else{
      c2=0.90;
  }
  if(anomatriculaaux>10){
      precofinal = precoaq * (1 - (0.05*10 + 0.04 (anomatriculaaux-10))) * 0.9;    
  }
  else{
      precofinal= precoaq * (1 - (0.04 * anomatriculaaux)) * 0.9;  
  }
  if(precofinal <=500){
      alert("Preço de venda minimo é 500€");
      return 0;
  }

  estadomau= precofinal * 0.6;
  estadobom= precofinal;
  estadomuitobom = precofinal * 1.1;
  valormau= estadomau;
  valorbom= estadobom;
  valormbom= estadomuitobom;
  document.getElementById("totalmau").innerHTML = Math.round(estadomau);
  document.getElementById("totalbom").innerHTML =  Math.round(estadobom);
  document.getElementById("totalmbom").innerHTML = Math.round(estadomuitobom);
  document.getElementById("marcamau").innerHTML = document.getElementById("Maarca").value;
  document.getElementById("modelomau").innerHTML = document.getElementById("Moodelo").value;
  document.getElementById("Quilometragemmau").innerHTML = Quilometragem;
  document.getElementById("Anomatriculamau").innerHTML = anomatricula;
  document.getElementById("marcabom").innerHTML = document.getElementById("Maarca").value;
  document.getElementById("modelobom").innerHTML = document.getElementById("Moodelo").value;
  document.getElementById("Quilometragembom").innerHTML = Quilometragem;
  document.getElementById("Anomatriculabom").innerHTML = anomatricula;
  document.getElementById("marcambom").innerHTML = document.getElementById("Maarca").value;
  document.getElementById("modelombom").innerHTML = document.getElementById("Moodelo").value;
  document.getElementById("Quilometragemmbom").innerHTML = Quilometragem;
  document.getElementById("Anomatriculambom").innerHTML = anomatricula;
}

const estadomau2 = document.getElementById('escondermau2');
const estadobom2 = document.getElementById('esconderbom2');
const estadombom2 = document.getElementById('escondermbom2');
var mselecionado=0, bselecionado=0, mbselecionado=0, valormau, valorbom, valormbom, precofinal2;

function mauselecionado(){

  precofinal2= valormau;
  mselecionado=1;
  bselecionado=0;
  mbselecionado=0;
  estadomau2.style.color= 'red';
  estadobom2.style.color= 'black';
  estadombom2.style.color= 'black';


}
function bomselecionado(){

  precofinal2=valorbom;
  mselecionado=0;
  bselecionado=1;
  mbselecionado=0;
  estadomau2.style.color= 'black';
  estadobom2.style.color= 'red';
  estadombom2.style.color= 'black';
}
function muitobomselecionado(){

  precofinal2=valormbom;
  mselecionado=0;
  bselecionado=0;
  mbselecionado=1;
  estadomau2.style.color= 'black';
  estadobom2.style.color= 'black';
  estadombom2.style.color= 'red';
}

const finan = document.getElementById('tipos de finan');
function calcularfinan(){

  if(document.getElementById("montantetotal").value<= 0){
    alert("Insira uma montante correta");
    return 0;
  }
  if(document.getElementById("anos").value == "" || document.getElementById("anos").value < 1){
    alert("Insira os anos corretamente");
    return 0;
  }
  if(parseInt(document.getElementById('montantetotal').value) <= parseInt(document.getElementById('montanteini').value)){
    alert("A montante final não pode ser menor ou igual que a montante inicial");
    return 0;
  }

  if (finan.style.display === 'none') {
    finan.style.display = 'block';
} else {
    finan.style.display = 'none';
}
  var montantetotal1= parseInt(document.getElementById('montantetotal').value);
  var montantetotal2= parseInt(document.getElementById('montantetotal').value);
  var montantetotal3= parseInt(document.getElementById('montantetotal').value);
  var meses1 = parseInt(document.getElementById('anos').value) * 12;
  var meses2 = parseInt(document.getElementById('anos').value) * 12;
  var meses3 = parseInt(document.getElementById('anos').value) * 12;
  var montanteini1 = parseInt(document.getElementById('montanteini').value);
  var montanteini2 = parseInt(document.getElementById('montanteini').value);
  varmontanteini3 = parseInt(document.getElementById('montanteini').value);
  var p1,p2,p3,vf1,vf2,vf3, spread1, spread2, spread3, taxajuro=0.05, taxajurototal1, taxajurototal2, taxajurototal3;
  

  
  spread1= Math.random() * 0.05; 
  spread2= Math.random() * 0.05;
  spread3= Math.random() * 0.05;
  while(spread1 <0.01 || spread2 < 0.01 || spread3 < 0.01){
    spread1= Math.random() * 0.05; 
    spread2= Math.random() * 0.05;
    spread3= Math.random() * 0.05;
  }
  taxajurototal1= taxajuro + spread1;
  taxajurototal2= taxajuro + spread2;
  taxajurototal3= taxajuro + spread3;
  vf1= montantetotal1 - montanteini1;
  vf2= montantetotal2 - montanteini2;
  vf3= montantetotal3 - montanteini3;
  p1= vf1 * (((1 + taxajurototal1)^meses1) * taxajurototal1)/(((1 + taxajurototal1)^meses1) -1);
  p2= vf2 * (((1 + taxajurototal2)^meses2) * taxajurototal2)/(((1 + taxajurototal2)^meses2) -1);
  p3= vf3 * (((1 + taxajurototal3)^meses3) * taxajurototal3)/(((1 + taxajurototal3)^meses3) -1);

  
  document.getElementById("montantetotal1").innerHTML= montantetotal1;
  document.getElementById("vf1").innerHTML = vf1;
  document.getElementById("duração1").innerHTML = meses1;
  document.getElementById("Taxa de juro1").innerHTML = Math.round((taxajurototal1 * 100)*100)/100;
  document.getElementById("spread1").innerHTML = Math.round((spread1 * 100)*100)/100;
  document.getElementById("entradainicial1").innerHTML = montanteini1;
  document.getElementById("mensalidade1").innerHTML =Math.round(p1);

  document.getElementById("montantetotal2").innerHTML= montantetotal2;
  document.getElementById("vf2").innerHTML = vf2;
  document.getElementById("duração2").innerHTML = meses2;
  document.getElementById("Taxa de juro2").innerHTML = Math.round((taxajurototal2 * 100)*100)/100;
  document.getElementById("spread2").innerHTML = Math.round((spread2 * 100)*100)/100;
  document.getElementById("entradainicial2").innerHTML = montanteini2;
  document.getElementById("mensalidade2").innerHTML =Math.round(p2);


  document.getElementById("montantetotal3").innerHTML= montantetotal3;
  document.getElementById("vf3").innerHTML = vf3;
  document.getElementById("duração3").innerHTML = meses3;
  document.getElementById("Taxa de juro3").innerHTML = Math.round((taxajurototal3 * 100)*100)/100;
  document.getElementById("spread3").innerHTML = Math.round((spread3 * 100)*100)/100;
  document.getElementById("entradainicial3").innerHTML = montanteini3;
  document.getElementById("mensalidade3").innerHTML =Math.round(p3);

}