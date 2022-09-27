import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyJsonschema } from '@ngx-formly/core/json-schema';
import { HttpClient } from '@angular/common/http';
import { CallService } from '../service/call.service';
import { tap } from 'rxjs/operators';
// import { SelectItem, PrimeNGConfig } from "primeng/api";


@Component({
  selector: 'app-formly',
  templateUrl: './formly.component.html',
  styleUrls: ['./formly.component.css']
})
export class FormlyComponent implements OnInit {
  type: string;
  // form: FormGroup;
  model: any={};
  form = new FormGroup({});
  options: FormlyFormOptions={};
  fields: FormlyFieldConfig[];

  cities: any;

    selectedCities: any;

  constructor( private call: CallService, private formlyJsonschema: FormlyJsonschema,private http: HttpClient) { 
      this.cities = [
      {name: 'New York', code: 'NY', inactive: false},
      {name: 'Rome', code: 'RM', inactive: true},
      {name: 'London', code: 'LDN', inactive: false},
      {name: 'Istanbul', code: 'IST', inactive: true},
      {name: 'Paris', code: 'PRS', inactive: false}
  ];
  }

  ngOnInit() {
    // this.primengConfig.ripple = true;



    // this.http.get<any>(`http://localhost:3000/posts`).pipe(
    //   tap(({ schema, model }) => {
    //     this.type = "simple";
    //     this.form = new FormGroup({});
    //     this.options = {};
    //     const con = this.formlyJsonschema.toFieldConfig(schema);
    //     this.fields = con.fieldGroup;
    //     console.log(this.fields);
    //     this.model = model;
    //   }),
    // ).subscribe();

    this.http.get<FormlyFieldConfig[]>('http://localhost:3000/ps').subscribe(f=>{
      this.fields=f;
      console.log([this.fields]);
    })


    // this.call.getPosts()
    //     .subscribe(response => {
    //       this.form = new FormGroup({});
    //       this.options = {};
          
    //       this.fields = [this.formlyJsonschema.toFieldConfig(response)];
    //       console.log(response);
    //     });
  }

  submit(form){
    console.log(form);
  }

}
