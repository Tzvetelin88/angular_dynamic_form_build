import { Directive, Input } from "@angular/core";
import { NgControl } from "@angular/forms";

@Directive({
  selector: "[enableFieldFormControl]",
})
export class EnableFieldFormControlDirective {
  @Input() set enableFieldFormControl(condition: any) {
    if (this.ngControl && this.ngControl.control) {
      if (!!condition) {
        this.ngControl.control.enable();
      } else {
        this.ngControl.control.disable();
        this.ngControl.control.reset();
      }
    }
  }
  constructor(private ngControl: NgControl) {}
}
