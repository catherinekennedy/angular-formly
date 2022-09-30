import { Component, OnInit } from '@angular/core';
import { NzMarks } from 'ng-zorro-antd/slider';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})

export class SliderComponent extends FieldType {
  // marks: NzMarks = {
  //   0: 'least',
  //   50: 'Medium',
  //   100: {
  //     style: {
  //       color: '#f50'
  //     },
  //     label: '<strong>Critical</strong>'
  //   }
  // };
  // marks:NzMarks=this.to.steps;
  // marks:any= this.to.options;
  // console.log(this.to.options);

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
