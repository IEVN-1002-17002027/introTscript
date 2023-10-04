
function suma():void{
    console.log(`la suma es #(3+5)`);
}

suma();

function suma2(a:number,b:number):number{
    return a+b;
}

const resultado=suma2(5,3)
console.log(`la suma es $(resultado)`);

function multiplicar(n1:number,otronumber:number,base:number=7):number{
    let tem=n1*base;
    return tem;
}
console.log(multiplicar(3,5,2));

interface Mascotas{
    nombre:string;
    edad:number;
    mostrarEdad:()=>void;
}

function calcular(mascota:Mascotas, x:number):void{
    mascota.edad+=x;
    console.log(mascota);
}
const nuevaMascota:Mascotas={
    nombre:'Miau',
    edad:2,
    mostrarEdad(){
        console.log('La edad es: ',this.edad);
    }
}
calcular(nuevaMascota,3);