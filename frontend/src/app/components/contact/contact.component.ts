import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}


@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
    contact : any

    constructor(private _formBuilder: FormBuilder) { }

    ngOnInit() {
        this.contact = {
            fullName: null,
            email : null
        }
    }

    invalidFullname(){
        if (this.contact.fullName == null){
            return ''
        }else if (this.contact.fullName == ''){
            return "This field is required"
        }else {
            return "Invalid Pattern"
        }

    }


}
