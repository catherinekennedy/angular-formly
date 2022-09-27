import { Component, OnInit } from "@angular/core";
import * as introJs from "intro.js/intro.js";
import "intro.js/introjs.css";
import { GlobalConstants } from "src/app/common/globalvar";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { NzMessageService } from "ng-zorro-antd/message";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  constructor(private route: Router, private message: NzMessageService) {}
  checktrue(val) {
    return val == true;
  }
  ngAfterViewInit(): void {
    GlobalConstants.tour2
    .setOptions({
      tooltipClass: "customTooltip",
      showProgress: true,
      scrollToElement:false,

      nextLabel: "Next !",
      doneLabel: "Good to Go!",
      hidePrev: true,
      showStepNumbers: true,
      disableInteraction: false,
      steps: GlobalConstants.tour[1],
    })
    .onexit(() => {
      console.log("f");
    }).onchange((targetElement)=> {
      console.log(targetElement);
      console.log(GlobalConstants.tour2._currentStep);
      if(GlobalConstants.tour2._currentStep == 1){
        GlobalConstants.tour[1][0].done = true;
      }else if(GlobalConstants.tour2._currentStep == 2){
        GlobalConstants.tour[1][1].done = true;
      }else if(GlobalConstants.tour2._currentStep == 3){
        GlobalConstants.tour[1][2].done = true;
      }
    })

    .oncomplete(() => {
      GlobalConstants.tour[1][3].done = true;
      this.route.navigate(["./welcome"]);
      console.log("go");
      // GlobalConstants.arrTour.tour2 = true;
      // GlobalConstants.apptourvalue[1] = true;
      // var tourlength = Object.keys(GlobalConstants.arrTour).length;
      // var vals = Object.values(GlobalConstants.arrTour);
      // var num = vals.filter(this.checktrue).length;
      // // console.log(GlobalConstants.percent);
      // GlobalConstants.percentage.percent = (num / tourlength) * 100;
      // console.log(GlobalConstants.percentage.percent);
      // if (GlobalConstants.percentage.percent == 100) {
      //   this.message.success(
      //     "<img width='50px' height='50px' src='https://thumbs.dreamstime.com/b/medal-colour-icon-website-design-development-app-premium-pack-glyph-vector-158230370.jpg'> Congratz Finished the app tour"
      //   );
      // }
    })

    .start();
   

 }
  ngOnInit() {
   
  
  }
}
