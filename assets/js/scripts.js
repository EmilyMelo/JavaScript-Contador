var contador = 0;
var limitador = {
  valorMinimo: -10,
  valorMaximo: 10
};

function somar() {
  limitador.valorMaximo
  if (contador < limitador.valorMaximo) {
    contador++; //contador soma 1
    atualizarResultado();
  }

}

function subtrair() {
  if (contador > limitador.valorMinimo) {
    contador--; //contador soma -1
    atualizarResultado();
  }

}
function atualizarResultado() {
  document.getElementById("resultado").innerText = contador;
}
