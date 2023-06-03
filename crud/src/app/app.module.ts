import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; // Additional import

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatIconModule} from '@angular/material/icon'; //From Angular Materials
import {MatButtonModule} from '@angular/material/button'; //From Angular Materials 

import { HomeComponent } from './home/home.component'; //import by command "ng g c home"
import { AboutComponent } from './about/about.component'; //import by command "ng g c about"
import { ProjectsComponent } from './projects/projects.component'; //import by command "ng g c projects"
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';

import appRoutes from './routerConfig';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProjectsComponent,
    ServicesComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
