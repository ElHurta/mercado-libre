'use client'

import BestSellProduct from './BestSellProduct/BestSellProduct'

import styles from './BestSellers.module.css'
import React, { useEffect } from 'react'

export default function BestSellers() {

    const [categories, setCategories] = React.useState([]);
    const [selectedCategory, setSelectedCategory] = React.useState('');
    const [products, setProducts] = React.useState([]);

    useEffect(() => {
        const getCategories = async () => {
            const response = await fetch('/api/categories');
            const data = await response.json();
            setCategories(data.data);
        }

        getCategories();
    }, []);

    useEffect(() => {
        const getProducts = async () => {
            const response = await fetch(`/api/products?category=${selectedCategory}`);
            const data = await response.json();
            setProducts(data.data);
        }

        getProducts();
    }, [selectedCategory]);

    function handleSelectCategory(event : any) {
        setSelectedCategory(event.target.value);
    }

    return (
        <article className={styles.bestSellsContainer}>
            <header className={styles.bestSellsHeader}>
                <h3 className={styles.headerTitle}>Más Vendidos Hoy</h3>
                <select name="category" id="category" className={styles.selectCategory} onChange={handleSelectCategory}>
                    <option value="" disabled selected>Categoría</option>
                    {
                        categories.map(
                            (item : any, index : number) => 
                            <option
                                key={index}
                                value={item.id}
                            >
                                {item.name}
                            </option>
                        )
                    }
                </select>
            </header>
            <ul className={styles.bestSellsList}>
                {
                    products.map(
                        (item : any, index : number) =>
                        <BestSellProduct
                            id={item.id}
                            type={item.type}
                            key={index}
                        />
                    )
                }
            </ul>
        </article>
    )
}
