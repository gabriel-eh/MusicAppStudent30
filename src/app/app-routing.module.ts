import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SoungslistComponent } from './soungslist/soungslist.component';

const routes: Routes = [{
  path: "SoungsList",
  component: SoungslistComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
