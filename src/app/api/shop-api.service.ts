import { AbstractShopApiService } from '@/api/abstract-shop-api.service';
import { PurchaseDto } from '@/interfaces/dto/purchase-dto';
import { Payload } from '@/interfaces/payload';
import { CateringPayload } from '@/interfaces/payload/catering-payload';
import { MerchandiseItemPayload } from '@/interfaces/payload/merchandise-item-payload';
import { PostOrderPayload } from '@/interfaces/payload/post-order-payload';
import { TicketItemPayload } from '@/interfaces/payload/ticket-item-payload';
import { TopUpPayload } from '@/interfaces/payload/top-up-payload';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, first } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopApiService implements AbstractShopApiService {

  constructor(
    private http: HttpClient
  ) {
  }

  getCatering(): Observable<Payload<CateringPayload>> {
    return this.http.get<Payload<CateringPayload>>('/products/food').pipe(first());
  }

  getMerchandise(): Observable<Payload<MerchandiseItemPayload[]>> {
    return this.http.get<Payload<MerchandiseItemPayload[]>>('/products/merchandise').pipe(first());
  }

  getTicket(): Observable<Payload<TicketItemPayload[]>> {
    return this.http.get<Payload<TicketItemPayload[]>>('/products/tickets').pipe(first());
  }

  getTopUpId(): Observable<Payload<TopUpPayload>> {
    return this.http.get<Payload<TopUpPayload>>('/products/topup').pipe(first());
  }

  postOrder(purchaseDto: PurchaseDto): Observable<Payload<PostOrderPayload | null>> {
    return this.http.post<Payload<PostOrderPayload>>('/order/checkout', purchaseDto).pipe(first());
  }

}
