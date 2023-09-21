import { Producto } from "./Producto";

export class Categoria{

    id:string;
    nombre:string;
    //podría ir una foto para ser más explicativo con el usuario

    constructor(obj:any){
        this.id=obj && obj.id || null
        this.nombre= obj && obj.nombre || null;
    }

}