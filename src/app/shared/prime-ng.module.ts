import { NgModule } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { SharedModule } from 'primeng/api';
import { ButtonModule } from 'primeng/button';

@NgModule({
  exports: [ButtonModule, MenubarModule, SharedModule],
})
export class PrimeNgModule {}
