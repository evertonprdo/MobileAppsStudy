import HomeScreen from "../Pages/HomeScreen";
import DashBoard from "../Pages/useRef";

export type RootParamList = {
    [K in keyof typeof RootComponentsList]: React.JSX.Element
}
export const RootComponentsList = { DashBoard, HomeScreen }
export const RootListNames = Object.keys(RootComponentsList) as Array<keyof RootParamList>