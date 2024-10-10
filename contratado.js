import profesores from "./profesores.js";

export default class contratado extends profesores {
  constructor(nombre, bono, horas) {
    super(nombre, bono);
    this.horas = horas;
  }

  set horas(h) {
    this._horas = +h;
  }

  get horas() {
    return this._horas;
  }

  pago() {
    return this.horas * 10 + this.bono;
  }
}
