import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CeQueVousProposeeComponent } from './ce-que-vous-proposee/ce-que-vous-proposee.component';
import { AccueilComponent } from './accueil/accueil.component';
import { Proposer1Component } from './proposer1/proposer1.component';
import { Proposer1ItemComponent } from './proposer1-item/proposer1-item.component';
import { EmailComponent } from './email/email.component';
import { RealisationComponent } from './realisation/realisation.component';
import { PkChoisirComponent } from './pk-choisir/pk-choisir.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    Proposer1ItemComponent,
    Proposer1Component,
    AccueilComponent,
    CeQueVousProposeeComponent,
    AppComponent,
    HeaderComponent,
    Proposer1Component,
    Proposer1ItemComponent,
    EmailComponent,
    RealisationComponent,
    PkChoisirComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  schemas: [NO_ERRORS_SCHEMA], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
