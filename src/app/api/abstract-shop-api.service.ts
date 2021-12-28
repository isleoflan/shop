import { Payload } from '@/interfaces/payload';
import { CateringPayload } from '@/interfaces/payload/catering-payload';
import { MerchandiseItemPayload } from '@/interfaces/payload/merchandise-item-payload';
import { TopUpPayload } from '@/interfaces/payload/top-up-payload';
import { Observable } from 'rxjs';

export abstract class AbstractShopApiService {
  public abstract getCatering(): Observable<Payload<CateringPayload>>;

  public abstract getTopUpId(): Observable<Payload<TopUpPayload>>

  public abstract getMerchandise(): Observable<Payload<MerchandiseItemPayload[]>>;

}
