import { useState, type PropsWithChildren } from "react"
import { ScreenContext, SetScreenContext } from "./rootContext"
import { RootListNamesType } from ".."

export default function NavigationProvider({ children }: PropsWithChildren) {
    const [ name, setName ] = useState<RootListNamesType>("HomeScreen")

    return (
        <ScreenContext.Provider value={ name }>
            <SetScreenContext.Provider value={ setName }>
                { children }
            </SetScreenContext.Provider>
        </ScreenContext.Provider>
    )
}