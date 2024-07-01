import { useContext, useState } from "react"
import { Switch, View } from "react-native"

import st from "../../styles"
import TaskAppButton from "../TaskAppButton"

import type { Task } from "../../model/DATA"
import type { Action } from "../../model/tasksReducer"
import { TasksDispatchContext } from "../../model/TasksContext"
import TaskLabel from "./TaskLabel"

type TaskItemProps = {
    task: Task
}
export default function TaskItem({ task }: TaskItemProps) {
    const [ isEditing, setIsEditing ] = useState(false)
    const dispatch = useContext(TasksDispatchContext) as React.Dispatch<Action>

    function handleOnChangeText(value: string) {
        dispatch({
            type: 'changed',
            task: {
                ...task,
                text: value
            }
        })
    }
    function handleValueChange(value: boolean) {
        dispatch({
            type: 'changed',
            task: {
                ...task,
                done: value
            }
        })
    }
    function handleDelete() {
        dispatch({
            type: 'deleted',
            id: task.id
        })
    }
    return (
        <View style= { st.taskItemContainer }>
            <Switch 
                value= { task.done }
                onValueChange={ handleValueChange }
                style= { st.taskSwitch }
            />

            <TaskLabel 
                text= { task.text }
                isEditing= { isEditing }
                onChangeText= { handleOnChangeText }
            />
            
            <TaskAppButton 
                title= { isEditing ? "Save" : "Edit" }
                onPress={ () => setIsEditing(!isEditing) }
            />

            <TaskAppButton
                title="Delete"
                onPress={ handleDelete }
            />
        </View>
    )
}