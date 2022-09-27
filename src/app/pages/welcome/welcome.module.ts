import { NgModule } from "@angular/core";

import { WelcomeRoutingModule } from "./welcome-routing.module";

import { WelcomeComponent } from "./welcome.component";

import { NgZorroAntdModule, NZ_I18N, en_US } from "ng-zorro-antd";
import en from "@angular/common/locales/en";
import { IconsProviderModule } from "src/app/icons-provider.module";

@NgModule({
  imports: [WelcomeRoutingModule, NgZorroAntdModule, IconsProviderModule],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent],
})
export class WelcomeModule {}
