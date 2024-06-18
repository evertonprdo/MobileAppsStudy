import React from "react";
import { View } from "react-native";

export default function FixedDimensionsBasics() {
    return (
        <View style={{height: '100%'}}>
            <View
                style={{
                    height: '15%',
                    backgroundColor: 'powderblue',
                }}
            />
            <View
                style={{
                    width: '67%',
                    height: '35%',
                    backgroundColor: 'skyblue',
                }}
            />
            <View
                style={{
                    width: '33%',
                    height: '50%',
                    backgroundColor: 'steelblue',
                }}
            />
        </View>
    );
}