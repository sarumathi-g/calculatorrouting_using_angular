import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AdditionComponent } from './addition/addition.component';
import { SubtractionComponent } from './subtraction/subtraction.component';
import { MultiplicationComponent } from './multiplication/multiplication.component';
import { DivisionComponent } from './division/division.component';

const routes: Routes = [
  {path:'',component:HomepageComponent},
  {path:'addition',component:AdditionComponent},
  {path:'subtraction',component:SubtractionComponent},
  {path:'multiplication',component:MultiplicationComponent},
  {path:'division',component:DivisionComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[HomepageComponent,AdditionComponent,SubtractionComponent,MultiplicationComponent,DivisionComponent]
