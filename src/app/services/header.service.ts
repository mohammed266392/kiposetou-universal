import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  buttonRealisation: Subject<boolean> = new BehaviorSubject<boolean>(false);
  buttonAcceuil: Subject<boolean> = new BehaviorSubject<boolean>(false);
  buttonNosProduits: Subject<boolean> = new BehaviorSubject<boolean>(false);
  buttonMenuMobile: Subject<boolean> = new BehaviorSubject<boolean>(false);
  private menuBurger = false ;
  private nosRealisationEstActive = false;
  buttonMenuMobileToggle :boolean= false;
  buttonNosRealisationsToggle = false;
  private monBoolean = false;
  constructor() { }

  getMonBoolean() : boolean {
    return this.monBoolean;
  }
  setMonBoolean(value : boolean) {
    this.monBoolean = value;
  }
  getMenuBurger() : boolean {
    return this.menuBurger;
  }
  setMenuBurger(value : boolean) {
    this.menuBurger = value;
  }
  getNosRealisationEstActive() : boolean {
    return this.nosRealisationEstActive;
  }
  setNosRealisationEstActive(value : boolean) {
    return this.nosRealisationEstActive;
  }

  clickNosRealisation(){
    this.buttonRealisation.next(!this.buttonNosRealisationsToggle);
    this.buttonAcceuil.next(false);
    this.buttonNosProduits.next(false);
    this.buttonNosRealisationsToggle = !this.buttonNosRealisationsToggle;
    console.log("valeur de buttonNosRealisationsToggle est ",this.buttonNosRealisationsToggle);
  }

  clickReset(){
    this.buttonRealisation.next(false);
    this.buttonAcceuil.next(false);
    this.buttonNosProduits.next(false);
    this.buttonMenuMobile.next(false);
    this.buttonMenuMobileToggle = false;
    this.buttonNosRealisationsToggle = false;
    console.log("valeur de buttonNosRealisationsToggle sur clickReset est ",this.buttonNosRealisationsToggle);
  }
  clickMenuMobile(){
    this.buttonMenuMobile.next(!this.buttonMenuMobileToggle);
    this.buttonRealisation.next(false);
    this.buttonAcceuil.next(false);
    this.buttonNosProduits.next(false);
    this.buttonMenuMobileToggle = !this.buttonMenuMobileToggle;
    console.log("valeur de buttonMenuMobileToggle sur clickMenuMobile est ",this.buttonMenuMobileToggle);

  }
}
