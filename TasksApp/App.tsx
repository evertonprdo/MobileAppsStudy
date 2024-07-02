import { SafeAreaProvider } from "react-native-safe-area-context";
import TaskApp from "./src";

export default function App() {
    return (
        <SafeAreaProvider>
            <TaskApp/>
        </SafeAreaProvider>
    )
}