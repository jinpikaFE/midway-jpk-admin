import { Rule, RuleType } from '@midwayjs/decorator';
import { CreateApiPropertyDoc } from '@midwayjs/swagger';

export class LoginDTO {
  @CreateApiPropertyDoc('登录参数')
  @Rule(RuleType.string().required())
  userName: string;

  @CreateApiPropertyDoc('登录参数')
  @Rule(RuleType.string().required())
  password: string;
}
