import { RootComponentsList, RootListNames } from "."
import NotFound from "./Navigation/NotFound"

export function getScreenComponent(name: string) {
    for(const key of RootListNames) {
        if(name === key) {
            return RootComponentsList[key]
        }
    }
    return NotFound
}