import FormNestedObj from "../components/FormNestedObj";
import ToDoApp from "./TaskApp";
import FilterableProductTable from "./FilterableProductTable";
import SculptureList from "./SculptureList";
import CityQuiz from "../components/CityQuiz";
import Accordion from "../components/Accordion";
import TravelPlan from "../components/TravelPlan";
import Messenger from "./MessengerApp";
import Page from "../components/Context";
import ImageChangeSizeList from "./ImageChangeSizeList";

const RootStackComponents = { FilterableProductTable, SculptureList, CityQuiz, ToDoApp, Accordion, FormNestedObj, TravelPlan, Messenger, Page, ImageChangeSizeList }
export default RootStackComponents;

export type RootStackParamList = { [K in keyof typeof RootStackComponents]: undefined; }
export const RootListNames = Object.keys(RootStackComponents) as Array<keyof RootStackParamList>;