import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {DataService} from './services/data.service';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import {
  MatSidenavModule, 
  MatListModule,
  MatCardModule,
  MatButtonModule,
  MatInputModule,
  MatSelectModule,
  MatIconModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserFormComponent
  ],
  imports: [
    ReactiveFormsModule ,
    BrowserModule,
    MatSidenavModule,
    MatListModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule
  ],
  providers: [
    DataService,
  FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
