import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  contactForm: FormGroup ;

  private scrollToTop(): void {
    // Use window.scrollTo to scroll the entire window to the top
    window.scrollTo(0, 0);
  }
ngOnInit(): void
  {
    this.scrollToTop();

  }
  constructor(private fb: FormBuilder) {
    this.createContactForm();
  }

  createContactForm() {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNo: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      // Handle form submission logic here
      console.log('Form submitted:', this.contactForm.value);
    }
  }

}

