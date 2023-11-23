import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { SpecificComponent } from './components/specific/specific.component';

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'specificComponent/:name', component: SpecificComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
