import { createContext, useContext } from "react";

import type { RootListNamesType } from "..";

export const ScreenContext = createContext<RootListNamesType>('HomeScreen')
export const SetScreenContext = createContext<((value:RootListNamesType) => void)>((v) => {return})

export function useScreen() {
    return useContext(ScreenContext)
}

export function useSetScreen() {
    return useContext(SetScreenContext)
}