import FormNestedObj from "../components/FormNestedObj";
import ToDoApp from "./TaskApp";
import FilterableProductTable from "./FilterableProductTable";
import SculptureList from "./SculptureList";
import CityQuiz from "../components/CityQuiz";
import Accordion from "../components/Accordion";
import TravelPlan from "./TravelPlan";
import Messenger from "./MessengerApp";
import ImageChangeSizeList from "./ImageChangeSizeList";

const RootStackComponents = { FilterableProductTable, SculptureList, CityQuiz, Accordion, FormNestedObj, TravelPlan, Messenger, ImageChangeSizeList, ToDoApp }
export default RootStackComponents;

export type RootStackParamList = { [K in keyof typeof RootStackComponents]: undefined; }
export const RootListNames = Object.keys(RootStackComponents) as Array<keyof RootStackParamList>;