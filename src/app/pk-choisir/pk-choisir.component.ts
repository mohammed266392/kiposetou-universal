import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pk-choisir',
  templateUrl: './pk-choisir.component.html',
  styleUrls: ['./pk-choisir.component.scss']
})
export class PkChoisirComponent implements OnInit {

  @Input() openModale :boolean = false ;
  @Output() clickModaleEmitted : EventEmitter<boolean> = new EventEmitter<boolean>();
  
  constructor() { }

  ngOnInit(): void {
  }

  clickDemanderUnDevis(): void {
    console.log("j'ai cliqué sur demander un Avis !");
    console.log("Et j'emets la valeur true");
    this.clickModaleEmitted.emit(true);
  }

}
