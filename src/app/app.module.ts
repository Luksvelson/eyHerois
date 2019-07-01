import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfigService } from './services/config.services';
import { HeroiService } from './services/heroi.service';
import { HttpModule } from '@angular/http';
import { ConsultaHeroiComponent } from './heroi/consulta/consulta-heroi.component'
import { CadastroHeroiComponent } from './heroi/cadastro/cadastro-heroi.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    ConsultaHeroiComponent,
    CadastroHeroiComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [ConfigService, HeroiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
