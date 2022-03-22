import { AddressInterface } from './Address';
import { CompanyInterface } from './Company';

export interface UserInterface {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: AddressInterface;
  company: CompanyInterface;
}
