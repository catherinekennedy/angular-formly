import { Component, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'app-ng-select',
  templateUrl: './ng-select.component.html',
  styleUrls: ['./ng-select.component.css']
})

export class NgSelectComponent extends FieldType {

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
