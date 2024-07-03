import { Button } from "react-native";

export default function SearchButton({ onClick }: { onClick: () => void }) {
    return (
        <Button title="Search" onPress={ onClick }/>
    )
}