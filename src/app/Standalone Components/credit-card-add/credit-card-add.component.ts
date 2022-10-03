import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-credit-card-add',
  templateUrl: './credit-card-add.component.html',
  styleUrls: ['./credit-card-add.component.scss'],
  imports: [ReactiveFormsModule],
})
export class CreditCardAddComponent implements OnInit {
  profileForm = this.formbuilder.group({
    card_number: [
      '',
      [Validators.required, Validators.minLength(7), Validators.maxLength(16)],
    ],
    cardholder_name: ['', [Validators.required]],
    csc_code: [
      '',
      [Validators.required, Validators.maxLength(3), Validators.minLength(3)],
    ],
    expiration_date_month: ['', [Validators.required]],
    expiration_date_year: ['', [Validators.required]],
    issuer: [''],
  });

  constructor(private formbuilder: FormBuilder) {}

  onSubmit() {
    console.log(this.profileForm.value);
  }
  ngOnInit(): void {}
}
