import { Component, OnInit, OnDestroy, AfterViewInit } from "@angular/core";

import { ShepherdService } from "angular-shepherd";

const tour = {
  defaultStepOptions: {
    scrollTo: true,
    cancelIcon: {
      enabled: true,
    },
    canClickTarget: true,
    popperOptions: {
      modifiers: [
        {
          name: "offset",
          options: {
            offset: [0, 20], //offset defines space
          },
        },
      ],
    },
    modalOverlayOpeningPadding: 8,
    modalOverlayOpeningRadius: 4,
  },

  steps: [
    {
      id: "btn-1",
      canClickTarget: false,

      attachTo: {
        element: ".home-btn-1",
        on: "right", // 'auto', 'auto-start', 'auto-end', 'top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'right', 'right-start', 'right-end', 'left', 'left-start', 'left-end'
      },
      buttons: [
        {
          classes: "cancel-button",
          text: "Exit",
          type: "cancel",
        },
        {
          classes: "shepherd-button-primary",
          text: "Back",
          type: "back",
          secondary: true,
        },
        {
          classes: "shepherd-button-primary",
          text: "Next",
          type: "next",
        },
      ],
      classes: "",
      highlightClass: "highlight",
      title: "Step 1",
      text: "This is content",
    },
    {
      id: "btn-2",
      attachTo: {
        element: ".home-btn-2",
        on: "bottom",
      },
      buttons: [
        {
          classes: "mat-raised-button",
          text: "Exit",
          type: "cancel",
        },
        {
          classes: "mat-raised-button",
          text: "Back",
          type: "back",
        },
        {
          classes: "mat-raised-button",
          text: "Next",
          type: "next",
        },
      ],
      classes: "",
      highlightClass: "highlight",
      title: "Step 2",
      text: "<img height='150px' src='https://images.unsplash.com/photo-1502759683299-cdcd6974244f?auto=format&fit=crop&w=440&h=220&q=60'>",
    },
    {
      id: "btn-3",
      canClickTarget: false,

      attachTo: {
        element: ".step3",
        on: "right", // 'auto', 'auto-start', 'auto-end', 'top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'right', 'right-start', 'right-end', 'left', 'left-start', 'left-end'
      },
      buttons: [
        {
          classes: "cancel-button",
          text: "Exit",
          type: "cancel",
        },
        {
          classes: "shepherd-button-primary",
          text: "Back",
          type: "back",
          secondary: true,
        },
        {
          classes: "shepherd-button-primary",
          text: "Next",
          type: "next",
        },
      ],
      classes: "",
      highlightClass: "highlight",
      title: "Step 3",
      text: "This is an image",
    },
  ],
};

@Component({
  selector: "app-shepsherd",
  templateUrl: "./shepsherd.component.html",
  styleUrls: ["./shepsherd.component.css"],
})
export class ShepsherdComponent implements OnInit, OnDestroy, AfterViewInit {
  constructor(private guideTour: ShepherdService) {}

  ngOnDestroy() {
    // this.guideTour.complete();
    this.guideTour = null;
  }

  ngAfterViewInit() {}

  startTour() {
    this.guideTour.defaultStepOptions = tour.defaultStepOptions;
    this.guideTour.modal = true;

    //if true it will show alert box
    this.guideTour.confirmCancel = false;
    this.guideTour.addSteps(tour.steps);
    this.guideTour.start();
  }
  step1() {
    alert("hi");
  }
  ngOnInit() {}
  // startTour() {
  //   this.guideTour.defaultStepOptions = tour.defaultStepOptions;
  //   this.guideTour.modal = true;
  //   this.guideTour.confirmCancel = false;
  //   // this.guideTour.addSteps(tour.steps);
  //   this.guideTour.start();
  // }
}
