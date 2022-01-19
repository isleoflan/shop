import { CartFacadeService } from '@/store/cart/cart-facade.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { catchError, of, EMPTY } from 'rxjs';

@Component({
  selector: 'app-voucher',
  templateUrl: './voucher.component.html',
  styleUrls: ['./voucher.component.scss']
})
export class VoucherComponent implements OnInit {
  voucherForm: FormGroup = new FormGroup({});

  constructor(
    private cartFacadeService: CartFacadeService
  ) {
  }

  ngOnInit(): void {
    this.voucherForm = new FormGroup({
      voucher: new FormControl('', [Validators.pattern(/[A-Z0-9]{8}/)])
    });
  }

  onSubmit() {
    const voucher = this.voucherForm.get('voucher');
    if (voucher?.value) {
      this.cartFacadeService.setVoucher(voucher?.value as string).pipe(
        catchError(() => {
          this.voucherForm.get('voucher')?.setErrors({ voucher: 'not Valid' });
          return of(EMPTY);
        })
      ).subscribe();
    }
  }

}
