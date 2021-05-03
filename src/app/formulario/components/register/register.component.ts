import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [MessageService],
})
export class RegisterComponent implements OnInit {
  myform: FormGroup;
  passwordPattern: any =
    '^([A-Z])([0-9]){3}([a-z]){3}([*.!@#$%^&:;<>,.?/~_+=|-]){3}$';

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.myform = this.fb.group({
      nombre: [null, [Validators.required]],
      apellido: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      contrasena: [
        null,
        [Validators.required, Validators.pattern(this.passwordPattern)],
      ],
    });
  }

  save(): void {
    if (this.myform.invalid) {
      return;
    }
    this.messageService.add({
      key: 'br',
      severity: 'success',
      summary: 'Registro Exitoso!',
      detail: 'registro completado correctamente!',
    });
    setTimeout(() => {
      this.router.navigate(['/home']);
    }, 3000);
  }

  getErrorMessage(field: string): string {
    let message: string;
    if (this.myform.get(field)?.errors!.required) {
      message = `El campo ${field} es requerido.`;
    } else if (this.myform.get(field)?.hasError('pattern')) {
      message = `El patron del campo ${field} es incorrecto.Ejemplo: A111abc!*?`;
    } else if (this.myform.get(field).errors.email) {
      message = `EL campo ${field} esta mal formado.`;
    } else {
      message = '';
    }
    return message;
  }

  isValidField(field: string): boolean {
    return (
      (this.myform.get(field)?.touched! || this.myform.get(field)?.dirty!) &&
      !this.myform.get(field)?.valid
    );
  }
}
