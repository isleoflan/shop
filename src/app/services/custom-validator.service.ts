import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomValidatorService {

  /*
  get phoneNumber(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control.valid && typeof control.value === 'string') {
        const phoneValue = control.value;

        try {
          const phoneNumber = parsePhoneNumber(phoneValue.toString(), 'CH');
          if (phoneNumber.isValid()) {
            return null;
          }
        } catch (e) {
          return { wrongPhoneNumberFormat: true } as ValidationErrors;
        }
      }
      return null;
    };
  }
   */
}
