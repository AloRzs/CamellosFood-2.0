export class Producto{

    id:string;
    nombre:string;
    descripcion:string;
    precio:number;
    estado:boolean;


    constructor(obj:any){
        this.id=obj && obj.id || null
        this.nombre= obj && obj.nombre || null;
        this.descripcion=obj && obj.descripcion || null;
        this.precio= obj && obj.precio || null;
        this.estado= obj && obj.estado || null;
        
    }
//     "id": "CR04",
//         "nombre": "Empanadas Queso-Camarón",
//         "descripcion": "Empanadas de Queso-Camarón (vienen 3 unidades por 1 cantidad)",
//         "precio": 4500
}
