import {
  ALL,
  Body,
  Controller,
  Inject,
  Post,
  Provide,
} from '@midwayjs/decorator';
import { Context } from '@midwayjs/web';
import { IRuleRes } from '../interface';
import { LoginService } from '../service/login';
import { ILoginOptions } from '../types/login';

@Provide()
@Controller('/api/login')
export class LoginController {
  @Inject()
  ctx: Context;

  @Inject()
  loginService: LoginService;

  @Post('/')
  async postLogin(@Body(ALL) loginOpt: ILoginOptions): Promise<IRuleRes<any>> {
    const { userName, password } = loginOpt;
    const login = await this.loginService.postLogin({ userName, password });
    return { code: 0, success: true, message: 'OK', data: login };
  }
}
