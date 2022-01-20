import { Gender } from '@/enums/gender';
import { UserFacadeService } from '@/store/user/user-facade.service';
import { Component, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subject, first, filter } from 'rxjs';

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
    city: new FormControl('', [Validators.required]),
    vegetarian: new FormControl(false)
  });

  private destroyed$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private userFacadeService: UserFacadeService
  ) {
  }

  ngOnInit(): void {
    this.userFacadeService.user$.pipe(
      filter((data) => data !== null),
      first()
    ).subscribe((user) => {
      if (user) {
        this.billingAddressForm.setValue({
          gender: user.gender,
          forename: user.forename,
          lastname: user.lastname,
          email: user.email,
          address: user.address,
          zipCode: user.zipCode.toString(),
          city: user.city,
          vegetarian: false
        });
      }
    });

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
