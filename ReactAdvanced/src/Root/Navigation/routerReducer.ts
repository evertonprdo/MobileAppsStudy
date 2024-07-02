import { RootComponentsList, RootListNames, type RootListNamesType } from ".."
import NotFound from "./NotFound"

type Action = OnScreenChange | IsDrawerShown

type OnScreenChange = {
    type: 'change_screen'
    name: RootListNamesType
}
type IsDrawerShown = {
    type: 'switch_drawer'
    visibility: boolean
}

type Navigation = {
    currentScreen: RootListNamesType
    drawerVisibility: boolean
}

export function routerReducer(navigation: Navigation, action: Action) {
    switch(action.type) {
        case "switch_drawer": {
            return {
                
            }
        }
    } 
    for(const key of RootListNames) {
        if(action.name === key) {
            return RootComponentsList[key]
        }
    }
    return NotFound
}