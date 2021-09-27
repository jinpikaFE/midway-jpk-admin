import { mongoose, prop } from '@typegoose/typegoose';

export class ManagerUser {
  @prop({
    required: true,
    unique: true,
  })
  public email: string;

  @prop({
    required: true,
    unique: true,
  })
  public phone: number;

  @prop({ type: mongoose.Schema.Types.Mixed })
  public avatar: string;

  @prop({
    required: true,
    unique: true,
  })
  public userName: string;

  @prop({
    required: true,
  })
  public password: string;

  @prop({
    required: true,
  })
  public roleName: string;

  @prop({
    type: () => [String],
  })
  public address?: string[];

  @prop()
  public detailAddress?: string;

  @prop()
  public currentAuthority?: string;

  @prop({
    default: 'account',
  })
  public type?: string;

  @prop({
    type: Date,
    default: Date.now,
  })
  public registerTime?: string;
}
