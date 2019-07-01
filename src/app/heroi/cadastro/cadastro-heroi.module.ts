import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroHeroiComponent } from './cadastro-heroi.component';
import { FormsModule } from '@angular/forms';
import { Heroi } from 'src/app/services/heroi.model';

@NgModule({
  declarations: [CadastroHeroiComponent],
  imports: [
    CommonModule,
    FormsModule,
    Heroi
  ]
})
export class CadastroHeroiModule { }
