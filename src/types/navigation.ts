// src/types/navigation.ts
import { NavigatorScreenParams } from "@react-navigation/native";

export type RootStackParamList = {
  "(tabs)": NavigatorScreenParams<TabParamList>;
  // Add other routes here
};

export type TabParamList = {
  index: undefined;
  // Add other tabs here
};

// Extend global types for navigation
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
