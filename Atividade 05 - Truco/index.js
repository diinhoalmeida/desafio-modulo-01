function solucao(carta) {
    //seu código aqui
    const manilha_s = ['J', 'K', 'A', 2, 3, 'Q'];
    let manilha = '';
    if (carta === 'Q') {
        manilha = manilha_s[0];
    } else if (carta === 'J') {
        manilha = manilha_s[1];    
    } else if (carta === 'K') {
        manilha = manilha_s[2];    
    } else if (carta === 'A') {
        manilha = manilha_s[3];    
    } else if (carta == 2) {
        manilha = manilha_s[4];    
    } else if (carta == 3) {
        manilha = manilha_s[5];    
    }
    console.log(manilha);
}

function processData(input) {
    solucao(input);
} 