import Login from "../Pages/Login";
import HomeScreen from "../Pages/HomeScreen";
import MultiChatRoom from "../Pages/MultiChatRoom";
import Products from "../Pages/ProductList";
import VideoPlayer from "../Pages/VideoPlayerWithEffect";

export type RootListNamesType = keyof typeof RootComponentsList
export type RootParamList = {
    [K in keyof typeof RootComponentsList]: React.JSX.Element
}
export const RootComponentsList = 
{ 
    HomeScreen, 
    Products,
    MultiChatRoom,
    VideoPlayer,
    Login
}
export const RootListNames = Object.keys(RootComponentsList) as Array<keyof RootParamList>