import { Provide } from '@midwayjs/decorator';
import { ILoginOptions } from '../types/login';

@Provide()
export class LoginService {
  async postLogin(options: ILoginOptions) {
    return {
      username: options?.userName,
      password: options?.password,
    };
  }
}
