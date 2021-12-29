import { Payload } from '@/interfaces/payload';
import { CateringPayload } from '@/interfaces/payload/catering-payload';
import { MerchandiseItemPayload } from '@/interfaces/payload/merchandise-item-payload';
import { TicketItemPayload } from '@/interfaces/payload/ticket-item-payload';
import { TopUpPayload } from '@/interfaces/payload/top-up-payload';
import { Observable } from 'rxjs';

export abstract class AbstractShopApiService {

  public abstract getTicket(): Observable<Payload<TicketItemPayload[]>>;

  public abstract getCatering(): Observable<Payload<CateringPayload>>;

  public abstract getTopUpId(): Observable<Payload<TopUpPayload>>

  public abstract getMerchandise(): Observable<Payload<MerchandiseItemPayload[]>>;

}
