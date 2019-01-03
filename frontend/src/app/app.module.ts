import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { MaterialsModule } from './materials';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CareersComponent } from './components/careers/careers.component';
import { ServicesComponent } from './components/services/services.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { PartnersComponent } from './components/partners/partners.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ServicesComponent,
        AboutUsComponent,
        PartnersComponent,
        CareersComponent,
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
