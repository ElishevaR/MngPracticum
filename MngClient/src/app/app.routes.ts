import { EmployeeModule } from './employee/employee.module';
import { AllEmployeesComponent } from './components/employee/all-employees/all-employees.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './auth.guard';
import { RouterModule, Routes } from '@angular/router';
export const routes: Routes = [ 
    { path: '', redirectTo: 'employees', pathMatch: 'full' },
    { path: 'about', component: AboutComponent },
    { path: 'login', component: LoginComponent },
    { path: 'employees', loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule) },
    { path: '**', component: NotFoundComponent }];

    
