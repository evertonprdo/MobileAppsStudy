import { useMemo } from "react";
import { RootListNamesType } from "..";
import { getScreenComponent } from "../utils";

type ContentScreenProps = {
    name: RootListNamesType
}
export default function ContentScreen({ name }: ContentScreenProps) {
    const ScreenComponent = useMemo(() => {
        return getScreenComponent(name)
    }, [name])

    return <ScreenComponent />
}