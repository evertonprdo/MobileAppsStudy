import { View } from "react-native";

import st from "./styles";
import AddTaskBar from "./components/AddTaskBar";
import TaskList from "./components/TaskList";

import TasksProvider from "./model/TasksContext";

export default function TaskApp() {
    return (
        <TasksProvider>
                <View style= { st.mainContainer }>
                    <AddTaskBar/>
                    <TaskList/>
                </View>
        </TasksProvider>
    )
}