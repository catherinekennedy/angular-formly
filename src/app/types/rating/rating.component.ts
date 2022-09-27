import { Component, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'app-rating',
  template: '<p>{{to.label}}</p><p-rating [formControl]="formControl" [cancel]="to.cancel" [stars]="to.stars"  ></p-rating>',
  styleUrls: ['./rating.component.css']
})

  export class RatingComponent extends FieldType {

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