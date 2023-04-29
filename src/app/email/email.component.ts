import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MailService } from '@sendgrid/mail'


@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})

export class EmailComponent implements OnInit {

  contactFormGroup: FormGroup;
  

  constructor(private fb: FormBuilder, private http: HttpClient) {}
  ngOnInit() {
    
    this.contactFormGroup = this.fb.group({

      contact : this.fb.group({
        nom : new FormControl('', [Validators.required]),
        prenom : new FormControl('', [Validators.required]),
        objet : new FormControl('', [Validators.required]),
        message : new FormControl('', [Validators.required]),
        email:new FormControl('', [
          Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
        ])
      })
    });
  }

  onSubmit(){
    console.log("submission button");
    console.log(this.contactFormGroup.get('contact').value);
    if(this.contactFormGroup.invalid){
      this.contactFormGroup.markAllAsTouched()
    }
    
  }



  get email(){  return this.contactFormGroup.get('contact.email');}
  
  }

