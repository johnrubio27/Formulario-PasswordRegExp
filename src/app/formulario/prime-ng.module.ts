import { NgModule } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
@NgModule({
  exports: [ButtonModule, CardModule, InputTextModule, ToastModule],
})
export class PrimeNgModule {}
