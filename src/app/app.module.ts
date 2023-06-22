import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeilleursElevesComponent } from './meilleurs-eleves/meilleurs-eleves.component';
import { FraisComponent } from './frais/frais.component';
import { ExamensComponent } from './examens/examens.component';

@NgModule({
  declarations: [
    AppComponent,
    MeilleursElevesComponent,
    FraisComponent,
    ExamensComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
