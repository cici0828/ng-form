import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import { HeroFormComponent } from './hero-form.component';
import { LittleTourComponent } from './little-tour.component.ts';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    HeroFormComponent,
    LittleTourComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

