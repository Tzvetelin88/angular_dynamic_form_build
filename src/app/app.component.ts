import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h2>Build Dynamic Angular Form from JSON object / REST API. <br />
        Build single or multi group Form, custom error messages, custom validators and more...</h2>
      <app-dynamic-form></app-dynamic-form>
    </div>
  `,
})
export class AppComponent {
  constructor() {}
}
