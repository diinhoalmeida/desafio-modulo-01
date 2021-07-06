function solucao(numero, limiteInferior, limiteSuperior) {
    if (numero >= limiteInferior && numero <= limiteSuperior) {
        console.log('PERTENCE');
    } else {
        console.log('NÃO PERTENCE');
    }
}

function processData(input) {
    const lista = input.split(" ");
  	solucao(parseInt(lista[0], 10), parseInt(lista[1], 10), parseInt(lista[2], 10));
} 