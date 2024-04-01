import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
 
 
  multiStepForm!: FormGroup;
  currentStep: number = 1;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.multiStepForm = this.formBuilder.group({
      // Define your form controls and validators
      // Example:
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      // Add more fields for each step
    });
  }

  nextStep() {
    if (this.currentStep < 3) {
      this.currentStep++;
    }
  }

  prevStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  onSubmit() {
    // Handle form submission
    if (this.multiStepForm.valid) {
      console.log('Form submitted successfully!');
      // You can submit the form data to your backend or perform other actions here
    }
  }
}
