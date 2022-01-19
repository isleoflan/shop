import { PurchaseDto } from '@/interfaces/dto/purchase-dto';
import { Payload } from '@/interfaces/payload';
import { CateringPayload } from '@/interfaces/payload/catering-payload';
import { MerchandiseItemPayload } from '@/interfaces/payload/merchandise-item-payload';
import { PostOrderPayload } from '@/interfaces/payload/post-order-payload';
import { TicketItemPayload } from '@/interfaces/payload/ticket-item-payload';
import { TopUpPayload } from '@/interfaces/payload/top-up-payload';
import { VoucherPayload } from '@/interfaces/payload/voucher-payload';
import { Observable } from 'rxjs';

export abstract class AbstractShopApiService {

  public abstract getTicket(): Observable<Payload<TicketItemPayload[]>>;

  public abstract getCatering(): Observable<Payload<CateringPayload>>;

  public abstract getTopUpId(): Observable<Payload<TopUpPayload>>

  public abstract getMerchandise(): Observable<Payload<MerchandiseItemPayload[]>>;

  public abstract postOrder(purchaseDto: PurchaseDto): Observable<Payload<PostOrderPayload | null>>;

  public abstract getVoucher(voucher: string): Observable<Payload<VoucherPayload | null>>;

}
