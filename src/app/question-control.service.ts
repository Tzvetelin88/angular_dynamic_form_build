import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { QuestionFormGroups } from './question-base';

@Injectable()
export class QuestionControlService {
  constructor(private formBuilder: FormBuilder) {}

  toFormGroups(questionGroups: QuestionFormGroups) {
    let innerGroups: any = {};
    let innerGroup: any = {};

    for (let group in questionGroups) {
      innerGroup = {};
      questionGroups[group].forEach((question: any) => {
        let validationsCheck: any[] = question.validations
          ? question.validations
          : [];

        validationsCheck.push(Validators.required);
        innerGroup[question.name] = [
          question.value || '',
          Validators.compose(validationsCheck),
        ];
      });

      innerGroups[group] = this.formBuilder.group(innerGroup);
    }
    return this.formBuilder.group(innerGroups);
  }
}
