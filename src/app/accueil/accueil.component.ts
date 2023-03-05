import { Component } from '@angular/core';
import { SEOService } from '../services/seo.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent  {

  constructor(private readonly seo : SEOService){}

  ngOnInit(): void {
    this.seo.updateMetaIndexPage(true);
  }

}
