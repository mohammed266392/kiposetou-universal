import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proposer1-item',
  templateUrl: './proposer1-item.component.html',
  styleUrls: ['./proposer1-item.component.scss']
})
export class Proposer1ItemComponent implements OnInit {



  clickButton($event: MouseEvent) {
    throw new Error('Method not implemented.');
  }

  constructor() { }

  ngOnInit(): void {
  }

  
}
