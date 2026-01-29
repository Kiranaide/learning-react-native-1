import { LoginPayload, RegisterPayload } from "@/types/auth";
import ky from "ky";

const API_URL = process.env.EXPO_PUBLIC_API_URL;

const authApi = ky.create({
  prefixUrl: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  credentials: "include",
  timeout: 10000,
});

const registerAuth = async (payload: RegisterPayload) => {
  return authApi.post("auth/register", { json: payload }).json();
};

const loginAuth = async (payload: LoginPayload) => {
  return authApi
    .post("auth/login", { json: payload })
    .json<{ token: string }>();
};

export { registerAuth, loginAuth };
