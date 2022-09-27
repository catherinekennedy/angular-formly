import { Component, OnInit } from "@angular/core";
import { GlobalConstants } from "src/app/common/globalvar";
import * as $ from "jquery";

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.component.html",
  styleUrls: ["./welcome.component.css"],
})
export class WelcomeComponent implements OnInit {
  constructor() {}
  editStr = "This is an editable text.";

  ngOnInit() {
    GlobalConstants.tour2
      .setOptions({
        steps: GlobalConstants.tour[2],
      })
      .onbeforechange((targetElement) => {
        console.log(targetElement);
        console.log(GlobalConstants.tour2._currentStep);
        if (GlobalConstants.tour2._currentStep == 0) {
          $(".introjs-skipbutton").attr("disabled", "true");
        } else {
          $(".introjs-skipbutton").removeAttr("disabled");
        }
      })

      .oncomplete(() => {
        GlobalConstants.arrTour.tour2 = true;
        GlobalConstants.apptourvalue[1] = true;

        var tourlength = Object.keys(GlobalConstants.arrTour).length;
        console.log(tourlength);
        var vals = Object.values(GlobalConstants.arrTour);
        console.log(vals);
        var num = vals.filter(this.checktrue).length;
        console.log(num);

        console.log(GlobalConstants.percentage.percent);
        GlobalConstants.percentage.percent = (num / tourlength) * 100;
        console.log(GlobalConstants.percentage.percent); // or whatever your original page is
      })
      .start();
  }
  checktrue(val) {
    return val == true;
  }
}
