import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const ProductContext = createContext();

export function ProductProvider({ children }) {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    const getAllProducts = async () => {
        try {
            setLoading(true);
            const response = await axios.get('https://fakestoreapi.com/products');
            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        } finally {
            setLoading(false);
        }
    };

    const getCategories = async () => {
        try {
            const response = await axios.get('https://fakestoreapi.com/products/categories');
            setCategories(response.data);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    const getProductsByCategory = async (category) => {
        try {
            setLoading(true);
            const response = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching products by category:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getAllProducts();
        getCategories();
    }, []);

    return (
        <ProductContext.Provider
            value={{
                products,
                categories,
                loading,
                getAllProducts,
                getProductsByCategory
            }}
        >
            {children}
        </ProductContext.Provider>
    );
}