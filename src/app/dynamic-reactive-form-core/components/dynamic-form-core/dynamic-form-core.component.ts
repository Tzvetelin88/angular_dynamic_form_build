import {
  AfterContentChecked,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
} from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "app-question",
  templateUrl: "./dynamic-form-core.component.html",
  styleUrls: ["./dynamic-form-core.component.css"],
})
export class DynamicFormQuestionComponent
  implements OnInit, AfterContentChecked
{
  @Input() questionGroup!: any;
  @Input() form!: FormGroup;

  currentFormValues: any;

  constructor(private cd: ChangeDetectorRef) {}

  isValid(currentQuestion: string) {
    let questionFormGroup = <FormGroup>(
      this.form.controls[this.questionGroup.key]
    );
    let currentFormGroupQuestion = questionFormGroup.controls[currentQuestion];

    if (currentFormGroupQuestion.touched) {
      return (
        currentFormGroupQuestion.touched &&
        currentFormGroupQuestion.status !== "INVALID"
      );
    }
    return true;
  }

  ngOnInit(): void {}

  // Adding this because of https://angular.io/errors/NG0100
  ngAfterContentChecked(): void {
    this.cd.detectChanges();
  }
}
