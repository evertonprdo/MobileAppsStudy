import { type PropsWithChildren } from "react"
import { ScreenContext, DrawerVisibility } from "./rootContext"

export default function NavigationProvider({ children }: PropsWithChildren) {
    const [  ]
    return (
        <ScreenContext.Provider value={ screenName }>
            <DrawerVisibility.Provider value= { showDrawer }>
                { children }
            </DrawerVisibility.Provider>
        </ScreenContext.Provider>
    )
}