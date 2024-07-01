import { Text, View } from "react-native"
import styles from "../styles"

type ProductCategoryRowProps = {
    nome: string
}
export function ProductCategoryRow({ nome }: ProductCategoryRowProps) {
    return (
        <View style= {styles.productCategoryRowContainer}>
            <Text style= { styles.rowCategoyText }>{ nome }</Text>
        </View>
    )
}

type ProductRowProps = {
    nome: string
    valor: string
    inStock: boolean
    odd: boolean
}
export function ProductRow({ nome, valor, inStock, odd }: ProductRowProps) {
    return (
        <View 
            style= {[
                styles.productRowConainer,
                {backgroundColor: odd ? "#fff" : "#f7f7f7"}
            ]}
        >
            <Text 
                style= {[
                    styles.tableRowText,
                    { color: inStock ? '#333' : 'red' } 
                ]}
            >
                { nome }
            </Text>

            <Text style= { styles.tableRowText }>{ valor }</Text>
        </View>
    )
}