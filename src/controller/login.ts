import {
  ALL,
  Body,
  Controller,
  Inject,
  Post,
  Provide,
  Validate,
} from '@midwayjs/decorator';
import { CreateApiDoc } from '@midwayjs/swagger';
import { Context } from '@midwayjs/web';
import { IRuleRes } from '../interface';
import { LoginService } from '../service/login';
import { ILoginOptions } from '../types/login';

@Provide()
@Controller('/api/login', { tagName: '登录', description: '登录相关api' })
export class LoginController {
  @Inject()
  ctx: Context;

  @Inject()
  loginService: LoginService;

  @(CreateApiDoc()
    .summary('登录')
    // .param('登录参数', {
    //   required: true,
    //   example: {
    //     userName: 'admin',
    //     password: 'admin',
    //   },
    // })
    .respond(200, 'success', 'ss', {
      example: 'hello world',
    })
    .respond(500, 'throw error')
    .build())
  @Post('/')
  @Validate()
  async postLogin(@Body(ALL) loginOpt: ILoginOptions): Promise<IRuleRes<any>> {
    const { userName, password } = loginOpt;
    const login = await this.loginService.postLogin({ userName, password });
    return { code: 0, success: true, message: 'OK', data: login };
  }
}
