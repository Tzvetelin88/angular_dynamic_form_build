import {
  AfterContentChecked,
  ChangeDetectorRef,
  Component,
  OnInit,
} from "@angular/core";
import { FormGroup, Validators } from "@angular/forms";

import { QuestionFormGroups } from "../dynamic-reactive-form-core/models/question-base";
import { QuestionControlService } from "../dynamic-reactive-form-core/services/question-control.service";

@Component({
  selector: "app-dynamic-form",
  templateUrl: "./dynamic-form.component.html",
  providers: [QuestionControlService],
})
export class DynamicFormComponent implements OnInit, AfterContentChecked {
  form!: FormGroup;
  formUpdate!: FormGroup;
  payLoad = "";

  questionGroups: QuestionFormGroups;

  // TODO - get data from API or other source.
  constructor(
    private qcs: QuestionControlService,
    private cd: ChangeDetectorRef
  ) {
    this.questionGroups = {
      _1_group: [
        {
          controlType: "checkbox",
          name: "group1_control",
          tooltip:
            "This checkbox will enable/disable Form Group 1. It will mark fileds as disabled + reset",
          label: "Control Button Group 1",
          value: true,
          validations: [Validators.pattern("^[a-zA-Z]+$")],
        },
        {
          controlType: "textbox",
          name: "group1_field1",
          tooltip:
            "This filed have valdidation pattern which accept only letters!",
          label: "Group 1 - Field 1",
          value: "simple default value",
          placeholder: "add simple value",
          validations: [Validators.pattern("^[a-zA-Z]+$")],
          errorMessage: "Field required! Accept only letters!",
          dependOn: "_1_group.group1_control",
        },
        {
          controlType: "textbox",
          name: "group1_field2",
          tooltip:
            "Please add some number to the filed. Field have validators to accept only numbers!",
          label: "Group 1 - Field 2",
          type: "number",
          value: "",
          placeholder: "add number, ex: 10",
          validations: [Validators.pattern("^[0-9]*$")],
          errorMessage: "Field required! Please add number",
          dependOn: "_1_group.group1_control",
        },
      ],
      _2_group: [
        {
          controlType: "checkbox",
          name: "group2_control",
          tooltip:
            "This checkbox will enable/disable Form Group 2. It will mark fileds as disabled + reset",
          label: "Control Button Group 2",
          value: true,
          validations: [Validators.pattern("^[a-zA-Z]+$")],
        },
        {
          controlType: "textbox",
          name: "group2_field1",
          tooltip:
            "Please value to this filed. Field doens't have any restrictions and validations!",
          label: "Group 2 - Field 1",
          value: "",
          placeholder: "add simple value for group2_field1",
          errorMessage: "Field required!",
          dependOn: "_2_group.group2_control",
        },
        {
          controlType: "dropdown",
          name: "group2_field2",
          label: "Group 2 - Field 2",
          options: [
            { key: "solid", value: "Solid" },
            { key: "great", value: "Great" },
            { key: "good", value: "Good" },
            { key: "unproven", value: "Unproven" },
          ],
          errorMessage: "Field required! Please select from the dropdown.",
          dependOn: "_2_group.group2_control",
        },
      ],
    };
  }

  ngOnInit(): void {
    this.form = this.qcs.toFormGroups(this.questionGroups);
  }

  // Adding this because of https://angular.io/errors/NG0100
  ngAfterContentChecked() {
    this.cd.detectChanges();
  }

  onSubmit() {
    this.payLoad = this.form.getRawValue();
  }
}
