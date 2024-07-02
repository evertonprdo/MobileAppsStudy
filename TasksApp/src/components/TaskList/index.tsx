import { FlatList } from "react-native"

import TaskItem from "./TaskItem"
import st from "../../styles"

import { useTasks } from "../../model/TasksContext"

export default function TaskList() {
    const tasks = useTasks()
    return (
        <FlatList 
            data= { tasks }
            keyExtractor={({id}) => `TaskItem_${id}`}
            style= { st.taskListContainer }
            renderItem={({item}) => (
                <TaskItem 
                    task={ item }
                />
            )}
        />
    )
}