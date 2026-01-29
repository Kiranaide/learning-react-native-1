import { KeyboardAwareLayout } from "@/components/layout/KeyboardAwareLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Text } from "@/components/ui/text";
import { Link } from "expo-router";
import { View } from "react-native";

export default function RegisterPage() {
  return (
    <KeyboardAwareLayout>
      <View className="grid gap-4 w-full">
        <View className="grid gap-2 w-full">
          <Text variant="h1" className="text-primary w-full text-center">
            Create an account
          </Text>
          <Text variant="default" className="text-gray-500 w-full text-center">
            Let's get you started
          </Text>
        </View>
        <View className="grid gap-1 w-full">
          <Label htmlFor="fullName">Full Name</Label>
          <Input
            id="fullName"
            placeholder="Enter your full name"
            autoCapitalize="none"
            autoCorrect={false}
            textContentType="name"
            returnKeyType="next"
          />
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
            returnKeyType="next"
          />
        </View>
        <View className="grid gap-1 w-full">
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            placeholder="Enter your phone number"
            keyboardType="phone-pad"
            autoCapitalize="none"
            autoCorrect={false}
            textContentType="telephoneNumber"
            returnKeyType="next"
          />
        </View>
        <View className="grid gap-4 w-full">
          <Button variant="default">
            <Text variant="default">Register</Text>
          </Button>
          <Link href="/login" className="text-primary text-center">
            Already have an account? Login
          </Link>
        </View>
      </View>
    </KeyboardAwareLayout>
  );
}
