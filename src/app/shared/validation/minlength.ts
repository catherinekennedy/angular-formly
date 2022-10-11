import { ReactiveFormsModule, FormsModule,FormControl,
    ValidationErrors } from "@angular/forms";


export function minlengthValidationMessage(err, field) {
    return `Should have atleast ${field.templateOptions.minLength} characters`;
  }
  export function maxlengthValidationMessage(err, field) {
    return `This value should be less than ${field.templateOptions.maxLength} characters`;
  }
  
  export function minValidationMessage(err, field) {
    return `This value should be more than ${field.templateOptions.min}`;
  }
  
  export function maxValidationMessage(err, field) {
    return `This value should be less than ${field.templateOptions.max}`;
  }
  export function IpValidatorMessage(err, field) {
   
    console.log(field);
    return `${field.formControl.value} is not accepted`;
  } 
  
  export function IpValidator(formControl:FormControl): ValidationErrors {
    console.log(formControl);
    if(formControl.value == "baby_ruth"){
      console.log("baby");
      return { 'candy': true };
      
    }
  }
  
 