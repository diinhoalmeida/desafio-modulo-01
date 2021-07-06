function solucao(lista) {
    //seu codigo aqui
  if (lista.length <= 1000) {
      const total = (lista.reduce((total, elemento) => total + elemento) / lista.length);
      console.log(total);
  }        

}

function processData(input) {
    const strings = input.split(" ");
  const numeros = [];
  for(let i = 0; i < strings.length; i++) {
        numeros.push(parseInt(strings[i] ,10));
    }
  solucao(numeros);
} 