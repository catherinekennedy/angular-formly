import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import {
  NbSidebarModule,
  NbLayoutModule,
  NbButtonModule,
  NbMenuModule,
} from "@nebular/theme";
import { NbThemeModule } from "@nebular/theme";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ShepsherdComponent } from "./shepsherd/shepsherd.component";
import { ShepherdService } from "angular-shepherd";
import { IntroComponent } from "./intro/intro.component";
import { NgZorroAntdModule, NZ_I18N, en_US } from "ng-zorro-antd";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { registerLocaleData } from "@angular/common";
import en from "@angular/common/locales/en";
import { SampleComponent } from "./sample/sample.component";
import { IconsProviderModule } from "./icons-provider.module";
import { LoginComponent } from "./intro/login/login.component";
import { HomeComponent } from "./intro/home/home.component";
import * as $ from "jquery";
import { ReactiveFormsModule, FormsModule,FormControl,
  ValidationErrors } from "@angular/forms"; // for angular reactive form
import { DynamicFormControllerModule } from "angular-reactive-dynamic-forms";

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

//rxweb ucf
import { RxReactiveDynamicFormsModule } from "@rxweb/reactive-dynamic-forms";
import { json, RxReactiveFormsModule } from "@rxweb/reactive-form-validators";
//formly

import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';

import { CallService } from './service/call.service';
import { FormlyComponent } from './formly/formly.component';

//for angular formly multiple select box
import { NgSelectComponent } from './ng-select/ng-select.component';
import { NgSelectModule } from '@ng-select/ng-select';


import { PrimetoggleComponent } from './types/primetoggle/primetoggle.component';
import { RatingComponent } from './types/rating/rating.component';
import { ChipsComponent } from './types/chips/chips.component';
import { CalendarComponent } from './types/calendar/calendar.component';
import { SubmitButtonComponent } from './types/submit-button/submit-button.component';
import { ResetButtonComponent } from './types/reset-button/reset-button.component';
import { UpdateButtonComponent } from './types/update-button/update-button.component';
import { SliderComponent } from './types/slider/slider.component';
import {RadioButtonModule} from 'primeng/radiobutton';



// import { FormlyModule }from '@ngx-formly/core';
// import { FormlyBootstrapModule }from '@ngx-formly/bootstrap';


// import {ButtonModule} from 'primeng/button';



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

export function IpValidator(formControl:FormControl): ValidationErrors {
  console.log(formControl);
  if(formControl.value == "baby_ruth"){
    console.log("baby");
    return { 'candy': true };
    
  }
}

export function IpValidatorMessage(err, field) {
 
  console.log(field);
  return `${field.formControl.value} is not accepted`;
}


registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    ShepsherdComponent,
    IntroComponent,
    SampleComponent,
    LoginComponent,
    HomeComponent,
    FormlyComponent,
    NgSelectComponent,
    PrimetoggleComponent,
    RatingComponent,
    ChipsComponent,
    CalendarComponent,
    SubmitButtonComponent,
    ResetButtonComponent,
    UpdateButtonComponent,
    SliderComponent,
  ],
  imports: [
    InputSwitchModule,RatingModule,ChipsModule,CalendarModule,RadioButtonModule,
    ReactiveFormsModule,
    NgSelectModule,
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
      ]
      
    }),
    ButtonModule,
    CarouselModule,
    CascadeSelectModule,MultiSelectModule,
    RxReactiveFormsModule,
    RxReactiveDynamicFormsModule,
    NbThemeModule.forRoot({ name: "dark" }),
    NbLayoutModule,
    NbSidebarModule.forRoot(), //if this is your app.module
    NbButtonModule,
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    
    NbMenuModule.forRoot(),
    DynamicFormControllerModule,
  ],
  providers: [
    ShepherdService,CallService,
    { provide: NZ_I18N, useValue: en_US },
    NbLayoutModule,
    NbSidebarModule, // NbSidebarModule.forRoot(), //if this is your app.module
    NbButtonModule,
    FilterService,PrimeNGConfig
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
