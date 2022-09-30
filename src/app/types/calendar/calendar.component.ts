import { Component, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})

export class CalendarComponent extends FieldType {
cat(){
console.log("hi");
}
  get labelProp(): string {
    // console.log(this.to);
    return this.to.labelProp || 'label';
  }
  get valueProp(): string {
    return this.to.valueProp || 'value';
  }
  get groupProp(): string {
    return this.to.groupProp || 'group';
  }
}
