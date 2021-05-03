import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarComponent } from './components/menubar/menubar.component';
import { PrimeNgModule } from './prime-ng.module';

@NgModule({
  declarations: [MenubarComponent],
  exports: [MenubarComponent],
  imports: [CommonModule, PrimeNgModule],
})
export class SharedModule {}
