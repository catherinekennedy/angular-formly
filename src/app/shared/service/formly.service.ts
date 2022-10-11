import { Injectable } from '@angular/core';
import { ReactiveFormsModule, FormsModule,FormControl,
  ValidationErrors } from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class FormlyService {

  constructor() { }
  getPosts(){
    return "hi";
  }
   
  
}

