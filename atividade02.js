var array = [30,30,40,5,223,2049,3034,5];


function valorUnico(arr){
    var arrayNovo = new Set(arr);

    return arrayNovo;
}

console.log(valorUnico(array));