import { Component, OnInit } from '@angular/core';
import { SEOService } from './services/seo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private readonly seo : SEOService){}

  ngOnInit(): void {
    this.seo.initDefaultMetaInformation();
  }


}
