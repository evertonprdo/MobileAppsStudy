export type ThemeName = 'light' | 'dark'
export type ThemeContextProps = {
    name: ThemeName
    setTheme: (value: 'light' | 'dark') => void
}

export type CurrentUserContextProps = {
    currentUser: UserProps
    setCurrentUser: (user:UserProps) => void
}
export type UserProps = {
    firstName: string
    lastName: string
} | null