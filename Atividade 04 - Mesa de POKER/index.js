function solucao(min, max, valores) {
    //seu código aqui
      const valoresFiltrados = [];
      if (valores.length >= 1 && valores.length <= 1000) {
          for (let i = 0; i < valores.length; i++) {
              if (valores[i] >= min && valores[i] <= max) {
                  valoresFiltrados.push(valores[i]);
              }
          }    
      }
      console.log(valoresFiltrados);
  }
  
  
  function processData(input) {
      //Enter your code here
      const lines = input.split("\n");
      const min = lines[0];
      const max = lines[1];
        const strings = lines[2].split(" ");
      const valores = [];
      for(let i = 0; i < strings.length; i++) {
            valores.push(parseInt(strings[i] ,10));
        }
      solucao(min, max, valores);
  } 