import { QueryClientProvider } from "@tanstack/react-query";
import "../global.css";
import { queryClient } from "@/lib/query-client";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <Stack screenOptions={{ headerShown: false }} />
    </QueryClientProvider>
  );
}
