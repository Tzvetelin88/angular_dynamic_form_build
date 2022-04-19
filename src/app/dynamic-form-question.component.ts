import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-question',
  templateUrl: './dynamic-form-question.component.html',
})
export class DynamicFormQuestionComponent {
  @Input() questionGroup!: any;
  @Input() form!: FormGroup;

  isValid(currentQuestion: string) {
    let questionFormGroup = <FormGroup>(
      this.form.controls[this.questionGroup.key]
    );
    let currentFormGroup = questionFormGroup.controls[currentQuestion];

    if (currentFormGroup.touched) {
      return currentFormGroup.touched && currentFormGroup.status !== 'INVALID';
    }
    return true;
  }
}
