import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
    constainer: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        fontSize: 30,
        height: 44,

        borderBottomColor: '#ccc',
        borderBottomWidth: 1
    }
})

const FlatListBasic = () => {
    return (
        <View style={styles.constainer}>
            <FlatList
                data={[
                    {key: 'Devin'},
                    {key: 'Dan'},
                    {key: 'Dominic'},
                    {key: 'Jackson'},
                    {key: 'James'},
                    {key: 'Joel'},
                    {key: 'John'},
                    {key: 'Jillian'},
                    {key: 'Jimmy'},
                    {key: 'Julies'},
                    {key: 'Elizabeth'},
                    {key: 'Joely'},
                    {key: 'Joe2ly'},
                    {key: 'Joe3ly'},
                    {key: 'Jo4ely'},
                    {key: 'Alexander'}
                ]}
                renderItem={({item}) => <View style={{padding: 25}}><Text style={styles.item}>{item.key}</Text></View>} 
            />
        </View>
    )
}

export default FlatListBasic