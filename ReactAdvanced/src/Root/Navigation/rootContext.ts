import { createContext, useContext } from "react";

import type { RootListNamesType } from "..";

export const ScreenContext = createContext<RootListNamesType>('HomeScreen')
export const DrawerVisibility = createContext(false)

export function useScreen() {
    return useContext(ScreenContext)
}

export function useDrawerVisibility() {
    return useContext(DrawerVisibility)
}