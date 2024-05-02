import { EmployeeModule } from './employee/employee.module';
import { AllEmployeesComponent } from './components/employee/all-employees/all-employees.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AboutComponent } from './components/about/about.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginAndLogUpComponent } from './components/login-and-log-up/login-and-log-up.component';
import { LogoutComponent } from './components/logout/logout.component';
import { AuthGuard } from './auth.guard';
export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'about', component: AboutComponent },
    { path: 'login', component: LoginAndLogUpComponent },
    { path: 'logup', component: LoginAndLogUpComponent },
    { path: 'logout', component: LogoutComponent },
    {
        path: 'employees',
        loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule),
        canActivate: [AuthGuard]
    },
    { path: '**', component: NotFoundComponent }
];