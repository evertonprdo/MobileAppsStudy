import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import st from "./styles";
import AddTaskBar from "./components/AddTaskBar";
import TaskList from "./components/TaskList";

import TasksProvider from "./model/TasksContext";

export default function TaskApp() {
    return (
        <SafeAreaView style= {{flex: 1, backgroundColor: '#e3e3e3'}}>
            <TasksProvider>
                <View style= { st.mainContainer }>
                    <Text style= {st.appTitle}>TaskApp</Text>

                    <AddTaskBar/>
                    
                    <TaskList/>
                </View>
            </TasksProvider>
        </SafeAreaView>
    )
}