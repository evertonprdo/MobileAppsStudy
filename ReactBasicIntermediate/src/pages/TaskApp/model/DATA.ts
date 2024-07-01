export type Task = {
    id: number
    text: string
    done: boolean
}
export type Tasks = Task[]

export const initialTasks: Tasks = [
    { id: 0, text: "Philosopher's Path", done: true },
    { id: 1, text: 'Visit the temple', done: false },
    { id: 2, text: 'Drink matcha', done: false }
];

export default initialTasks