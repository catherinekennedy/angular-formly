import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { ReactiveFormsModule, FormsModule,FormControl,
  ValidationErrors } from "@angular/forms";
import { CalendarComponent } from './types/calendar/calendar.component';
import { ChipsComponent } from './types/chips/chips.component';
import { PrimetoggleComponent } from './types/primetoggle/primetoggle.component';
import { RatingComponent } from './types/rating/rating.component';
import { ResetButtonComponent } from './types/reset-button/reset-button.component';
import { SliderComponent } from './types/slider/slider.component';
import { SubmitButtonComponent } from './types/submit-button/submit-button.component';
import { UpdateButtonComponent } from './types/update-button/update-button.component';

//primeng modules
// import {TreeSelectModule} from "primeng/"
import { ButtonModule } from "primeng/button";
import { CarouselModule } from "primeng/carousel";
import { CascadeSelectModule } from "primeng/cascadeselect";
import {MultiSelectModule} from 'primeng/multiselect';
import { FilterService } from 'primeng/api';
import { SelectItem, PrimeNGConfig } from "primeng/api";
import {InputSwitchModule} from 'primeng/inputswitch';
import {RatingModule} from 'primeng/rating';
import {ChipsModule} from 'primeng/chips';
import {CalendarModule} from 'primeng/calendar';
import { NgSelectComponent } from './types/ng-select/ng-select.component';


//ant design
import { NgZorroAntdModule, NZ_I18N, en_US } from "ng-zorro-antd";
import en from "@angular/common/locales/en";
import { IconsProviderModule } from "src/app/icons-provider.module";

//CASL


import { AbilityModule } from '@casl/angular';
import { Ability, PureAbility } from '@casl/ability';

import { FormlyService } from './service/formly.service';
import {minlengthValidationMessage} from './validation/minlength'

import {maxValidationMessage} from './validation/minlength'
import {maxlengthValidationMessage} from './validation/minlength'
import {minValidationMessage} from './validation/minlength'
import {IpValidator} from './validation/minlength'
import {IpValidatorMessage} from './validation/minlength'




import {} from './validation/minlength';
import { NormalsliderComponent } from './types/normalslider/normalslider.component'

// export function minlengthValidationMessage(err, field) {
//   return `Should have atleast ${field.templateOptions.minLength} characters`;
// }



// export function IpValidator(formControl:FormControl): ValidationErrors {
//   console.log(formControl);
//   if(formControl.value == "baby_ruth"){
//     console.log("baby");
//     return { 'candy': true };
    
//   }
// }

// export function IpValidatorMessage(err, field) {
 
//   console.log(field);
//   return `${field.formControl.value} is not accepted`;
// }

@NgModule({
  declarations: [CalendarComponent, ChipsComponent, PrimetoggleComponent, RatingComponent, ResetButtonComponent, SliderComponent, SubmitButtonComponent, UpdateButtonComponent, NgSelectComponent, NormalsliderComponent
  ],
  imports: [InputSwitchModule,RatingModule,ChipsModule,CalendarModule,ButtonModule,
    CascadeSelectModule,MultiSelectModule,
    CarouselModule,
    CommonModule,
    ReactiveFormsModule,
    AbilityModule,
    FormlyBootstrapModule,
    FormlyModule.forRoot({
      validators: [{ name: "ip-default", validation: IpValidator }],
      validationMessages: [
        { name: 'required', message: 'This field is required' },
        { name: 'minlength', message: minlengthValidationMessage },
        { name: 'maxlength', message: maxlengthValidationMessage },
        { name: 'min', message: minValidationMessage },
        { name: 'max', message: maxValidationMessage },
        { name: "candy", message: IpValidatorMessage }
      ],
      types: [
        { name: 'ng-select', component: NgSelectComponent},
        { name: 'ng-toggle', component: PrimetoggleComponent},
        { name: 'ng-rating', component: RatingComponent},
        { name: 'ng-chips', component: ChipsComponent},
        { name: 'ng-calendar', component: CalendarComponent},
        { name: 'submit-button', component: SubmitButtonComponent},
        { name: 'reset-button', component: ResetButtonComponent},
        { name: 'update', component: UpdateButtonComponent},
        { name: 'ant-slider', component: SliderComponent},
        { name: 'basic-slider', component: NormalsliderComponent},
      ]
      
    }),
    NgZorroAntdModule, IconsProviderModule
  ],

  exports:[ FormlyModule,FormlyBootstrapModule,
    CommonModule, FormsModule,AbilityModule ],
    providers: [
      { provide: Ability, useValue: new Ability() },
      { provide: PureAbility, useExisting: Ability },
      FilterService,PrimeNGConfig,FormlyService
    ]
})
export class SharedModule { }
