import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AwesomeListComponent } from './awesome-list/awesome-list.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AddAwesomeComponent } from './add-awesome/add-awesome.component';
import { EditAwesomeComponent } from './edit-awesome/edit-awesome.component';


const routes: Routes = [
  {
    path: '', component: AwesomeListComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    AwesomeListComponent,
    AddAwesomeComponent,
    EditAwesomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
