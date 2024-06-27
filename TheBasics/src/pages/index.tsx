import InputContent from "../components/InputContent";
import PressCount from "../components/PressCount";
import SwitchComponent from "../components/Switch";
import FormComponent from "../components/FormComponent";
import FormObj from "../components/FormObj";
import FormNestedObj from "../components/FormNestedObj";
import ToDoApp from "../components/ToDoList";
import VersionForm from "../components/VersionForm";
import FilterableProductTable from "../ThinkingInReact";

const RootStackComponents = { FilterableProductTable, PressCount, SwitchComponent, InputContent, FormComponent, FormObj, FormNestedObj, ToDoApp, VersionForm, }
export default RootStackComponents;

export type RootStackParamList = { [K in keyof typeof RootStackComponents]: undefined; }
export const RootListNames = Object.keys(RootStackComponents) as Array<keyof RootStackParamList>;