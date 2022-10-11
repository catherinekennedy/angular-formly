import { Component, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'app-normalslider',
  templateUrl: './normalslider.component.html',
  styleUrls: ['./normalslider.component.css']
})

export class NormalsliderComponent extends FieldType {


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
