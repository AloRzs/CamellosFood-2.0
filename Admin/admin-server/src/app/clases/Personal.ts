
import { Cargo } from "./Cargo";

export class Personal{

    rut:string;
    nombres:string;
    apellidos:string;
    sucursal:string;
    cargo:Cargo;

    constructor(obj:any){
        this.rut=obj && obj.rut || null
        this.nombres= obj && obj.nombre || null;
        this.apellidos=obj && obj.apellidos || null;
        this.sucursal= obj && obj.sucursal || null;
        this.cargo= obj && obj.cargo || null;
    }
//     "id": "CR04",
//         "nombre": "Empanadas Queso-Camarón",
//         "descripcion": "Empanadas de Queso-Camarón (vienen 3 unidades por 1 cantidad)",
//         "precio": 4500
//          "estado":true
//          "categoria":{"id":"C01","descripcion":"Platos deliciosos"}
}