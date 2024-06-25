import { View, StyleSheet, ActivityIndicator, Button, Alert, FlatList, Text, Image } from "react-native";

export default function CoreComponents() {
    return (
        <>
            <View style={styles.container}>
                <FlatList
                    data={[{title: 'Title-1'}, {title: 'Title-2'}, {title: 'Title-3'}, {title: 'Title-4'}, {title: 'Title-5'}]}
                    renderItem={({item}) => { return( <Text style={{marginBottom: 20}}>{ item.title }</Text> )}}
                    style= {{maxHeight: 90, backgroundColor: 'white', width: '100%', paddingHorizontal: 10}}
                />
            </View>

            <View style={styles.container}>
                <ActivityIndicator size="large" color={"#999999"}/>
            </View>

            <View style={styles.container}>
                <Button 
                    title="Core Button"
                    onPress={ () => { Alert.alert('U click me')} }
                />
            </View>

            <View style={styles.container}>
                <Image 
                    style={{height: '100%', width: '100%'}}
                    source={{uri: 'https://www.w3schools.com/howto/img_5terre.jpg'}}
                />
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
