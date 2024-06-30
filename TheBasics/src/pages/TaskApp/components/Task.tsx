import { Button, FlatList, Switch, Text, TextInput, View } from "react-native";
import style from "../styles";
import { useState } from "react";
import type { TaskProps } from "../DATA";

type TaskListProps = {
    tasks: TaskProps[],
    onChangeTodo: (nextTodo: TaskProps) => void
    onDeleteTodo: (todoId: number) => void
}
export default function TaskList({ tasks, onChangeTodo, onDeleteTodo }: TaskListProps) {
    return (
        <View style={style.listTaskContainer}>
            <FlatList 
                data= {tasks}
                keyExtractor={(item) => String(item.id)}
                renderItem= {({item}) => (
                    <Task
                        task={item}
                        onChangeTodo={ onChangeTodo }
                        onDeleteTodo={ onDeleteTodo }
                    />
                )}
            />
        </View>
    )
}

function Task({ task, onChangeTodo, onDeleteTodo }: Omit<TaskListProps, 'tasks'> & {task: TaskProps}) {
    const [isEditing, setIsEditing] = useState(false);

    let todoContent;
    if(isEditing) {
        todoContent = (
            <>
                <TextInput
                    value= {task.text}
                    onChangeText= { text => { onChangeTodo({
                        ...task,
                        text: text
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
                    <Text>{task.text}</Text>
                </View>
                <Button title="Edit" onPress={() => setIsEditing(true)} />
            </>
        )
    }

    return (
        <View style= {style.addContainer}>
            <Switch
                value= { task.done }
                onValueChange={ value => { onChangeTodo({
                    ...task,
                    done: value
                })}}
            />
            { todoContent }
            <Button title="Delete" onPress={() => onDeleteTodo(task.id)} />
        </View>
    )
}