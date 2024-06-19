import React, { useState } from "react";
import { Image, View, StyleSheet, Text, TouchableOpacity } from "react-native";

const ImageArray = [
    require('../assets/img/image-1.jpg'),
    require('../assets/img/image-2.jpg'),
    require('../assets/img/image-3.jpg'),
    require('../assets/img/image-4.jpg'),
    require('../assets/img/image-5.jpg'),
];

const ImageArrayUri = [
    {uri: 'https://pareto.io/wp-content/uploads/2024/05/gerador-imagens-ia-header-tess-astronaut-1.jpg'},
    {uri: 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/74464370-9499-4ec3-a0ab-2e60e4b513cd/width=1280,quality=90/00094-186821628.jpeg'},
    {uri: 'https://www.des1gnon.com/wp-content/uploads/2020/03/Pexels-Banco-de-Imagens-gratis-Des1gnON.jpg'},
    {uri: 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/4aad2747-2df3-422a-8258-757c7088ea0c/width=832,quality=90/2024-06-01_17-19-05_1614_inpaint.jpeg'},
    {uri: 'https://img.freepik.com/fotos-premium/um-leao-na-floresta_391229-2206.jpg'},
];

export default function ImageComponents() {
    const [selectedPos, setSelectedPos] = useState(0);

return (
    <View style= {styles.container}>
        <View style= { styles.labelContainer }>
            <Text style= {styles.label}>Image React Native Docs</Text>
        </View>

        <View style= { styles.imageContainer }>
            <Image source= { ImageArrayUri[selectedPos] } style={styles.image} />
        </View>

        <View style= { styles.buttonsContainer }>
            {ImageArrayUri.map((image, index) => (
                <TouchableOpacity
                    key={ index }
                    onPress={ () => { setSelectedPos(index) } }
                    style={[ styles.button, index === selectedPos && styles.selected ]}
                >
                    <Image source= { image } style={styles.thumbnail} />
                    <View style= {styles.buttonLabel}>
                        <Text style= {[ styles.buttonText, index === selectedPos && styles.selectedLabel ]}>{ String(index + 1) }</Text>
                    </View>
                </TouchableOpacity>
            ))}

        </View>
    </View>
)}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            gap: 10,

            padding: 10,

            borderRadius: 10,
            backgroundColor: '#3d414f',
        },

        labelContainer: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        },
        label: {
            fontSize: 24,
            fontWeight: 'bold',
            color: 'white'
        },

        imageContainer: {
            flex: 10
        },
        image: {
            width: '100%',
            height: '100%',
            resizeMode: 'cover',
            borderRadius: 10,
        },

        buttonsContainer: {
            flex: 2,
            flexDirection: 'row',
            gap: 5,
        },
        button: {
            flex: 1,
            alignItems: 'center',

            padding: 5,

            borderRadius: 4,
            backgroundColor: '#e6f0f2',
        },
        selected: {
            backgroundColor: '#6aa0f7',
            borderWidth: 0
        },

        buttonLabel: {
            flex: 1,
            justifyContent: 'center',
            marginBottom: -5,

        },
        buttonText: {
            color: '#0c3452',
            fontSize: 12,
            fontWeight: '500',
        },
        selectedLabel: {
            color: 'white',
        },
        thumbnail: {
            flex: 3,
            width: '100%',
            resizeMode: 'cover',
            borderRadius: 5
        },
    }
)