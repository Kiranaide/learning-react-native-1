import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Text } from "@/components/ui/text";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 bg-background dark:bg-foreground items-center justify-center px-8">
      {/* Heading */}
      <Text className="text-4xl font-extrabold text-gray-800 dark:text-white mb-3 tracking-tight">
        🚀 Welcome test
      </Text>

      {/* Subheading */}
      <Text className="text-xl dark:text-white text-gray-700 mb-8 text-center leading-relaxed">
        Build beautiful apps with{" "}
        <Text className="text-yellow-500 font-semibold">
          Expo (Router) + Uniwind 🔥
        </Text>
      </Text>

      {/* Instruction text */}
      {/* <Text className="text-base text-gray-600 dark:text-white text-center max-w-sm">
        Start customizing your app by editing{" "}
        <Text className="font-semibold text-gray-800 dark:text-white">
          app/index.tsx
        </Text>
      </Text> */}

      <Accordion type="single" collapsable>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <Text>Item 1</Text>
          </AccordionTrigger>
          <AccordionContent>
            <Text>Item 1 content</Text>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <StatusBar style="dark" />
    </View>
  );
}
