import { View } from "react-native"

import s from "../styles"
import Thumbnail from "./Item/Thumbnail"
import Description from "./Item/Description"

import type { Product } from "../model/DATA"

type ProductProps = {
    product: Product
}
export default function Product({ product }: ProductProps) {
    return(
        <View style= { s.productContainer }>
            <Thumbnail
                url= {product.image}
            />
            <Description
                title= { product.title }
                category= { product.category }
                price= { product.price }
                description= { product.description }
                rate={ product.rating.rate }
            />
        </View>
    )
}