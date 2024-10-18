import Cl_mRopa from "./Cl_mRopa.js";
export default class Cl_mIntimo extends Cl_mRopa {
    constructor(nombre = "", costo, sexo) {
       super(nombre, costo);
       this.sexo = sexo;
    }
  
    ganancia() {
       return this.costo * (this.sexo === "M" ? 0.3 : 0.4);
    }
  }
  
