import Cl_mRopa from "./Cl_mRopa.js";
export default class Cl_mEscolar extends Cl_mRopa {
  constructor(nombre = "", costo, tipo, talla) {
    super(nombre, costo, tipo);
    this.talla = talla;
  }

  descuento() {
    if (this.talla === "S") {
      return (this.costo + this.ganancia()) * 0.05;
    } else if (this.talla === "M") {
      return (this.costo + this.ganancia()) * 0.07;
    } else {
      return (this.costo + this.ganancia()) * 0.1;
    }
  }
}
