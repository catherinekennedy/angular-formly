import * as introJs from "intro.js/intro.js";

export class GlobalConstants {
  public static apiURL: string = "https://itsolutionstuff.com/";

  public static arrTour = { tour1: false, tour2: false };
  public static apptourName = Object.keys(GlobalConstants.arrTour);
  public static apptourvalue = Object.values(GlobalConstants.arrTour);
  public static percentage = { percent: 0 };
  public static tour1 = introJs();
  public static tour2 = introJs();
  public static tour = [
    [
      {
        title: "Username",
        element: ".inputuser",
        intro: "Please enter the Username",
        position: "bottom",
        step: 1,
        done:false,
      },
      {
        title: "Password",
        element: ".inputpassword",
        intro: "Please enter the password",
        position: "top",
        step: 2,
        done:false,
      },
      {
        title: "login",
        element: ".login-form-button",
        intro: "Press login after entering details",
        position: "right",
        step: 3,
        done:false,
      },
      {
        title: "Home",
        element: "a[title='Profile']",//"a[title='Profile']"
        intro: "Click here to view home page of school",
        position: "right",
        step: 4,
        done:false,
      },
    ],
    [
      {
        element: ".jumbotron",
        title: "Tab Tour",
        intro:
          "This tour  will guide you about programs and teacher of kaar school",
        position: "right",
        step: 1,
        done:false,
      },
      {
        element: ".sco",
        title: "Scholorship",
        intro:
          "Government supported Scholorship are provided here.  click to view",
        position: "right",
        step: 2,
        done:false,
      },
      {
        title: "Teachers",
        element: ".Teachers",
        intro: "Details of teachers are shown here",
        position: "top",
        step: 3,
        done:false,
      },
      {
        element: ".pro",
        title: "Programs",
        intro: "Extra carricular programs are available here. click to view",
        position: "top",
        step: 4,
        done:false,
      },
    ],
    [
      {
        element: ".welcome",
        title: "Edit Text",
        intro: "You can edit and copy text",
        position: "top",
        step: 1,
        done:false,
      },
    ],
  ];
  public static tourbtn ={
    "data":[
    {btn:"workplace"},{btn:"mines"},{btn:"labs"},{btn:"projects"}
    ]
};

  //   public static percent = 70;

  public static siteTitle: string = "This is example of ItSolutionStuff.com";
}
