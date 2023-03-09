import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CeQueVousProposeeComponent } from './ce-que-vous-proposee/ce-que-vous-proposee.component';
import { AccueilComponent } from './accueil/accueil.component';

@NgModule({
  declarations: [
    AccueilComponent,
    CeQueVousProposeeComponent,
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule
  ],
  schemas: [NO_ERRORS_SCHEMA], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
