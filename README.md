# Build Dynamic Angular Form with single/multiple groups from JSON / REST API
## Added custom error messages(no Christmas tree erroring), custom validators and more...

Angular origin source https://angular.io/guide/dynamic-form, but better implementation here ;)

### Creating Dynamic Form with two groups from JSON:
```
{
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
}
```

### How it looks:
<img width="1073" alt="image" src="https://user-images.githubusercontent.com/9692941/163948388-efedc8bf-42ce-4a8e-88c7-c71e106b05c9.png">

### Ease way to add styling :) and make Form Group/s with Wizzard or Stepper style, like (docs: https://v3.clarity.design/stepper):
<img width="887" alt="image" src="https://user-images.githubusercontent.com/9692941/163948688-9efb5406-b6ec-4e96-9323-213770ba2432.png">


### Run the project:
yarn install
ng serve
