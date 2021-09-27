import { Provide } from '@midwayjs/decorator';
import { getModelForClass } from '@typegoose/typegoose';
import { ManagerUser } from '../entity/user';
import { IUserOptions } from '../interface';

@Provide()
export class UserService {
  async getUser(options: IUserOptions) {
    return {
      uid: options.uid,
      username: 'mockedName',
      phone: '12345678901',
      email: 'xxx.xxx@xxx.coms',
    };
  }

  async getData() {
    const UserModel = getModelForClass(ManagerUser);
    const data = await UserModel.find({ name: 'ss' });
    return data;
  }
}
