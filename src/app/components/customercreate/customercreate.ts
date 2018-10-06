import { Component , OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-customercreate',
    templateUrl: './customercreate.html',
    styleUrls: ['./customercreate.css']
})

export class CustomerCreate implements OnInit{

    registerForm: FormGroup;
    IsSubmitted = false;

    constructor(private formBuilder: FormBuilder){
        this.registerForm = this.formBuilder.group({
            firstname: ['', Validators.required],
            lastname: ['', Validators.required],
            code: ['', Validators.required],
        });
    }

    ngOnInit(){}
F
    get f() { return this.registerForm.controls;  }
    
    submit() {
        this.IsSubmitted = true;
        if (this.registerForm.invalid) {
            return;
        } alert('form submitted successfully');

    }

}