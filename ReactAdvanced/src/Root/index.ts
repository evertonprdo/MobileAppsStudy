import AutoFocus from "../Pages/AutoFocus";
import ChatRoom from "../Pages/ChatRoom";
import CounterMount from "../Pages/Counter";
import HomeScreen from "../Pages/HomeScreen";
import MultiChatRoom from "../Pages/MultiChatRoom";
import MultiFileFocus from "../Pages/MultiFileFocus";
import DashBoard from "../Pages/useRef";
import VideoPlayer from "../Pages/VideoPlayerWithEffect";

export type RootListNamesType = keyof typeof RootComponentsList
export type RootParamList = {
    [K in keyof typeof RootComponentsList]: React.JSX.Element
}
export const RootComponentsList = 
{ 
    HomeScreen, 
    DashBoard,
    MultiFileFocus,
    VideoPlayer,
    ChatRoom,
    AutoFocus,
    CounterMount,
    MultiChatRoom
}
export const RootListNames = Object.keys(RootComponentsList) as Array<keyof RootParamList>