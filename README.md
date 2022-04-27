# Build Dynamic Angular Reactive Form with single or multiple groups from JSON / REST API.
### Building Multiple groups is something handy when it comes to Form implementation inside Stepper or Wizzard design/pattern or just buld single Form Group for standard forms.
{{ "Angular origin source https://angular.io/guide/dynamic-form, but better implementation here ;)" }}
* Build Dynamic Angular Reactive Form with single Form Group
* Build Dynamic Angular Reactive Form with multiple Form Groups.
* Add dependent fields - easy enable/disable Form Fields (make FormGroup valid or invalid) by other field status.
* Custom error message for specific field and error handling - no Christmas tree :)
* Add custom validators.
* Add labels - tooltips, helpers, etc.


### Fields interface
```
{
  controlType: "textbox" | "checkbox" | "dropdown" | "radiobox";
  name: string;
  label: string;
  value?: T | undefined;
  required?: boolean;
  type?: string;
  options?: { key: string; value: string }[];
  validations?: any[];
  placeholder?: string;
  tooltip?: string;
  errorMessage?: string;
  dependOn?: string | string[];
}
```

### Creating Dynamic Form with two groups from JSON:

```
{
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
}
```

### How it looks:

<img width="1073" alt="image" src="https://user-images.githubusercontent.com/9692941/163948388-efedc8bf-42ce-4a8e-88c7-c71e106b05c9.png">

### Ease way to add styling :) and make Form Group/s with Wizzard or Stepper style, like (docs: https://v3.clarity.design/stepper):

<img width="887" alt="image" src="https://user-images.githubusercontent.com/9692941/163948688-9efb5406-b6ec-4e96-9323-213770ba2432.png">

### Run the project:

yarn install
ng serve
