import InputContent from "../components/InputContent";
import PressCount from "../components/PressCount";
import CoreComponents from "../components/CoreComponents";
import SwitchComponent from "../components/Switch";
import FormComponent from "../components/FormComponent";
import FormObj from "../components/FormObj";
import FormNestedObj from "../components/FormNestedObj";
import ToDoApp from "../components/ToDoList";
import VersionForm from "../components/VersionForm";
import TicTacToe from "../components/TicTacToe";

const RootStackComponents = { InputContent, PressCount, CoreComponents, SwitchComponent, FormComponent, FormObj, FormNestedObj, ToDoApp, VersionForm, TicTacToe }
export default RootStackComponents;

export type RootStackParamList = { [K in keyof typeof RootStackComponents]: undefined; }
export const RootListNames = Object.keys(RootStackComponents) as Array<keyof RootStackParamList>;