import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SampleComponent } from "./sample/sample.component";
import { IntroComponent } from "./intro/intro.component";
import { ShepsherdComponent } from "./shepsherd/shepsherd.component";
import { LoginComponent } from "./intro/login/login.component";
import { HomeComponent } from "./intro/home/home.component";
import { FormlyComponent } from './formly/formly.component';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "/welcome" },
  { path: "sample", component: SampleComponent },
  { path: "intro", component: IntroComponent },
  { path: "shepsherd", component: ShepsherdComponent },
  { path: "login", component: LoginComponent },
  { path: "home", component: HomeComponent },
  { path: "formly", component: FormlyComponent },
  {
    path: "welcome",
    loadChildren: () =>
      import("./pages/welcome/welcome.module").then((m) => m.WelcomeModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
