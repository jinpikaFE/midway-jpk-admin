import { prop } from '@typegoose/typegoose';

export class Role {
  @prop({
    required: true,
    unique: true,
  })
  public name: string;

  @prop({
    type: Date,
    default: Date.now,
  })
  public registerTime?: string;
}
