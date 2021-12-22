import { AbstractShopApiService } from "@/api/abstract-shop-api.service";
import { Payload } from "@/interfaces/payload";
import { MerchandiseItemPayload } from "@/interfaces/payload/merchandise-item-payload";
import { Injectable } from '@angular/core';
import * as faker from 'faker';
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MockShopApiService implements AbstractShopApiService {
  getCatering(): Observable<Payload<any>> {
    return of({data: undefined});
  }

  getMerchandise(): Observable<Payload<MerchandiseItemPayload[]>> {

    const data: MerchandiseItemPayload[] = Array(8).fill({}).map(() => {
      return {
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(1000, 10000, 0, '')),
        image: faker.image.imageUrl(400, 400, 'fashion', true)
      } as MerchandiseItemPayload;
    });

    return of({data} as Payload<MerchandiseItemPayload[]>);
  }

}
