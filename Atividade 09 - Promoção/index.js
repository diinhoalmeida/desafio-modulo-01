function solucao(precos) {
    //seu código aqui
      let total = 0;
      var min = Math.min(...precos);
      if (precos.length >= 3) {
          total = precos.reduce((total, numero) => total + numero);
          console.log(total - (min/2));
      } else {
          total = precos.reduce((total, numero) => total + numero);  
          console.log(total);
      }
  }
  
  
  function processData(input) {
    const lista = input.split(" ");
    lista.forEach((x, i, a) => a[i] = parseInt(x, 10));
    solucao(lista);
  } 