import { FlatList, Image, Platform, Text, View } from "react-native";

import { useProductList } from "./Hooks";
import DATA, { type Products, type Product } from "./model/DATA";
import s from "./styles";
import { resumeString } from "./model/utils";

export default function Products() {
    //const { products, isOnRequest, error } = useProductList()
    const products = DATA
    const isOnRequest = false

    return (
        <View style= { s.mainContainer }>
            { isOnRequest ? (
                <Text style= {{color: 'white', textAlign: 'center', fontSize: 19, padding: 15}}>Loading...</Text>
            ) : (
                <ProductList
                    products={ products }
                />
            ) }
        </View>
    )
}

type ProductListProps = {
    products: Products
}
function ProductList({products}: ProductListProps){
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

type ProductProps = {
    product: Product
}
function Product({ product }: ProductProps) {
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

type ThumbnailProps = {
    url: string
}
function Thumbnail({ url }: ThumbnailProps) {
    return (
        <View style= {s.thumbnailContainer}>
            <Image
                source={{uri: url}}
                style= { s.image }
            />
        </View>
    )
}

type DescriptionProps = {
    title: string
    category: string
    price: number
    description: string
    rate: number
}
function Description({ title, price, category, description, rate }: DescriptionProps) {
    return (
        <View style= {s.descriptionContainer}>
            <View style= {s.headerContainer}>
                <Text style= {s.titleText}>{ title }</Text>

                <View style= {s.subHeaderContainer}>
                    <Text style= {s.categoryText}>{ category }</Text>

                    <View style= {s.ratingContainer}>
                        <Text>{ `Rate: ${rate} ` }</Text>

                    </View>
                </View>
            </View>
            <Text style= {s.priceText}>{ "$" + price }</Text>

            <Text style= {s.descriptionText}>{ resumeString(description) }</Text>
        </View>
    )
}