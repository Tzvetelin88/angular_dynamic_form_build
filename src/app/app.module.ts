import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { DynamicFormComponent } from "./dynamic-form/dynamic-form.component";
import { EnableFieldFormControlDirective } from "./dynamic-reactive-form-core/directive/enable-field-form-control.directive";
import { DynamicFormQuestionComponent } from "./dynamic-reactive-form-core/components/dynamic-form-core/dynamic-form-core.component";

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule],
  declarations: [
    AppComponent,
    DynamicFormComponent,
    DynamicFormQuestionComponent,
    EnableFieldFormControlDirective,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {}
}
