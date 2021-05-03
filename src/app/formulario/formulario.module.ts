import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormularioRoutingModule } from './formulario-routing.module';
import { RegisterComponent } from './components/register/register.component';
import { PrimeNgModule } from './prime-ng.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    FormularioRoutingModule,
    PrimeNgModule,
    ReactiveFormsModule,
  ],
})
export class FormularioModule {}
