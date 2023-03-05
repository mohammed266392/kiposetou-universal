import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SEOService {

  constructor(private readonly meta : Meta, private readonly title : Title) { }

  initDefaultMetaInformation() {
    this.title.setTitle('Kiposetou-menuiserie - Spécialiste de la rénovation et du neuf');

    this.meta.addTags([
      {name: 'description', content: 'Découvrez une sélection de projets de rénovation conçus et réalisés par nos équipes : rénovations totales, fenêtres, baies coulissantes, portails/portillons'},
      {name: 'author', content:'Loan Meniri'},
      {name: 'robots', content:'index, follow'},
      {name: 'keywords', content:'kiposetou, menuiserie, Valence, Rhône-Alpes, rénovation, fenêtre'}
    ])
  }

  updateMetaIndexPage(value : boolean) {
    const robots =  this.meta.getTag('name="robots"');
    if(value){
      if (robots){
        this.meta.removeTagElement(robots);
      }
      this.meta.addTags([
        {name: 'robots', content:'index, follow'}
      ]);
    } else {
      if (robots){
        this.meta.removeTagElement(robots);
      }
      this.meta.addTags([
        {name: 'robots', content:'noindex, nofollow'}
      ]);
    }
  }
}
