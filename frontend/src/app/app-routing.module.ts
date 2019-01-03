import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CareersComponent } from './components/careers/careers.component';
import { ContactComponent } from './components/contact/contact.component';
import { ServicesComponent } from './components/services/services.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { PartnersComponent } from './components/partners/partners.component';

const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: 'services', component: ServicesComponent},
    {path: 'about-us', component: AboutUsComponent},
    {path: 'partners', component: PartnersComponent},
    {path: 'careers', component: CareersComponent},
    {path: 'contact-us', component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
