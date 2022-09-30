import { Component, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'app-update-button',
  templateUrl: './update-button.component.html',
  styleUrls: ['./update-button.component.css']
})

export class UpdateButtonComponent extends FieldType {
  
 
  cat(form){
    console.log(form);
    var opt:any = this.to.options;
    console.log(opt.length);
    for(var i=0;i<opt.length;i++){
      form.controls[opt[i].name].setValue(opt[i].value);
      console.log(opt[i].name);
    }
    // console.log(opt.length);
    // form.controls['name'].setValue(this.field.templateOptions.te);
    // console.log(this.field);
    // // this.model.name = this.field.templateOptions.te;

    // console.log(this.model);
  }
  
  get labelProp(): string {
    
    return this.to.labelProp || 'label';
  }
  get valueProp(): string {
    return this.to.valueProp || 'value';
  }
  get groupProp(): string {
    return this.to.groupProp || 'group';
  }
}
