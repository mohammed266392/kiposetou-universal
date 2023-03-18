import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SEOService } from '../services/seo.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent  {

  modaleEstOuverte : boolean = false;

  constructor(private readonly seo : SEOService, private router : Router){}

  ngOnInit(): void {
    this.seo.updateMetaIndexPage(true);
  }

  receiveClickDemanderUnAvis(value : boolean){
    console.log("je change la valeur de modaleEstOuverte en ",value);
    
    this.modaleEstOuverte = value;
    this.router.navigateByUrl("/Contact");

  }

}
