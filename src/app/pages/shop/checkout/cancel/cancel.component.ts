import { ShopApiService } from '@/api/shop-api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cancel',
  templateUrl: './cancel.component.html',
  styleUrls: ['./cancel.component.scss']
})
export class CancelComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private shopApiService: ShopApiService
  ) {
  }

  ngOnInit(): void {
    this.shopApiService.cancelOrder(this.activatedRoute.snapshot.params['orderId'] as string).subscribe();
  }

}
