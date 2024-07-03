import HomeScreen from "../Pages/HomeScreen";
import MultiFileFocus from "../Pages/MultiFileFocus";
import DashBoard from "../Pages/useRef";
import VideoPlayer from "../Pages/useRefDOM";

export type RootListNamesType = keyof typeof RootComponentsList
export type RootParamList = {
    [K in keyof typeof RootComponentsList]: React.JSX.Element
}
export const RootComponentsList = 
{ 
    HomeScreen, 
    DashBoard,
    VideoPlayer,
    MultiFileFocus
}
export const RootListNames = Object.keys(RootComponentsList) as Array<keyof RootParamList>