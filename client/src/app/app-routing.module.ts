import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PropertyDetailComponent } from './property-detail/property-detail.component';
import { PropertyListComponent } from './properties/property-list/property-list.component';
import { PropertyFormComponent } from './property-form/property-form.component';


const routes: Routes = [
  { path: '', component: PropertyListComponent },
  { path: 'property-detail/:id', component: PropertyDetailComponent },
  { path: 'add-property', component: PropertyFormComponent },
  { path: '**', component: PropertyListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
