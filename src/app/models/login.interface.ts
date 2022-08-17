export interface ILoginResponse {
  token: string;
}

export interface ILoginActivate {
  user_id: string;
  activate_hash: string;
}
