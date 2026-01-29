export interface RegisterPayload {
  email: string;
  password: string;
  fullName: string;
  phone: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}
