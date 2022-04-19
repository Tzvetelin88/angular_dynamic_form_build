import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';

import { QuestionFormGroups } from './question-base';
import { QuestionControlService } from './question-control.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  providers: [QuestionControlService],
})
export class DynamicFormComponent implements OnInit {
  form!: FormGroup;
  payLoad = '';

  questionGroups: QuestionFormGroups;

  // TODO - get data from API or other source.
  constructor(private qcs: QuestionControlService) {
    this.questionGroups = {
      _1_group: [
        {
          controlType: 'textbox',
          name: 'group1_field1',
          label: 'Field 1',
          type: 'text',
          value: '',
          validations: [Validators.pattern('^[a-zA-Z]+$')],
          errorMessage: 'Field required! Accept only letters!',
        },
        {
          controlType: 'textbox',
          name: 'group1_field2',
          label: 'Field 2',
          type: 'text',
          value: '',
          validations: [],
          errorMessage: 'Field required!',
        },
      ],
      _2_group: [
        {
          controlType: 'textbox',
          name: 'group2_field3',
          label: 'Field 3',
          type: 'text',
          value: '',
          errorMessage: 'Field required!',
        },
        {
          controlType: 'dropdown',
          name: 'group2_field4',
          label: 'Field 4',
          type: 'text',
          options: [
            { key: 'solid', value: 'Solid' },
            { key: 'great', value: 'Great' },
            { key: 'good', value: 'Good' },
            { key: 'unproven', value: 'Unproven' },
          ],
          errorMessage: 'Field required!',
        },
      ],
    };
  }

  ngOnInit() {
    this.form = this.qcs.toFormGroups(this.questionGroups as any);
    console.log(this.form);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }
}
