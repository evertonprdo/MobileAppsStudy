import { ProductCategoryRow, ProductRow } from "./ProductRow";
import type { DataProps } from "../productList";

type ProductCategoryProps = {
    dataRows: DataProps[]
    category: string
}
export default function ProductCategory({ dataRows, category }: ProductCategoryProps) {
    return (
        <>
            <ProductCategoryRow nome= {category} />
            { dataRows.map( (item, i) => (
                    <ProductRow 
                    key={ `ProductRow_${i}` }
                    odd= { i % 2 !== 0 }
                    nome={ item.name }
                    valor= { item.price }
                    inStock= { item.stocked }
                />
            ))}
        </>
    )
}