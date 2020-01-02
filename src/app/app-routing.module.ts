import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookformComponent  } from "./bookform/bookform.component";

const routes: Routes = [
  { path :'', pathMatch: 'full', redirectTo: 'bookform'},
  { path :'bookform', component: BookformComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
