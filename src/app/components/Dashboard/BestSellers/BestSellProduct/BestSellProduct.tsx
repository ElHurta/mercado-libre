'use client'

import { useState, useEffect } from 'react';
import styles from './BestSellProduct.module.css'
import Image from 'next/image';

export default function BestSellProduct({id, type} : {id : number, type : string}) {

  const [product, setProduct] = useState<any | null>({});

  useEffect(() => {
    const getProduct = async () => {
      const response = await fetch(`/api/item?ids=${id}`);
      const data = await response.json();
      setProduct(data.data);
    }

    getProduct();
  }, [id]);

  if (type === 'ITEM') {
    return (
      <>
        <a href={ product.permalink } target='_blank' className={styles.bestSellProduct}>
          <li className={styles.bestSellProduct}>
            { product.title }
          </li>
        </a>
      </>
    )
  }
}
