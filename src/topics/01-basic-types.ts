

const name: string= 'AFOXJONES';
const isAlive: boolean = true;
let hpPoints: number | string = 95;

hpPoints='FULL';
hpPoints=23;

let hpPoints2: number | 'FULL' = 95;

hpPoints2='FULL';

console.log({
name,isAlive,hpPoints,hpPoints2
})


export{};//Esto es por Vite, es para que funcione y no de error