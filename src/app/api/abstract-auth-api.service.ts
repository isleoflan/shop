import { LoginRequestDto } from "@/interfaces/dto/login-request-dto";
import { Payload } from "@/interfaces/payload";
import { LoginRequestPayload } from "@/interfaces/payload/login-request-payload";
import { Observable } from "rxjs";


export abstract class AbstractAuthApiService {

  public abstract postLoginRequest(loginRequestDto: LoginRequestDto): Observable<Payload<LoginRequestPayload>>;
}
