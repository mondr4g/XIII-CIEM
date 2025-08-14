import { Routes } from '@angular/router';
import { Inicio } from './components/inicio/inicio';
import { Program } from './components/program/program';
import { Sponsors } from './components/sponsors/sponsors';
import { Contact } from './components/contact/contact';

export const routes: Routes = [
    { path: '', component: Inicio },
    { path: 'programa', component: Program },
    { path: 'patrocinios', component: Sponsors },
    { path: 'contacto', component: Contact },
];
