// import { Component } from "@angular/core";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GlobalConstants } from "src/app/common/globalvar";
import * as introJs from "intro.js/intro.js";
import "intro.js/introjs.css";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { NbMenuItem } from '@nebular/theme';


@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  
  constructor(private route: Router) {}

  items: NbMenuItem[] = [
    {
      title: 'Profile',
      expanded: true,
      children: [
        {
          title: 'Change Password',
        },
        {
          title: 'Privacy Policy',
        },
        {
          title: 'Logout',
        },
      ],
    },
    {
      title: 'Home',
      link:'/home',
      
    },
    {
      title: 'login',
      link:'/login',
    },
  ];


  isCollapsed = false;
  percent = GlobalConstants.percentage;
  appTour = GlobalConstants.arrTour;
  apptourname = GlobalConstants.apptourName;
  apptourval = GlobalConstants.apptourvalue;
  tours = GlobalConstants.tour;
  tourbtn = GlobalConstants.tourbtn;
  call(step, title, x) {
    console.log(x);
    console.log(this.route.url);
    if (x === "tour1" ) {
      if(this.route.url === "/login"){
        console.log("same route");
        GlobalConstants[x].goToStep(step).start();
      }else{
        this.route.navigate(["./login"]);
      if(step == 1){
        console.log("dii  route step 1");
        GlobalConstants[x].start();
      }else{
        console.log("dii  route ");
        GlobalConstants[x].goToStep(step-1).start();
      }

      }
      
      
     
    } else if (x == "tour2") {
      if(this.route.url === "/home"){
        console.log("same route");
        GlobalConstants[x].goToStep(step).start();
      }else{
        this.route.navigate(["./home"]);
      if(step == 1){
        console.log("dii  route step 1");
        GlobalConstants[x].start();
      }else{
        console.log("dii  route ");
        GlobalConstants[x].goToStep(step-1).start();
      }

      }
      
    }
    // var tou = GlobalConstants.x;
    console.log(GlobalConstants[x]);

    GlobalConstants[x].goToStep(step).start();
  }
  tour(x) {
    console.log(x);
    if (x === "tour1") {
      this.route.navigate(["./login"]);
      GlobalConstants[x].start();
      console.log("g");
    } else if (x == "tour2") {
      this.route.navigate(["./home"]);
      GlobalConstants[x].start();
    }
  }
}
