import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CeQueVousProposeeComponent } from './ce-que-vous-proposee/ce-que-vous-proposee.component';
import { AccueilComponent } from './accueil/accueil.component';
import { Proposer1Component } from './proposer1/proposer1.component';
import { Proposer1ItemComponent } from './proposer1-item/proposer1-item.component';

@NgModule({
  declarations: [
    Proposer1ItemComponent,
    Proposer1Component,
    AccueilComponent,
    CeQueVousProposeeComponent,
    AppComponent,
    HeaderComponent,
    Proposer1Component,
    Proposer1ItemComponent
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
