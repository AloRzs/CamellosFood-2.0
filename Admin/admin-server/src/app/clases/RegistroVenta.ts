export class RegistroVenta{

    id:string;
    nombreUsuario:string;
    fechaEmision:Date;
    montoPagado:number;
    estado:string;


    constructor(obj:any){
        this.id=obj && obj.id || null
        this.nombreUsuario= obj && obj.nombreUsuario || null;
        this.fechaEmision=obj && obj.fechaEmision || null;
        this.montoPagado= obj && obj.montoPagado || null;
        this.estado= obj && obj.estado || null;
    }
    // id:'001',
    // nombreUsuario:'Juan Causa',
    // fechaEmision:'11/09/23',
    // montoPagado:13000,
    // estado:'Entregado'
}