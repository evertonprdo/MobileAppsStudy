import { useEffect, useState } from "react";
import type { Products } from "../model/DATA";

export default function useProductList() {
    const [ products, setProducts] = useState<Products>([])
    const [ isOnRequest, setIsOnRequest ] = useState(true)
    const [ error, setError ] = useState<Error | null>(null)

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch("https://fakestoreapi.com/products")
                if(!response.ok) {
                    throw new Error('Erro de Rede')
                }
                const result = await response.json()
                setProducts(result)
            } catch (err) {
                setError(err as Error)
            } finally {
                setIsOnRequest(false)
            }
        }

        fetchData();
    }, [])

    return { products, isOnRequest, error }
}