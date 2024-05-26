export interface UserId {
  NameId: string;
  NameIdIssuer: string;
}
export interface ResponseWrapper<T> {
  value: T
}

export interface User {
  Id: number;
  IsHiddenInUI: boolean;
  LoginName: string;
  Title: string;
  PrincipalType: number;
  Email: string;
  Expiration: string;
  IsEmailAuthenticationGuestUser: boolean;
  IsShareByEmailGuestUser: boolean;
  IsSiteAdmin: boolean;
  UserId: UserId;
  UserPrincipalName: string;
}