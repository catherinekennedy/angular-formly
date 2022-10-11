import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ability, AbilityBuilder } from "@casl/ability";
// import { AbilityBuilder, Ability } from '@casl/ability'

@Injectable({
  providedIn: 'root'
})
export class CallService {
  private url = 'http://localhost:3000/schema';
   
  constructor(private httpClient: HttpClient,private ability: Ability) { }
  
  getPosts(){
    return this.httpClient.get(this.url);
  }

  private updateAbility(role: string = "read") {
    console.log("role"+ role);
    const { can, rules } = new AbilityBuilder<Ability>();;
    const rolePermission = this.getRolePermission();
    console.log("rolePermission");
    console.log(rolePermission);

    can(rolePermission[role].actions, rolePermission[role].subjects);
    
    //  rule = defineAbilitiesFor();
    // var cat = rules;
    this.ability.update(rules);
    // this.ability.update(rules);
    console.log(this.ability);
  }


  getRolePermission() {
    // action: what the user can do
    // subject: entity which you want to check user action
    return {
      super: { actions: ["update","reset"], subjects: ["form"] },
      standard: {
        actions: [ "reset"],
        subjects: ["form"]
      },
      limited: { actions: ["disable"], subjects: ["form"] }
    };
  }

  setUserPermissions({ role }) {
    const userRole = role;
    this.updateAbility(userRole);
  }

  setUserPermissionsForInput(us) {
    const userRole = us;
    this.updateAbility(userRole);
  }
}





  

