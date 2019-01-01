import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SolutionsComponent } from './components/solutions/solutions.component';
import { CompanyComponent } from './components/company/company.component';
import { ClientsComponent } from './components/clients/clients.component';
import { LoginComponent } from './components/login/login.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { CareersComponent } from './components/careers/careers.component';

const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: 'solutions', component: SolutionsComponent},
    {path: 'company', component: CompanyComponent},
    {path: 'clients', component: ClientsComponent},
    {path: 'careers', component: CareersComponent},
    {path: 'login', component: LoginComponent},
    {path: 'contact-us', component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
