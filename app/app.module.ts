import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import { HeroDetailComponent } from './detail/hero-detail.component';
import { TopperComponent }  from './topper/topper.component';
import { routing } from './app.routing';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  declarations: [
    AppComponent,
    HeroDetailComponent,
    TopperComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
