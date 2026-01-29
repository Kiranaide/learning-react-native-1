import { registerAuth } from "@/api/auth";
import { RegisterPayload } from "@/types/auth";
import { useMutation } from "@tanstack/react-query";

export const useRegister = () => {
  return useMutation({
    mutationFn: (payload: RegisterPayload) => registerAuth(payload),
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
  });
};
