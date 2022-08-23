function iniciar() {
  var resultado = 0;
  var stop=false;
  while(resultado<5){
    resultado++;
    document.querySelector(".resultado").innerHTML = resultado;
  }
}