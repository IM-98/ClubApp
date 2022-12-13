import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';

const routes: Routes = [
  {path: "./hero.component.html",
  component: HeroComponent},
  {path: "./hero.component.html",
  component: HeroComponent},
  {path: "./hero.component.html",
  component: HeroComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
