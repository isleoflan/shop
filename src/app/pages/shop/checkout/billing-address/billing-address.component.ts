import { Gender } from '@/enums/gender';
import { Component, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-billing-address',
  templateUrl: './billing-address.component.html',
  styleUrls: ['./billing-address.component.scss']
})
export class BillingAddressComponent implements OnInit, OnDestroy {

  @Output() form: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

  MALE = Gender.MALE;
  FEMALE = Gender.FEMALE;
  OTHER = Gender.OTHER;

  billingAddressForm: FormGroup = new FormGroup({
    gender: new FormControl(this.MALE, [Validators.required]),
    forename: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    address: new FormControl('', [Validators.required]),
    zipCode: new FormControl('', [Validators.required, Validators.min(1000), Validators.max(9999)]),
    city: new FormControl('', [Validators.required])
  });

  private destroyed$: Subject<boolean> = new Subject<boolean>();

  ngOnInit(): void {
    this.form.emit(this.billingAddressForm);

    this.billingAddressForm.valueChanges.subscribe(() => {
      this.form.emit(this.billingAddressForm);
    });
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }


}
