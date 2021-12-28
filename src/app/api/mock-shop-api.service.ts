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
  getCatering(): Observable<Payload<CateringPayload>> {

    const data: CateringPayload = {
      menus: Array(5).fill({}).map(() => {
        return {
          id: faker.datatype.uuid(),
          date: faker.date.between(new Date('2022-04-08'), new Date('2022-04-10')),
          title: faker.commerce.productName(),
          description: faker.commerce.productDescription(),
          price: 500
        };
      }),
      specialDeal: {
        id: faker.datatype.uuid(),
        title: 'Special Deal',
        description: faker.commerce.productDescription(),
        price: 3000
      }
    };

    return of({ data });
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
