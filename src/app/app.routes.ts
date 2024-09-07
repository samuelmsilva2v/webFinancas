import { Routes } from '@angular/router';
import { CadastroContasComponent } from './components/cadastro-contas/cadastro-contas.component';
import { ConsultaContasComponent } from './components/consulta-contas/consulta-contas.component';
import { EdicaoContasComponent } from './components/edicao-contas/edicao-contas.component';

export const routes: Routes = [
    {
        path: 'app/cadastro-contas',
        component: CadastroContasComponent
    },
    {
        path: 'app/consulta-contas/',
        component: ConsultaContasComponent
    },
    {
        path: 'app/edicao-contas/:id',
        component: EdicaoContasComponent
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/app/consulta-contas'
    }
];
