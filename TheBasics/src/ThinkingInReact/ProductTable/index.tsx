import { FlatList, Text, View } from "react-native";

import styles from "../styles";
import ProductCategory from "./ProductCategory";
import type { DataRowsProps } from "../productList";

type ProductTableProps = {
    data: DataRowsProps
    onlyStock: boolean
    search: string
}
export default function ProductTable({ data, onlyStock, search }: ProductTableProps) {
    const categorys = [...new Set(data.map((item) => item.category))]

    function getRenderItem(category: string) {
        const rows: DataRowsProps  = []

        data.forEach((product) => {
            if( product.name.toLowerCase().indexOf(search.toLocaleLowerCase()) === -1 ) {
                return
            }
            if(category !== product.category) {
                return
            }
            if(onlyStock && !product.stocked) {
                return
            }
            rows.push(product)
        })
        return (
            <ProductCategory 
                category= { category }
                dataRows= { rows }
            />
        )
    }
    return (
        <View style= {styles.ProductTableContainer}>
            <View style= {styles.productCategoryRowContainer}>
                <Text style= { styles.rowCategoyText }>Name</Text>
                <Text style= { styles.rowCategoyText }>Valor</Text>
            </View>

            <FlatList
                keyExtractor={ (_, i ) => `ProductCategory_${i}` }
                style= {styles.ProductTableContainer}
                data={ categorys }
                renderItem={ ({item}) => getRenderItem(item) }
            />
        </View>
    )
}