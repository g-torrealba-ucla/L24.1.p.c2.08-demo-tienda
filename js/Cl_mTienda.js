export default class Cl_mTienda {
    constructor() {
       this.acumPrecios =
          this.acumCostos =
          this.cntEscolares =
          this.cntTotal =
             0;
    }
  
    procesarRopa(r) {
       this.cntTotal++;
       this.acumPrecios += r.precio();
       this.acumCostos += r.costo;
       if (r.tipo === 3) this.cntEscolares++;
    }
  
    totalGanancia() {
       return (this.acumPrecios - this.acumCostos).toFixed(2);
    }
  
    porcentajeVentasEscolares() {
       if (this.cntEscolares === 0) return 0;
       else return (this.cntEscolares / this.cntTotal) * 100;
    }
  }
  