import { RootListNamesType } from "..";
import { getScreenComponent } from "../utils";

type ContentScreenProps = {
    name: RootListNamesType
}
export default function ContentScreen({ name }: ContentScreenProps) {
    const Screen = getScreenComponent(name) 
    return <Screen />

}