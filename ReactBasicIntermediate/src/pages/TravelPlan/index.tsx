import { useState } from "react";
import { ScrollView, Text } from "react-native";

import initialTravelPlan, { type TravelProps } from "./DATA";
import styles from "./styles";
import PlaceTree from "./PlaceTree";

export default function TravelPlan() {
    const [ plan, setPlan ] = useState<TravelProps>(initialTravelPlan)
    
    function handleComplete(parentId: number, childId: number) {
        const parent = plan[parentId];
        const childIds = parent.childIds.filter(id => id !== childId)

        if(childIds.length > 0 || parentId === 0) {
            setPlan({
                ...plan,
                [parentId]: {
                    ...parent,
                    childIds
                }
            })
        } else {
            for(const key in plan) {
                if(plan[key].childIds.includes(parentId)){
                    handleComplete(plan[key].id, parentId)
                } 
            }
        }
    }

    const root = plan[0];
    const planetsIds = root.childIds

    return(
        <ScrollView contentContainerStyle= { styles.mainContainer }>
            <Text style= { styles.titleText}>Places to visit</Text>

            { planetsIds.map((childId) => (
                <PlaceTree 
                    key={childId}
                    id={childId}
                    parentId={0}
                    index={0}
                    placesById={plan}
                    maxStep={ root.childIds.length }
                    onComplete={ handleComplete }
                />
            )) }
        </ScrollView>
    )
}