export enum UserRole {
  admin = 'admin',
  editor = 'editor',
  guest = 'guest',
}

type UserTypeDescr = Record<UserRole, string>;
const RoleDescription: UserTypeDescr = {
  admin: 'Admin User',
  editor: 'Editor User',
  guest: 'Guest User',
};
