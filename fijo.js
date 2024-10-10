import profesores from "./profesores.js";

export default class fijo extends profesores {
  constructor(nombre, bono, sueldo) {
    super(nombre, bono);
    this.sueldo = sueldo;
  }

  set sueldo(s) {
    this._sueldo = +s;
  }

  get sueldo() {
    return this._sueldo;
  }

  pago() {
    return this.sueldo + this.bono;
  }
}
