import { useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import type { StyleProp, ViewStyle, TextStyle } from "react-native";

export default function Accordion() {
    const [ activeIndex, setActiveIndex ] = useState(0);

    return (
        <View style= {styles.mainContainer}>
            <Text style= {[ styles.textTitle, { fontSize: 21 } ]}>Almaty, Kazakhstan</Text>
            <FlatList
                style= { styles.accordionContainer }
                data={ DATA }
                keyExtractor={(item) => item.title}
                renderItem={({item, index}) => (
                    <Panel 
                        title={ item.title }
                        isActive= { activeIndex === index }
                        onShow={ () => setActiveIndex(index) }
                        style= {[
                            index !== 0 && { borderTopWidth: 1 },
                            {flexDirection: activeIndex === index ? 'column' : 'row'} 
                        ]}
                    >
                        <Text style= { styles.textContent }>{ item.content }</Text>
                    </Panel>
                )}
            />
        </View>
    )
}

type PanelProps = {
    title: string
    children: React.ReactNode
    isActive: boolean
    onShow: () => void
    style: StyleProp<ViewStyle>
}
function Panel({ title, children, isActive, onShow, style }: PanelProps) {
    return (
        <View style= {[ styles.panelContainer, style ]}>
            <Text style= { styles.textTitle }>{ title }</Text>

            { isActive ? (
                children 
            ) : (
                <Pressable
                    onPress={ onShow }
                    style= {styles.showButton}
                >
                    <Text style= { styles.textButton }>Show</Text>
                </Pressable>
            )}
        </View>
    )
}

type DataProps = {
    title: string
    content: string
}
const DATA: Array<DataProps> = [
    {title: "About", content: "With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city."},
    {title: "Etymology", content: `The name comes from алма, the Kazakh word for "apple" and is often translated as "full of apples". In fact, the region surrounding Almaty is thought to be the ancestral home of the apple, and the wild Malus sieversii is considered a likely candidate for the ancestor of the modern domestic apple.`},

    //GPT Gen bellow
    {title: "History", content: "Almaty, formerly known as Alma-Ata, has a rich history dating back to ancient times. The region has been inhabited by various peoples over the centuries, including nomadic tribes and Silk Road traders. During the Soviet period, Almaty developed rapidly, becoming the capital of the Kazakh Soviet Socialist Republic in 1929. The city retained its capital status until 1997, when the capital was moved to Astana (now called Nur-Sultan). Even after the relocation, Almaty remained the country's main cultural, economic, and educational center."},
    {title: "Culture and Attractions", content: "Almaty is a vibrant cultural hub with a blend of traditional Kazakh influences and modernity. The city is known for its theaters, museums, and art galleries. Popular attractions include Panfilov Park, home to the Zenkov Cathedral, one of the largest wooden structures in the world, and the Central State Museum of Kazakhstan, which offers a comprehensive overview of the country's history and culture. Almaty is also famous for its green spaces, such as Kok Tobe Park, which provides panoramic views of the city, and the Big Almaty Lake, located in the nearby mountains, ideal for hiking and weekend getaways."},
    {title: "Economy", content: "Almaty is Kazakhstan's financial and economic powerhouse. The city is home to the country's largest banks and financial institutions, making it a crucial center for business and commerce. Almaty hosts numerous international companies and boasts a well-developed infrastructure that supports various industries, including technology, telecommunications, and manufacturing. The city's economic growth is also supported by its strategic location, serving as a key trading hub between Europe and Asia."},
    {title: "Education", content: "Almaty is a major educational center in Kazakhstan, home to many of the country's top universities and research institutions. Notable educational institutions include Al-Farabi Kazakh National University, which is the oldest and one of the most prestigious universities in Kazakhstan, and the Kazakh-British Technical University, known for its strong engineering and technology programs. The city's focus on education has attracted a diverse student population, fostering a vibrant academic community and contributing to Almaty's reputation as a center of learning and innovation."},
]

const border: StyleProp<ViewStyle> = {
    borderColor: '#ccc',
    borderRadius: 7,
}
const text: StyleProp<TextStyle> = {
    letterSpacing: 0.3,
    color: '#333'
}
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: 'center',
        gap: 17,
        padding: 12
    },

    panelContainer: {
        ...border,
        borderRadius: 0,
        paddingVertical: 17, 
        paddingHorizontal: 12,
        width: '100%',
        gap: 12,
        justifyContent: 'space-between',
    },

    accordionContainer: {
        ...border,
        width: '100%',
        borderWidth: 1,
        backgroundColor: 'white',
    },

    showButton: {
        ...border,
        borderWidth: 1,
        paddingHorizontal: 20,
        paddingVertical: 7,
    },
    textButton: {
        ...text,
        fontSize: 14,
        userSelect: 'none',
        fontWeight: '600'
    },

    textTitle: {
        ...text,
        fontWeight: 'bold',
        fontSize: 17,
    },
    textContent: {
        ...text,
        fontSize: 14,
    }
})