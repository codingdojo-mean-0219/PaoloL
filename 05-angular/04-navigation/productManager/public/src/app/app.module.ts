import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AllComponent } from './all/all.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';

import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AllComponent,
    AddComponent,
    EditComponent,
    AllComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
