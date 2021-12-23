import { KeyExchangeDto } from '@/interfaces/dto/key-exchange-dto';
import { LoginRequestDto } from '@/interfaces/dto/login-request-dto';
import { Payload } from '@/interfaces/payload';
import { KeyExchangePayload } from '@/interfaces/payload/key-exchange-payload';
import { LoginRequestPayload } from '@/interfaces/payload/login-request-payload';
import { Observable } from 'rxjs';

export abstract class AbstractAuthApiService {
  public abstract postLoginRequest(loginRequestDto: LoginRequestDto): Observable<Payload<LoginRequestPayload>>;

  public abstract postKeyExchange(keyExchangeDto: KeyExchangeDto): Observable<Payload<KeyExchangePayload>>
}
