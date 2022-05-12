import { useMemo } from "react"

export const useSortProducts = (products, sort) => {
    const sortedproducts = useMemo(() => {
        if(sort) {
            return [...products].sort((a, b) => a[sort].localeCompare(b[sort]))
        }
        return products
    }, [sort, products])
    return sortedproducts;
} 

export const useProducts = (products, sort, query) => {
    const sortedproducts = useSortProducts(products, sort);
    const sortedAndSearchproducts = useMemo(() => {
        return sortedproducts.filter(post => post.name.toLowerCase().includes(query.toLowerCase()))
    }, [query, sortedproducts])

    return sortedAndSearchproducts;
}