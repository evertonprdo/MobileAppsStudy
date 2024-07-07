import { FlatList, Platform } from "react-native"

import s from "../styles"
import Product from "./Product"
import type { Products } from "../model/DATA"

type ProductListProps = {
    products: Products
}
export default function ProductList({products}: ProductListProps){
    const isWeb = Platform.OS === 'web'
    return (
        isWeb ? (
            <FlatList 
                data={ products }
                keyExtractor={product => `Product_${product.id}`}
                renderItem={({item}) => (
                    <Product 
                        product= {item}
                    />
                )}
                numColumns={2}
                contentContainerStyle= { s.prodListContainer }
                columnWrapperStyle= {{columnGap: 20}}
            />
        ) : (
            <FlatList 
                data={ products }
                keyExtractor={product => `Product_${product.id}`}
                renderItem={({item}) => (
                    <Product 
                        product= {item}
                    />
                )}
                contentContainerStyle= { s.prodListContainer }
            />
        )
    )
}