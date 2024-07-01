import { useState } from "react";
import { ScrollView, Text, View } from "react-native";

import styles from "./styles";
import DATA from "./DATA";
import Panel from "./Panel";

type AccordionProps = {
    DATA: {
        title: string
        content: string
    }[]
}
export default function Accordion(/* { DATA }: AccordionProps */) {
    const [ activeIndex, setActiveIndex ] = useState(0);

    return (
        <ScrollView contentContainerStyle= {styles.mainContainer}>
            <Text style= {[ styles.textTitle, { fontSize: 21 } ]}>Almaty, Kazakhstan</Text>

            <View style= { styles.accordionContainer }>
                { DATA.map((panel, index) => (
                    <Panel 
                        key={ panel.title.toLowerCase() }
                        title={ panel.title }
                        isActive= { activeIndex === index }
                        onShow={ () => setActiveIndex(index) }
                        style= {[
                            index === 0 && { borderTopWidth: 0 },
                            { flexDirection: activeIndex === index ? 'column' : 'row' } 
                        ]}
                    >
                        <Text style= { styles.textContent }>{ panel.content }</Text>
                    </Panel>
                )) }
            </View>
        </ScrollView>
    )
}