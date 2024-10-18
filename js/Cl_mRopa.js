export default class Cl_mRopa {
    constructor(nombre = "", costo, tipo) {
       this.nombre = nombre;
       this.costo = costo;
       this.tipo = tipo;
    }
  
    ganancia() {
       return this.costo * 0.2;
    }
  
    precio() {
       return this.costo + this.ganancia() - this.descuento();
    }
  
    descuento() {
       return 0;
    }
  }
  
  