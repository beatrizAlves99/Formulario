import { Component, OnInit } from '@angular/core';
import { ValidarService } from '../validar.service';


@Component({
  selector: 'app-email-forms',
  templateUrl: './email-forms.component.html',
  styleUrls: ['./email-forms.component.css'],
  providers: [ValidarService]
})
export class EmailFormsComponent implements OnInit {

  email: string;
  senha: string;

  constructor(private eml: ValidarService) {

  }

  ngOnInit() {
  }

  fazerValid() {
    return this.eml.validacao(this.email, this.senha);
  }
  onSubmit(form) {
    this.email = form.value.email;
    this.senha = form.value.senha;
    console.log(form);
  }

}
