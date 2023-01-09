import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeroComponent } from './components/hero/hero.component';
import { LoginComponent } from './_pages/login/login.component';
import { RegisterComponent } from './_pages/register/register.component';
import { ContactComponent } from './_pages/contact/contact.component';
import { DisciplinesComponent } from './_pages/disciplines/disciplines.component';
import { PlanningComponent } from './_pages/planning/planning.component';
import { HomeComponent } from './_pages/home/home.component';

const routes: Routes = [

  {
    path: "",
    component: HomeComponent
  },
  {
    path:"login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "contact",
    component: ContactComponent
  },
  {
    path: "planning",
    component: PlanningComponent
  },
  {
    path: "disciplines",
    component: DisciplinesComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
