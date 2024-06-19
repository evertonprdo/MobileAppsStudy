import React, { useState } from "react";
import { Text, Button } from "react-native";

type CatProps = {
    name: string
}

const Cat = (props: CatProps) => {
    const [timesPetted, setTimesPetted] = useState(0);

    return (
        <>
            <Text>I am {props.name}, Você me acariciou {`${timesPetted} vezes!`}!</Text>
            <Button onPress={() => {setTimesPetted(timesPetted + 1);}} title={`Acariciar ${props.name}`} />
        </>
    );
};

export default Cat;