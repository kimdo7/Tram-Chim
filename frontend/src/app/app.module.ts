import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SolutionsComponent } from './components/solutions/solutions.component';
import { CompanyComponent } from './components/company/company.component';
import { ClientsComponent } from './components/clients/clients.component';
import { LoginComponent } from './components/login/login.component';
import { ContactComponent } from './components/contact/contact.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { MaterialsModule } from './materials';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CareersComponent } from './components/careers/careers.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        SolutionsComponent,
        CompanyComponent,
        ClientsComponent,
        CareersComponent,
        LoginComponent,
        ContactComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MaterialsModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
