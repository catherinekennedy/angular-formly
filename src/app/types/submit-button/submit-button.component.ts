import { Component, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'app-submit-button',
  templateUrl: './submit-button.component.html',
  styleUrls: ['./submit-button.component.css']
})

export class SubmitButtonComponent extends FieldType {
  submit(form){
    console.log(this.to);
    console.log(this.showError);
    console.log(this.model);
    console.log(this.to);
    console.log(form);
  }
  get labelProp(): string {
    console.log(this.to);
    return this.to.labelProp || 'label';
  }
  get valueProp(): string {
    return this.to.valueProp || 'value';
  }
  get groupProp(): string {
    return this.to.groupProp || 'group';
  }
}
