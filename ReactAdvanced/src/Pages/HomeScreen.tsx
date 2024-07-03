import { Text, Linking, View } from "react-native";

export default function HomeScreen() {
    return (
        <View style= {{flex: 1, alignItems: 'center', gap: 12, paddingVertical: 73, paddingHorizontal:12}}>
            <Text style= {{color: 'white', fontSize: 25, fontWeight: 'bold', textAlign: 'center'}}>App to visualize React Docs Advanced exercises</Text>
            <Text onPress={() => Linking.openURL('https://react.dev/learn/escape-hatches')} style= {{color: '#00ffff', fontSize: 20, textDecorationLine: 'underline', textAlign: 'center'}}>
                https://react.dev/learn/escape-hatches
            </Text>
        </View>
    )
}