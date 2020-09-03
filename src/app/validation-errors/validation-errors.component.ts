import { Component, OnInit, Input } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-validation-errors",
  templateUrl: "./validation-errors.component.html",
  styleUrls: ["./validation-errors.component.scss"],
})
export class ValidationErrorsComponent {
  @Input()
  control: FormControl;
}
