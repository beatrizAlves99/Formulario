import { Injectable } from '@angular/core';

@Injectable()
export class ValidarService {
  correctemail: string;
  correctsenha: string;
  valida: boolean;
  constructor() {
    this.valida = false;
    this.correctemail = 'beatriz-alves1999@hotmail.com';
    this.correctsenha = '12345678';
  }


  validacao(email: string, senha: string) {
    if (email === this.correctemail && senha === this.correctsenha) {
      return this.valida = true;
    } else {
      return this.valida = false;
    }
  }


}
