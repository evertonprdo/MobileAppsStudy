import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import type { PropsWithChildren } from "react";

export default function RowGapAndColumnGap() {
    const [rowGap, setRowGap] = useState(10);
    const [columnGap, setColumnGap] = useState(10);

return (
    <PreviewLayout
        columnGap= { columnGap }
        handleColumnGapChange= { setColumnGap }
        rowGap= { rowGap }
        handleRowGapChange= { setRowGap }
    >
        <View style= {[ styles.box, styles.box1 ]}></View>
        <View style= {[ styles.box, styles.box2 ]}></View>
        <View style= {[ styles.box, styles.box3 ]}></View>
        <View style= {[ styles.box, styles.box4 ]}></View>
        <View style= {[ styles.box, styles.box5 ]}></View>
    </PreviewLayout>
)}

type PreviewLayoutProps = PropsWithChildren<{
    columnGap: number;
    handleColumnGapChange: (gap: number) => void;
    rowGap: number;
    handleRowGapChange: (gap: number) => void;
}>

const PreviewLayout = ({ children, columnGap, handleColumnGapChange, rowGap, handleRowGapChange } : PreviewLayoutProps) => (
    <View style={[ styles.previewContainer, {marginTop: 30} ]}>
        <View style={styles.inputContainer}>

            <View style={styles.itemsCenter}>
                <Text style= {{ color: 'white' }}>{ "Row Gap" }</Text>
                <TextInput 
                    style={styles.input} 
                    value={String(rowGap)} 
                    onChangeText={ (v) => handleRowGapChange(Number(v)) } 
                />
            </View>

            <View style={styles.itemsCenter}>
                <Text style= {{ color: 'white' }}>{ "Column Gap" }</Text>
                <TextInput 
                    style={styles.input} 
                    value={String(columnGap)} 
                    onChangeText={ (v) => handleColumnGapChange(Number(v)) } 
                />
            </View>
        </View>

        <View style={[ styles.container, {rowGap, columnGap} ]}>{ children }</View>
    </View>
)

const styles = StyleSheet.create({
    itemsCenter: { alignItems: 'center' },
    inputContainer: {
        gap: 4,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    previewContainer: { padding: 10, flex: 1 },
    input: {
        color: 'white',
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        paddingVertical: 3,
        width: 50,
        textAlign: 'center',
    },
    container: {
        flex: 1,
        marginTop: 8,
        backgroundColor: 'aliceblue',
        maxHeight: 400,
        flexWrap: 'wrap',
        alignContent: 'flex-start',
    },
    box: {
        width: 50,
        height: 80,
    },
    box1: {
        backgroundColor: 'orangered',
    },
    box2: {
        backgroundColor: 'orange',
    },
    box3: {
        backgroundColor: 'mediumseagreen',
    },
    box4: {
        backgroundColor: 'deepskyblue',
    },
    box5: {
        backgroundColor: 'mediumturquoise',
    },
});