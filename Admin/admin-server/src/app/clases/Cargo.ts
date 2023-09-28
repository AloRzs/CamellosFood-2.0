export class Cargo{

    id:number;
    nombre_cargo:string;
    //podría ir una foto para ser más explicativo con el usuario

    constructor(obj:any){
        this.id=obj && obj.id || null
        this.nombre_cargo= obj && obj.nombre_cargo || null;
    }

}