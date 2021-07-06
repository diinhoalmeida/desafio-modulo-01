function solucao(min, km) {
    //seu codigo aqui
    let extraMin = 0;
    let extraKm = 0;
    if (km > 10) {
        extraKm = km - 10;
        if (min > 20) {
            extraMin = min - 20;
            console.log(Math.round((10*70 + 20*50 + extraMin*30 + extraKm*50)));
        } else {
            console.log(Math.round((10*70 + min*50 + extraKm*50)));
        }
    } else if (min > 20) {
        extraMin = min - 20;
        if (km > 10) {
            extraKm = km - 10;    
            console.log(Math.round((10*70 + 20*50 + extraMin*30 + extraKm*50)));    
        } else {
            console.log(Math.round((70*km + 50*20 + extraMin*30)));
        }
    } else {
        console.log(Math.round(70*km + 50*min));
    }
}

function processData(input) {
    const x = input.split(" ");
    const min = parseFloat(x[0], 10);
    const km = parseFloat(x[1], 10);
    solucao(min, km);
}