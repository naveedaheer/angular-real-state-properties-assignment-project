import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PropertyDetailComponent } from './property-detail/property-detail.component';
import { PropertyListComponent } from './properties/property-list/property-list.component';


const routes: Routes = [
  { path: '', component: PropertyListComponent },
  { path: 'property-detail/:id', component: PropertyDetailComponent },
  { path: '**', component: PropertyListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
