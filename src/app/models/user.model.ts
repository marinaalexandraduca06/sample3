import { UserPermissions } from 'app/enums/app.enums';
import * as _ from 'lodash';

export class UserModel {
  public id: number;
  public firstName: string;
  public lastName: string;
  public username: string;
  public password: string;
  public email: string;
  public phone: string;
  public permissions: string[];

  public UserPermissions: typeof UserPermissions = UserPermissions;

  constructor(fields: {
    id: number,
    firstName: string,
    lastName: string,
    username: string,
    password: string,
    email: string,
    phone: string,
    permissions: string[]
  }) {
    if (fields) {
      this.id = fields.id;
      this.firstName = fields.firstName;
      this.lastName = fields.lastName;
      this.username = fields.username;
      this.password = fields.password;
      this.email = fields.email;
      this.phone = fields.phone;
      this.permissions = fields.permissions.slice();
    }
  }

  public get unassignedPermissions(): string[] {
    return _.difference(Object.keys(this.UserPermissions), this.permissions);
  }
}
