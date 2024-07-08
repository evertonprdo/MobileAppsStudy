import { createContext, PropsWithChildren, useContext, useState } from "react"

import type { CurrentUserContextProps, ThemeContextProps, UserProps, ThemeName } from "../types"

export const ThemeContext = createContext<ThemeContextProps | null>(null)
export const CurrentUserContext = createContext<CurrentUserContextProps | null>(null)

export default function LoginProvider({ children }: PropsWithChildren) {
    const [ theme, setTheme ] = useState<ThemeName>('light')
    const [ currentUser, setCurrentUser ] = useState<UserProps>(null)

    const themeProviderValue = {
        name: theme,
        setTheme: setTheme
    }
    const currentUserProviderValue = {
        currentUser: currentUser,
        setCurrentUser: setCurrentUser
    }

    return (
        <ThemeContext.Provider 
            value={ themeProviderValue }
        >
            <CurrentUserContext.Provider
                value={ currentUserProviderValue }
            >
                { children }
            </CurrentUserContext.Provider>
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    return useContext(ThemeContext) as ThemeContextProps
}
export function useCurrentUser() {
    return useContext(CurrentUserContext) as CurrentUserContextProps
}