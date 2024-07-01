import { View } from "react-native";
import { LevelContext } from "./LevelContext";
import { useContext } from "react";

type SectionProps = {
    isFancy: boolean
    children: React.ReactNode
}
export default function Section({ isFancy ,children }: SectionProps) {
    const level = useContext(LevelContext)
    return (
        <View 
            style= {[
                {borderWidth: 1, borderColor: '#ccc', borderRadius: 7, margin: 12, gap: 7},
                isFancy &&  { borderColor: '#654321' }
            ]}
        >
            <LevelContext.Provider value={ level + 1 }>
                { children }
            </LevelContext.Provider>
        </View>
    )
}