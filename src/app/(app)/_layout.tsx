import { Pressable } from "react-native";
import { router, Stack } from "expo-router";
import { Icon } from "@/components/ui/icon";
import { ArrowLeft } from "lucide-react-native";
import { Text } from "@/components/ui/text";

export default function LoginLayout() {
  return (
    <Stack
      screenOptions={{
        headerLeft: () => (
          <Pressable onPress={() => router.back()}>
            <Icon as={ArrowLeft} className="size-6 text-foreground" />
          </Pressable>
        ),
        title: "",
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: "transparent",
        },
        headerRight: () => <Text variant="default">Help</Text>,
      }}
    ></Stack>
  );
}
