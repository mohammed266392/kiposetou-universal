import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-proposer1-item',
  templateUrl: './proposer1-item.component.html',
  styleUrls: ['./proposer1-item.component.scss']
})
export class Proposer1ItemComponent implements OnInit {

  @Input() imageUrl : string ="";
  @Input() isActive : boolean = false;
  @Input() id : number | undefined;

  @Output() clickEmitter : EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  clickButton() {
    console.log("j'emets une valeur : ",!this.isActive);
    this.clickEmitter.emit(!this.isActive);
  }
  
}
