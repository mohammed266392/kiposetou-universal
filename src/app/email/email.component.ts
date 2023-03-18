import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {

  monFormulaire: FormGroup | undefined;
  
  constructor() { }

  ngOnInit(): void {
    this.monFormulaire = new FormGroup({
      nom: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      objet: new FormControl('', [Validators.required]),
      message : new FormControl('', [Validators.required])
    });
  }

  onSubmit() {
    // Do something with the form data
  }

}
