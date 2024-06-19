import React from "react";
import { StyleSheet, View, Text, Button, TextInput } from "react-native";
import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack";

type RootStackParamList = {
    Home?: {
        post?: string
    };
    Details: {
        itemId: number,
        otherParam: string
    };
    CreatePost?: {
        post?: string
    } 
};
type ScreenProps<T extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList, T>

function HomeScreen({ navigation, route } : NativeStackScreenProps<RootStackParamList, 'Home'>) {
    React.useEffect( () => {
        if (route.params?.post) {

        }
    }, [route.params?.post])

    return (
        <View style= {styles.defaultAlign}>
            <Button
                title= {!(route.params?.post) ? 'Create post' : 'Edit post'} 
                onPress= { () => { navigation.navigate('CreatePost', { post: !(route.params?.post) ? ' ' : route.params.post }) }}
            />

            <Text style= {{ margin: 10 }}>{ `Post: ${ !(route.params?.post) ? 'Write your first post!' : route.params.post }` }</Text>
        </View>
    )
}

function CreatePostScreen({ navigation, route }: ScreenProps<'CreatePost'>) {
    const [postText, setPostText] = React.useState(!(route.params) ? undefined : route.params.post)

    return (
        <>
            <TextInput multiline
                placeholder="What's on your mind?"
                style= {{ height: 200, padding: 10, backgroundColor: 'white' }}
                value= { postText }
                onChangeText= { setPostText }
            />

            <Button title="Done" 
                onPress= { () => {navigation.navigate(
                    { 
                        name: 'Home',
                        params: { post: postText },
                        merge: true
                    }
                )}} 
            />
        </>
    )
}

function DetailsScreen({ route, navigation } : ScreenProps<'Details'>) {
    const { itemId, otherParam } = route.params;
    return (
        <View style= { styles.defaultAlign }>
            <Text>Details Screen</Text>
            <Text>itemId: {JSON.stringify(itemId)}</Text>
            <Text>otherParam: {JSON.stringify(otherParam)}</Text>

            <Button 
                title="Go Home" 
                onPress= { () => navigation.navigate('Home') }
            />
            <Button 
                title="Go back" 
                onPress= { () => navigation.goBack() }
            />
            <Button 
                title="Go back to first screen in stack" 
                onPress= { () => navigation.popToTop() }
            />
        </View>
    )
}

const styles = StyleSheet.create(
    {
        mainContainer: {
            flex: 1,
            paddingHorizontal: 20,
            paddingVertical: 50,

            backgroundColor: '#10121c',
        },
        defaultAlign: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        }
    }
)