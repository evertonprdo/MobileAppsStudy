import { RootComponentsList, RootListNames, type RootListNamesType } from "."
import NotFound from "./Navigation/NotFound"

export function getScreenComponent(name: RootListNamesType) {
    for(const key of RootListNames) {
        if(name === key) {
            return RootComponentsList[key]
        }
    }
    return NotFound
}