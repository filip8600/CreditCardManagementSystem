import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  ValidationErrors,
} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {
  CreditCardService,
  CreditCard,
} from 'src/app/Services/credit-card.service';

@Component({
  standalone: true,
  selector: 'app-credit-card-add',
  templateUrl: './credit-card-add.component.html',
  styleUrls: ['./credit-card-add.component.scss'],
  imports: [ReactiveFormsModule, CommonModule],
})
export class CreditCardAddComponent implements OnInit {
  profileForm = this.formbuilder.group({
    card_number: [
      0,
      [
        Validators.required,
        Validators.min(1000000),
        Validators.max(1000000000000000),
      ],
    ],
    cardholder_name: ['', [Validators.required]],
    csc_code: [
      0,
      [Validators.required, Validators.max(999), Validators.min(100)],
    ],
    expiration_date_month: [
      0,
      [Validators.required, Validators.min(1), Validators.max(12)],
    ],
    expiration_date_year: [0, [Validators.required]],
    issuer: [''],
  });

  constructor(
    private formbuilder: FormBuilder,
    private creditCardService: CreditCardService,
    private router: Router
  ) {}

  onSubmit() {
    if (this.profileForm.valid.valueOf() == true) {
      console.log(this.profileForm.value);
      var cardInfo = this.profileForm.value;
      this.creditCardService.postCard(cardInfo as CreditCard).subscribe();
      this.router.navigateByUrl('/');
    }
  }
  get card_number(): FormControl {
    return this.profileForm.get('card_number') as FormControl;
  }
  get cardholder_name(): FormControl {
    return this.profileForm.get('cardholder_name') as FormControl;
  }
  get csc_code(): FormControl {
    return this.profileForm.get('csc_code') as FormControl;
  }
  get expiration_date_month(): FormControl {
    return this.profileForm.get('expiration_date_month') as FormControl;
  }
  get expiration_date_year(): FormControl {
    return this.profileForm.get('expiration_date_year') as FormControl;
  }

  ngOnInit(): void {}
}
