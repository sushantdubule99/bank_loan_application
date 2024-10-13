import { Routes } from '@angular/router';
import { LoanapplicationComponent } from './Pages/loanapplication/loanapplication.component';
import { ApplicationListComponent } from './Pages/application-list/application-list.component';
import { LoginComponent } from './Pages/login/login/login.component';

export const routes: Routes = [
    { path:'',
        redirectTo:'login',
        pathMatch:'full'

    },

    {
        path:'newApplication',
        component: LoanapplicationComponent
    },
    {
        path:'applicationList',
        component:ApplicationListComponent
    },
    {
        path:'login',
        component:LoginComponent

    }

];
