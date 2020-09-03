import { Component } from "@angular/core";
import { FormGroup, FormBuilder, Validators, FormArray } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  form: FormGroup;

  // 2️⃣ inject the formBuilder
  constructor(private fb: FormBuilder) {
    // 3️⃣ setup the from
    this.form = fb.group({
      username: [null, Validators.required],
      password: [null, [Validators.required, Validators.minLength(5)]],
      email: [null, [Validators.required, Validators.email]],
      age: [
        null,
        [Validators.required, Validators.min(1), Validators.min(100)],
      ],

      address: fb.array([this.addressGroup()]),
    });

    // 4️⃣ create the form elements at the template
  }

  get address(): FormArray {
    return this.form.get("address") as FormArray;
  }

  addressGroup() {
    return this.fb.group({
      name: [null, Validators.required],
      country: [null, Validators.required],
      city: [null, Validators.required],
      town: [null, Validators.required],
    });
  }

  addNewAddress() {
    this.address.push(this.addressGroup());
  }

  removeAddress(index) {
    this.address.removeAt(index);
  }

  save() {
    // fake save method
    console.log(this.form.value);
  }
}
