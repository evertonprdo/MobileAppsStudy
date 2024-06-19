import { Text, View, StyleSheet, Pressable } from "react-native";
import { Link } from "expo-router";

export default function Index() {
    return (
        <View style={ styles.container }>
            <Link href= { "/teste" } asChild >
                <Pressable style= { styles.buttonContainer }>
                    <Text>{ "Acess MyExpoRouterApp/teste" }</Text>
                </Pressable>
            </Link>

            <Link href= { "/profile" } asChild >
                <Pressable style= { styles.buttonContainer }>
                    <Text>{ "Acess MyExpoRouterApp/profile" }</Text>
                </Pressable>
            </Link>
        </View>
    );
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            gap: 20,

            justifyContent: "center",
            alignItems: "center",
        },
        buttonContainer: {
            backgroundColor: 'orange',
            paddingHorizontal: 33,
            paddingVertical: 12,
            borderRadius: 5
        }
    }
)