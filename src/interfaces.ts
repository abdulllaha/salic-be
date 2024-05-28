export interface OtherId {
  id: string;
    issuerId: string;
}
export interface ResponseWrapper<T> {
  value: T
}

export interface User {
 id: number;
  name: string;
  email: string;
  title: string;
  otherId: OtherId;
  partName: string;
}