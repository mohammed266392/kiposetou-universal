import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proposer1',
  templateUrl: './proposer1.component.html',
  styleUrls: ['./proposer1.component.scss']
})
export class Proposer1Component implements OnInit {

  idChildren = [1,2,3];
  isActiveTab : Array<boolean> = [false,false,false] ;
  imagePath : string = "./../../assets/images/";
  iconsImages : Array<string> = ["la-fenetre.png","outils.png","carte-france.png"];
  

  constructor() { }

  ngOnInit(): void {
  }

  clickReceive(value : boolean, id : number){
    this.isActiveTab[id-1] = value;
    // this.isActive = value;
    // console.log("j'ai recu une données : ",this.isActive);
  }
}
