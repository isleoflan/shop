import { AbstractShopApiService } from '@/api/abstract-shop-api.service';
import { Payload } from '@/interfaces/payload';
import { CateringPayload } from '@/interfaces/payload/catering-payload';
import { MerchandiseItemPayload } from '@/interfaces/payload/merchandise-item-payload';
import { Injectable } from '@angular/core';
import * as faker from 'faker';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockShopApiService implements AbstractShopApiService {
  getCatering(): Observable<Payload<CateringPayload | null>> {
    return of({ data: null });
  }

  getTopUp(): Observable<Payload<null>> {
    return of({ data: null });
  }

  getMerchandise(): Observable<Payload<MerchandiseItemPayload[]>> {
    const data: MerchandiseItemPayload[] = Array(8)
      .fill({})
      .map(() => {
        return {
          id: faker.datatype.uuid(),
          images: [
            faker.image.imageUrl(400, 400, 'fashion', true)
          ],
          title: faker.commerce.productName(),
          description: faker.commerce.productDescription(),
          price: 100
        } as MerchandiseItemPayload;
      });

    return of({ data } as Payload<MerchandiseItemPayload[]>);
  }
}
