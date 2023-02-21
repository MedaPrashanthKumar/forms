import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveComponent } from './reactive/reactive.component';
import { SigninComponent } from './signin/signin.component';


const routes: Routes = [
  {path:'signin',component:SigninComponent},
  {path:'reactive',component:ReactiveComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
