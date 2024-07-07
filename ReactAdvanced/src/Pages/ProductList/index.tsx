import { ActivityIndicator, Text, View } from "react-native";

import { useProductList } from "./Hooks";
import s from "./styles";

import ProductList from "./List";

export default function Products() {
    const { products, isOnRequest, error } = useProductList()

    return (
        <View style= { s.mainContainer }>
            { isOnRequest ? (
                <ActivityIndicator
                    size={ "large" }
                    color={ "#4FE3E9"}
                    style= {s.loadingIndicator}
                />
            ) : (
                <ProductList
                    products={ products }
                />
            ) }
        </View>
    )
}