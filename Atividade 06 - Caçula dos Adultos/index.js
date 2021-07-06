function solucao(lista) {
    // seu código aqui
      const menor = lista.filter(idade => idade >= 18).find(idade => Math.min.apply(Math, lista));
      console.log(menor);
  }
  
  
  
  function processData(input) {
      //Enter your code here
        const strings = input.split(" ");
      const numeros = [];
      for(let i = 0; i < strings.length; i++) {
            numeros.push(parseInt(strings[i] ,10));
        }
      solucao(numeros);
  } 