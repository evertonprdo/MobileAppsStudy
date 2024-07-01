import { FlatList } from "react-native"

import TaskItem from "./TaskItem"
import st from "../../styles"

import { useContext } from "react"
import { TasksContext } from "../../model/TasksContext"

export default function TaskList() {
    const tasks = useContext(TasksContext)
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