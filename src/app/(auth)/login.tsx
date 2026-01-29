import { KeyboardAwareLayout } from "@/components/layout/KeyboardAwareLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Text } from "@/components/ui/text";
import { Link } from "expo-router";
import { View } from "react-native";

export default function LoginPage() {
  return (
    <KeyboardAwareLayout>
      <View className="grid gap-4 w-full">
        <View className="grid gap-2 w-full">
          <Text variant="h1" className="text-primary w-full text-center">
            Welcome back
          </Text>
          <Text variant="default" className="text-gray-500 w-full text-center">
            Let's get you back on track
          </Text>
        </View>
        <View className="grid gap-1 w-full">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            placeholder="Enter your email"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            textContentType="emailAddress"
            returnKeyType="next"
          />
        </View>
        <View className="grid gap-1 w-full">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            placeholder="Enter your password"
            secureTextEntry
            autoCapitalize="none"
            textContentType="password"
          />
        </View>
        <View className="grid gap-1 w-full">
          <Link
            href="/forgot-password"
            className="text-primary text-right font-semibold"
          >
            Forgot password?
          </Link>
        </View>
        <View className="grid gap-4 w-full">
          <Button variant="default">
            <Text variant="default">Login</Text>
          </Button>
          <Link href="/register" className="text-primary text-center">
            Don't have an account? Register
          </Link>
        </View>
      </View>
    </KeyboardAwareLayout>
  );
}
