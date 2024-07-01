import { useState } from "react"
import { View } from "react-native"

import styles from './styles'
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import DATA from "./productList";

export default function FilterableProductTable() {
    const [ search, setSearch ] = useState('');
    const [ onlyStock, setOnlyStock ] = useState(false);
    
    function handleSearch(str: string) {
        setSearch(str)
    }
    function handleOnlyStock(value: boolean) {
        setOnlyStock(value)
    }
    return (
        <View style= {styles.mainContainer}>
            <SearchBar
                value= { onlyStock }
                onChange={ handleOnlyStock }
                onSearch={ handleSearch }
            />
            <ProductTable 
                data={ DATA }
                onlyStock= { onlyStock }
                search= { search }
            />
        </View>
    )
}