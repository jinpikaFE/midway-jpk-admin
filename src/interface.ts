/**
 * @description User-Service parameters
 */
export interface IUserOptions {
  uid: string;
}

export interface IGetUserResponse {
  success: boolean;
  message: string;
  data: IUserOptions;
}

export interface IRuleRes<T> {
  success: boolean;
  message: string;
  code: number;
  data: T;
}
