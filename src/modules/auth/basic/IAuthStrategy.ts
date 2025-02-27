import { UserInfo } from '../dtos/UserInfo';

export interface IAuthStrategy {
  validate: (...any: any) => Promise<UserInfo>;
}
