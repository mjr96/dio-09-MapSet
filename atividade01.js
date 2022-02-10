const mapa = new Map();

mapa.set(`Luiz`, `Admin`);
mapa.set(`Marcio`, `Admin`);
mapa.set(`Fred`, `Usuario`);
mapa.set(`Guilherme`, `Usuario`);




function getAdmins(map){
    var mapaNovo = [];

    for ([key, value] of map) {
        if (value === `Admin`) {
            mapaNovo.push(key);
        }
    }
    return mapaNovo;
}

console.log(getAdmins(mapa));