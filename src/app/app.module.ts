import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddModulComponent } from './components/add-modul/add-modul.component';
import { EditModulComponent } from './components/edit-modul/edit-modul.component';
import { ModulItemComponent } from './components/modul-item/modul-item.component';
import { ModulListComponent } from './components/modul-list/modul-list.component';
import { SearchModulComponent } from './components/search-modul/search-modul.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LayoutComponent } from './components/layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    AddModulComponent,
    EditModulComponent,
    ModulItemComponent,
    ModulListComponent,
    SearchModulComponent,
    NavbarComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
