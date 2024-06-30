import { useReducer } from "react"
import { View } from "react-native"

import style from "./styles"
import initialTasks, { type TaskProps } from "./DATA"

import AddToDo from "./components/AddTask"
import TaskList from "./components/Task"
import taskReducer from "./model"

let nextId = 3

export default function ToDoApp() {
    const [tasks, dispatch] = useReducer(
        taskReducer,
        initialTasks
    )

    function handleAddTask(text: string) {
        dispatch({
            type: 'added',
            id: nextId++,
            text
        })
    }
    function handleChangeTask(task: TaskProps): void {
        dispatch({
            type: 'changed',
            task: task
        });
    }
    function handleDeleteTask(taskId: number): void {
        dispatch({
            type: 'deleted',
            id: taskId
        });
    }

    return (
        <View style={style.mainContainer}>
            <AddToDo
                onAddToDo={handleAddTask}
            />
            <TaskList
                tasks={tasks}
                onChangeTodo={handleChangeTask}
                onDeleteTodo={handleDeleteTask}
            />
        </View>
    )
}
