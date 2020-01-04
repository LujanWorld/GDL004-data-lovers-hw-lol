/* Manejo de data */

// esta es una función de ejemplo



export const magic = (a) => a.filter( (personaje) => personaje.info.difficulty > 7);
    
export const sort = (l) => l.filter( (personaje) => personaje.info.attack > 7);


export const order = (c) => c.sort((a, b) => b.name.localeCompare(a.name));


