import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeroComponent } from './components/hero/hero.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ContactComponent } from './contact/contact.component';
import { DisciplinesComponent } from './disciplines/disciplines.component';
import { PlanningComponent } from './planning/planning.component';
import { HomeComponent } from './_pages/home/home.component';

const routes: Routes = [
  // {
  //   path: "",
  //   component: AppComponent,

  //   children: [
      
  //   ]
    
  // }
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
