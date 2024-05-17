import { style } from '@angular/animations';
import { Component } from '@angular/core';
import {  FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css',  '../../styles.css']
})
export class LoginComponent {
  form!: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", Validators.required)
    });
  }

  validaLogin() {
    if (this.form.valid) {
      alert('Login válido');
    } else {
      alert('Login inválido');
    }
  }

  esqueciMinhaSenha() {
    alert('Levar para a jornada de esqueci minha senha');
    location.href = "/esqueci-minha-senha";
  }
}