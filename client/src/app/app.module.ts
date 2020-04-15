import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PropertyListComponent } from './properties/property-list/property-list.component';
import { MatCardModule } from '@angular/material/card';
import { PropertyFormComponent } from './property-form/property-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { PropertyDetailComponent } from './property-detail/property-detail.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PropertyService } from './services/property.service';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    AppComponent,
    PropertyListComponent,
    PropertyFormComponent,
    PropertyDetailComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
    HttpClientModule,
    MatButtonModule,
  ],

  providers: [PropertyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
