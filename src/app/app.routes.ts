import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
 
import { ConsultaHeroiComponent } from '../app/heroi/consulta/consulta-heroi.component';
 
import {CadastroHeroiComponent} from '../app/heroi/cadastro/cadastro-heroi.component';
 
import { HomeComponent } from '../app/home/home.component';
 
const appRoutes: Routes = [
    { path: 'home',                    component: HomeComponent },
    { path: '',                        component: HomeComponent },
    { path: 'consulta-heroi',         component: ConsultaHeroiComponent },
    { path: 'cadastro-heroi',         component: CadastroHeroiComponent },
    { path: 'cadastro-heroi/:id', component: CadastroHeroiComponent }
 
];
 
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);