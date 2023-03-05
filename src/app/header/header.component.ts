import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Console } from 'console';
import { HeaderService } from '../services/header.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  nosRealisationEstActive : boolean = false;
  menuBurgerEstEnCroix : boolean = false;
  
  constructor(private router : Router, private headerService: HeaderService) {
  }

  @HostListener('window:click', ['$event'])
  onClick(event: MouseEvent) {
    if(!this.headerService.elementEstDansHeaderMenu(event)){
      this.nosRealisationEstActive=false;
      console.log("nos realisation à false");
    }
    console.log("v0 : ",this.nosRealisationEstActive);
  }

  ngOnInit(): void {
  }

  nosRealisation(){
    this.nosRealisationEstActive=!this.nosRealisationEstActive;
  }

  afficheMenu(){
    this.menuBurgerEstEnCroix=!this.menuBurgerEstEnCroix;
  }

  goToTheAcceuil(){
    this.router.navigate(['Accueil']);
  }
  goToTheDecrireProjet(){
    this.router.navigate(['Decrire-mon-projet']);
  }
  goToTheEtreRappele(){
    this.router.navigate(['Etre-rappele']);
  }
}
