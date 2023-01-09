import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroComponent } from './components/hero/hero.component';
import {LoginComponent} from "./_pages/login/login.component"
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './_pages/home/home.component';
import { RegisterComponent } from './_pages/register/register.component';
import { ContactComponent } from './_pages/contact/contact.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { PlanningComponent } from './_pages/planning/planning.component';
import { DisciplinesComponent } from './_pages/disciplines/disciplines.component'
import { UserLoginService } from './services/user-login.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HeroComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    ContactComponent,
    PlanningComponent,
    DisciplinesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    GoogleMapsModule,
    FormsModule
    
  ],
  providers: [
    UserLoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
