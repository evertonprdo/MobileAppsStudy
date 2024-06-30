import { TaskProps } from "./DATA";

type TaskReducerAction = {
    type: 'added' | 'changed' | 'deleted',
    id?: number,
    text?: string,
    task?: TaskProps
}
export default function taskReducer(tasks: TaskProps[], action: TaskReducerAction): TaskProps[] {
    switch (action.type) {
        case 'added': {
            return [...tasks, {
                id: action.id as number,
                text: action.text as string,
                done: false
            }];
        }
        case 'changed': {
            return tasks.map(t => {
                if (t.id === action.task?.id) {
                    return action.task;
                } else {
                    return t;
                }
            });
        }
        case 'deleted': {
            return tasks.filter(t => t.id !== action.id);
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}