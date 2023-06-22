import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeilleursElevesComponent } from './meilleurs-eleves/meilleurs-eleves.component';
import { FraisComponent } from './frais/frais.component';
import { ExamensComponent } from './examens/examens.component';
const routes: Routes = [


  {
    path:"meilleurs_eleves",component:MeilleursElevesComponent
  },
  {
    path:"frais",component:FraisComponent
  },
  {
    path:"examen",component:ExamensComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
