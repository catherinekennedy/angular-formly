import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyJsonschema } from '@ngx-formly/core/json-schema';
import { HttpClient } from '@angular/common/http';
import { CallService } from '../service/call.service';
import { tap } from 'rxjs/operators';
// import { SelectItem, PrimeNGConfig } from "primeng/api";
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { Ability, AbilityBuilder } from "@casl/ability";




@Component({
  selector: 'app-formly',
  templateUrl: './formly.component.html',
  styleUrls: ['./formly.component.css']
})
export class FormlyComponent implements OnInit {
  type: string;
  us="A";

  // form: FormGroup;
  model: any={};
  form = new FormGroup({});
  options: FormlyFormOptions={};
  fields: FormlyFieldConfig[];
  user="super";
  permissionList = [
    { text: "super", role: "super" },
    { text: "standard", role: "standard" },
    { text: "limited", role: "limited" }
  ];


  constructor( private call: CallService, private formlyJsonschema: FormlyJsonschema,private http: HttpClient) { 
  }
  use(x){
    var updateindex = this.fields.findIndex(obj => obj.type =="update");
    var resetindex = this.fields.findIndex(obj => obj.type =="reset-button");
    if(x == "lmt"){
      console.log("ji");
      this.form.disable();
      this.fields[updateindex].hide = true;
      this.fields[resetindex].hide = true;
      
      }else if (x == "std"){
        console.log(this.fields);
        console.log(updateindex);
        this.fields[updateindex].hide = true;
        this.fields[resetindex].hide = false;
        this.form.enable();
      }else if(x == "sup"){
        this.form.enable();
        this.fields[updateindex].hide = false;
        this.fields[resetindex].hide = false;
      }
    console.log(x);
  }
  ngOnInit() {
  
    console.log(this.form);
    setTimeout(() =>{
      // console.log(this.options);
      // console.log(this.fields);
      // console.log(this.form);
      // this.form.disabled;
      // console.log(this.model.story)
      const user = this.user;
    this.call.setUserPermissionsForInput(user);
    // this.getUserPermissions(user);
      // var updateindex = this.fields.findIndex(obj => obj.type =="update");
      // var resetindex = this.fields.findIndex(obj => obj.type =="reset-button");
      // if(this.user == "lmt"){
      //   this.form.disable();
      //   this.fields[updateindex].hide = true;
      //   this.fields[resetindex].hide = true;
        
      //   }else if (this.user == "std"){
      //     console.log(this.fields);
      //     console.log(updateindex);
      //     this.fields[updateindex].hide = true;
      //     this.fields[resetindex].hide = true;

      //   }
     
    }, 1000);
    
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
 
  // ngAfterViewInit(){
  //   if(this.user = "limited"){
  //     console.log("li");
  //     console.log(this.model);
  //     console.log(this.options);
  //     this.form.disable();
      
  //     // this.form.disabled = true;

  //   }

  // }
 
  getUserPermissions(user) {
    this.call.setUserPermissions(user);
  }



  onOptionsSelected(roleSelected) {
    alert(roleSelected);

    const user = this.getUser(roleSelected);
    console.log(user);
    this.getUserPermissions(user);
  }

  getUser(role: string) {
    return this.permissionList.find((permission) => permission.role === role);
  }


}

