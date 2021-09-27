import { Controller, Get, Inject, Provide } from '@midwayjs/decorator';
import { Context } from '@midwayjs/web';
import { IRuleRes } from '../interface';
import { UserService } from '../service/user';

@Provide()
@Controller('/api/user')
export class UserController {
  @Inject()
  ctx: Context;

  @Inject()
  userService: UserService;

  @Get('/')
  async getUser(): Promise<IRuleRes<any>> {
    const userData = await this.userService.getData();
    if (userData?.length > 0) {
      return {
        code: 0,
        success: true,
        message: '查询用户列表成功',
        data: userData,
      };
    }
    return {
      code: -1,
      success: false,
      message: '查询用户失败',
      data: userData,
    };
  }
}
