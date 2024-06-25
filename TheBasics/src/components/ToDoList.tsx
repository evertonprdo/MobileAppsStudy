import { useState } from "react"
import { Button, FlatList, StyleSheet, Switch, Text, TextInput, View } from "react-native"

let nextId = 3
type TodoProps = {
    id: number
    title: string
    done: boolean
}
const initialToDos: TodoProps[] = [
    { id: 0, title: 'Buy milk', done: true },
    { id: 1, title: 'Eat Tacos', done: false },
    { id: 2, title: 'Brew tea', done: false },
];

export default function ToDoApp() {
    const [ todos, setTodos ] = useState<Array<TodoProps>>(initialToDos);

    function handleAddToDo(title: string) {
        setTodos([...todos, { id: nextId++, title: title, done: false }])
    }
    function handleChangeTodo(nextTodo:TodoProps): void {
        setTodos(todos.map(todo => {
            if(todo.id === nextTodo.id) {                
                return nextTodo;
            } else {
                return todo
            }
        }))
    }
    function handleDeleteTodo(todoId: number): void {
        setTodos(
            todos.filter(todo => todo.id !== todoId)
        )
    }

    return (
        <View style= {style.mainContainer}>
            <AddToDo
                onAddToDo={ handleAddToDo }
            />
            <TaskList 
                todos={todos}
                onChangeTodo={ handleChangeTodo }
                onDeleteTodo={ handleDeleteTodo }
            />
        </View>
    )
}

type addToDoProps = {
    onAddToDo: (title: string) => void
}
function AddToDo({ onAddToDo }: addToDoProps) {
    const [title, setTitle] = useState('');

    return (
        <View style= {style.addContainer}>
            <TextInput 
                placeholder="Add ToDo"
                value= {title}
                onChangeText={ setTitle }
                style= {style.TextInput}
            />
            <Button
                title="Add"
                onPress={() => {
                    onAddToDo(title);
                    setTitle('');
                }}
            />
        </View>
    )
}

type TaskListProps = {
    todos: TodoProps[],
    onChangeTodo: (nextTodo: TodoProps) => void
    onDeleteTodo: (todoId: number) => void

}
function TaskList({ todos, onChangeTodo, onDeleteTodo }: TaskListProps) {
    return (
        <View style={style.listTaskContainer}>
            <FlatList 
                data= {todos}
                keyExtractor={(item) => String(item.id)}
                renderItem= {({item}) => (
                    <Task 
                        todo={item}
                        onChangeTodo={ onChangeTodo }
                        onDeleteTodo={ onDeleteTodo }
                    />
                )}
            />
        </View>
    )
}

function Task({ todo, onChangeTodo, onDeleteTodo }: Omit<TaskListProps, 'todos'> & {todo: TodoProps}) {
    const [isEditing, setIsEditing] = useState(false);

    let todoContent;
    if(isEditing) {
        todoContent = (
            <>
                <TextInput
                    value= {todo.title}
                    onChangeText= { text => { onChangeTodo({
                        ...todo,
                        title: text
                    })}}
                    style= {style.TextInput}
                />
                <Button title="Save" onPress={() => setIsEditing(false)} />
            </>
        )
    } else {
        todoContent = (
            <>
                <View style= {[style.TextInput, {backgroundColor: 'transparent'}]}>
                    <Text>{todo.title}</Text>
                </View>
                <Button title="Edit" onPress={() => setIsEditing(true)} />
            </>
        )
    }

    return (
        <View style= {style.addContainer}>
            <Switch
                value= { todo.done }
                onValueChange={ value => { onChangeTodo({
                    ...todo,
                    done: value
                })}}
            />
            { todoContent }
            <Button title="Delete" onPress={() => onDeleteTodo(todo.id)} />
        </View>
    )
}

const style = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
        padding: 10
    },
    TextInput: {
        flex: 1,
        justifyContent: 'center',

        backgroundColor: 'white',
        paddingHorizontal: 10, 

        height: '73%',
        borderRadius: 5,
    },
    addContainer: {
        flexDirection: 'row',
        alignItems: 'center',

        height: 50,
        width: '100%',
        gap: 10,
    },
    listTaskContainer: {
        flex: 1,
        width: '100%',
        gap: 12
    },
    taskContainer: {
        flex: 1
    },
    btnAll: {
        flex: 1,
    }
})
