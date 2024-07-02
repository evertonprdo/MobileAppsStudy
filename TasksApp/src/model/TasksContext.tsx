import { createContext, useContext, useReducer } from "react";

import { initialTasks, type Tasks } from "./DATA";
import { tasksReducer, type Action } from "./tasksReducer";

export const TasksContext = createContext< Tasks | null >(null)
export const TasksDispatchContext = createContext< React.Dispatch<Action> | null >(null)

type TasksProviderProps = {
    children: React.ReactNode
}
export default function TasksProvider({ children }: TasksProviderProps) {
    const [ tasks, dispatch ] = useReducer(tasksReducer, initialTasks);

    return (
        <TasksContext.Provider value={ tasks }>
            <TasksDispatchContext.Provider value= { dispatch }>
                { children }
            </TasksDispatchContext.Provider>
        </TasksContext.Provider>
    )
}

export function useTasks() {
    return useContext(TasksContext) as Tasks
}

export function useTasksDispatch()  {
    return useContext(TasksDispatchContext) as React.Dispatch<Action>
}