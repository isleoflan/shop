import { LoginRequestDto } from "../interfaces/dto/login-request-dto";
import { Observable } from "rxjs";
import { Payload } from "../interfaces/payload";
import { LoginRequestPayload } from "../interfaces/payload/login-request-payload";


export abstract class AbstractAuthApiService {

  public abstract getLoginRequest(loginRequestDto: LoginRequestDto): Observable<Payload<LoginRequestPayload>>;
}
