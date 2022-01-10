import { AbstractShopApiService } from '@/api/abstract-shop-api.service';
import { Payload } from '@/interfaces/payload';
import { CateringPayload } from '@/interfaces/payload/catering-payload';
import { MerchandiseItemPayload } from '@/interfaces/payload/merchandise-item-payload';
import { PostOrderPayload } from '@/interfaces/payload/post-order-payload';
import { TicketItemPayload } from '@/interfaces/payload/ticket-item-payload';
import { TopUpPayload } from '@/interfaces/payload/top-up-payload';
import { Injectable } from '@angular/core';
import * as faker from 'faker';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockShopApiService implements AbstractShopApiService {
  getTicket(): Observable<Payload<TicketItemPayload[]>> {
    const data: TicketItemPayload[] = Array(1).fill({}).map(() => ({
      id: faker.datatype.uuid(),
      title: 'Isle of LAN - "Honored"',
      dateFrom: new Date('2022-04-08 17:00'),
      dateTo: new Date('2022-04-10 13:00'),
      location: 'Auholzsaal Sulgen',
      price: 5000
    }));

    return of({ data });
  }

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

  getTopUpId(): Observable<Payload<TopUpPayload>> {
    const data: TopUpPayload = {
      topUpId: faker.datatype.uuid()
    };
    return of({ data });
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
          price: 2500,
          variants: [
            {
              id: faker.datatype.uuid(),
              title: 'Size',
              options: [
                {
                  id: faker.datatype.uuid(),
                  title: 'XS'
                },
                {
                  id: faker.datatype.uuid(),
                  title: 'S'
                },
                {
                  id: faker.datatype.uuid(),
                  title: 'M'
                },
                {
                  id: faker.datatype.uuid(),
                  title: 'L'
                },
                {
                  id: faker.datatype.uuid(),
                  title: 'XL'
                }
              ]
            }
          ]
        } as MerchandiseItemPayload;
      });

    return of({ data } as Payload<MerchandiseItemPayload[]>);
  }

  public postOrder(): Observable<Payload<PostOrderPayload | null>> {
    return of({ data: null });
  }
}
