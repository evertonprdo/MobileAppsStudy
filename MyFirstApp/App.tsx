import React from "react";
import { Text, View, Image, ScrollView, TextInput } from "react-native";

import Cat from "./components/Cat";
import PizzaTranslator from "./components/PizzaTranslator";
import FlatListBasic from "./components/FlatListBasic";
import SectionListBasic from "./components/SectionList";

const MyFirstApp = () => {
    return (
        <View style={{marginTop: 45}}>
            <Cat name="Tommy"/>
            <Cat name="Kitty"/>
            <PizzaTranslator />
            <View style= {{height: 400}}>
                <SectionListBasic/>
            </View>
        </View>
    )
}

export default MyFirstApp;