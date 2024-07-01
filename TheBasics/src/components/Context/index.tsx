import { Text } from "react-native";
import Heading from "./Heading";
import Section from "./Section";

export default function Page() {
    return (
        <Section isFancy={false}>
            <Heading><Text>Title</Text></Heading>
            <Section isFancy={true}>
                <Heading><Text>Heading</Text></Heading>
                <Heading><Text>Heading</Text></Heading>
                <Heading><Text>Heading</Text></Heading>
                <Section isFancy={false}>
                    <Heading><Text>Sub-heading</Text></Heading>
                    <Heading><Text>Sub-heading</Text></Heading>
                    <Heading><Text>Sub-heading</Text></Heading>
                    <Section isFancy={true}>
                        <Heading><Text>Sub-heading</Text></Heading>
                        <Heading><Text>Sub-heading</Text></Heading>
                        <Heading><Text>Sub-heading</Text></Heading>
                    </Section>
                </Section>
            </Section>
        </Section>
    )
}