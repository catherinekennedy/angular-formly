import { Component, OnInit } from "@angular/core";
import * as introJs from "intro.js/intro.js";
// import "intro.js/introjs.css";

@Component({
  selector: "app-intro",
  templateUrl: "./intro.component.html",
  styleUrls: ["./intro.component.css"],
})
export class IntroComponent implements OnInit {
  tour1 = introJs();
  tour2 = introJs();
  percent: number;
  isVisible = false;
  deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30;

  constructor() {}

  arrTour = { t1: false, t2: false };
  // jsonData = JSON.stringify(this.arrTour);

  // arrTour: number[] = [1, 4, 7];
  checktrue(val) {
    return val == true;
  }
  ngOnInit() {
    // console.log(this.jsonData);
    // // console.log(JSON.parse(this.jsonData));
    // localStorage.setItem("tour", this.jsonData);
    // this.arrTour[0].t1 = true;
    console.log(Object.keys(this.arrTour).length);
    var val = Object.values(this.arrTour);
    console.log(val.filter(this.checktrue).length);
    // introJs().oncomplete(function () {
    //   alert("end of introduction");
    // });
    // Check the dontShowAgain cookies first and then display the tour
    // introJs().setOption("dontShowAgain", true).start();
    var active = introJs().isActive();
    console.log(active);
  }

  showModal(): void {
    // var jsonparsedData = JSON.parse(localStorage.getItem("tour"));
    // console.log(jsonparsedData);
    // var tourlength = Object.keys(this.arrTour).length;
    // var vals = Object.values(jsonparsedData);
    // var num = vals.filter(this.checktrue).length;
    var tourlength = Object.keys(this.arrTour).length;
    var vals = Object.values(this.arrTour);
    var num = vals.filter(this.checktrue).length;
    this.percent = (num / tourlength) * 100;
    this.isVisible = true;
  }

  handleOk(): void {
    console.log("Button ok clicked!");
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log("Button cancel clicked!");
    this.isVisible = false;
  }

  startTour() {
    console.log("h");
    this.tour1
      .setOptions({
        tooltipClass: "customTooltip",
        showProgress: true,
        // skipLabel: "Exit",
        // dontShowAgain: true,
        // showButtons: false,
        // showBullets: false,
        // dontShowAgainLabel: true,
        nextLabel: "Next !",
        doneLabel: "Good to Go!",
        hidePrev: true,
        showStepNumbers: true,
        disableInteraction: true,
        steps: [
          {
            element: document.querySelector(".card-img-top"),
            title: "Welcome",
            intro: "this will show about intro.js",
            position: "right",
            step: 1,
          },
          {
            element: document.querySelector(".explore"),
            intro: "this is a explore button where you can explore things",
            position: "top",
            step: 2,
          },
          {
            title: "vedio alert",
            element: document.querySelector(".card-body"),
            intro:
              'User click apply <hr><p><b>The tutorial video as shown below:<b></p><iframe width="200px" src="https://www.youtube.com/embed/EU7PRmCpx-0" frameborder="0" ></iframe>',
            position: "right",
            step: 3,
          },
        ],
      })
      // .onbeforeexit(function () {
      //   return confirm("Are you sure?");
      // })
      //wait for 5 sec
      // .onbeforechange(async () => {
      //   return new Promise((resolve) => {
      //     // console.log(resolve);
      //     // alert("Performing I/O...");
      //     // setInterval(resolve, 500);
      //   });
      // })
      .oncomplete(() => {
        this.arrTour.t1 = true;
        var tourlength = Object.keys(this.arrTour).length;
        var vals = Object.values(this.arrTour);
        var num = vals.filter(this.checktrue).length;
        this.percent = (num / tourlength) * 100;
        // this.jsonData = JSON.stringify(this.arrTour);
        // localStorage.setItem("tour", this.jsonData);
        // console.log(localStorage.getItem("tour"));

        // window.location.href = "../sample?multipage=true";
      })
      .start();
  }

  startTour2() {
    console.log("h");
    this.tour2
      .setOptions({
        tooltipClass: "customTooltip",
        showProgress: true,
        // skipLabel: "Exit",
        // dontShowAgain: true,
        // showButtons: false,
        // showBullets: false,
        // dontShowAgainLabel: true,
        nextLabel: "Next !",
        doneLabel: "Good to Go!",
        hidePrev: true,
        showStepNumbers: true,
        disableInteraction: true,
        steps: [
          {
            element: document.querySelector(".img1"),
            title: "Welcome",
            intro: "This is card 1",
            position: "right",
            step: 1,
          },
          {
            element: document.querySelector(".img2"),
            intro: "This is card 2 ",
            position: "right",
            step: 2,
          },
          {
            title: "Farewell!",
            element: document.querySelector(".img3"),
            intro: "This is card 3",
            position: "right",
            step: 3,
          },
        ],
      })
      // .onbeforeexit(function () {
      //   return confirm("Are you sure?");
      // })
      //wait for 5 sec
      // .onbeforechange(async () => {
      //   return new Promise((resolve) => {
      //     // console.log(resolve);
      //     // alert("Performing I/O...");
      //     // setInterval(resolve, 500);
      //   });
      // })
      .oncomplete(() => {
        alert("tour2 finishd");
        this.arrTour.t2 = true;
        var tourlength = Object.keys(this.arrTour).length;
        var vals = Object.values(this.arrTour);
        var num = vals.filter(this.checktrue).length;
        this.percent = (num / tourlength) * 100;

        console.log(this.arrTour);
        // this.jsonData = JSON.stringify(this.arrTour);
        // localStorage.setItem("tour", this.jsonData);
        // console.log(localStorage.getItem("tour"));
      })
      .start();
  }
  showHint() {
    // introJs().setOption("hintButtonLabel", "OK").addHints();
    // introJs().addHints();

    introJs()
      .setOptions({
        hints: [
          { hint: "First hint", element: ".card-title", hintId: 1 },
          { hint: "Second hint", element: ".explore" },
        ],
      })
      .addHints();
  }
  // DontShowAgain() {
  //   // alert("hi");
  //   this.introJS.setDontShowAgain(true);
  // }
  step2() {
    this.tour1
      .setOptions({
        hints: [
          { hint: "First hint", element: ".card-title", hintId: 1 },
          { hint: "Second hint", element: ".explore" },
        ],
      })
      .showHint();
    // introJs().showHint(1);
    alert("e");
    // introJs().goToStepNumber(2).start();
  }
}

//
