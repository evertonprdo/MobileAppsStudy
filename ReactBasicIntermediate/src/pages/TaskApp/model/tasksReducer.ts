import type { Tasks, Task } from "./DATA";

export type AddedAction = {
    type: 'added'
    id: number
    text: string
}
export type ChangedAction = {
    type: 'changed'
    task: Task
}

export type DeletedAction = {
    type: 'deleted'
    id: number
}
export type Action = AddedAction | ChangedAction | DeletedAction

export function tasksReducer(tasks: Tasks, action: Action): Tasks {
    switch (action.type) {
        case "added": {
            return addedTask(tasks, action)
        }
        case "changed": {
            return changedTask(tasks, action)
        }
        case "deleted": {
            return deletedTask(tasks, action)
        }
        default: {
            throw Error(`Unknown action: ${action}`)
        }
    }
}

function addedTask(tasks: Tasks, action: AddedAction) {
    return [...tasks, {
        id: action.id,
        text: action.text,
        done: false
    }]
}

function changedTask(tasks: Tasks, action: ChangedAction) {
    return tasks.map(task => {
        if(task.id === action.task.id) {
            return action.task
        } else {
            return task
        }
    })
}

function deletedTask(tasks: Tasks, action: DeletedAction) {
    return tasks.filter(task => task.id !== action.id)
}