import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SolutionsComponent } from './solutions/solutions.component';
import { CompanyComponent } from './company/company.component';
import { ClientsComponent } from './clients/clients.component';
import { CareersComponent } from './careers/careers.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

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
