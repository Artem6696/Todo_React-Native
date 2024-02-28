import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import Navigation from "./Navigation";
import TodosScreen from "./src/screens/TodosScreen";

export default function App() {
  return (
    <SafeAreaProvider>
      <TodosScreen  />
    </SafeAreaProvider>
  );
}
