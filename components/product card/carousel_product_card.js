import React from "react";
import Link from 'next/link';
import Image from "next/image";
import { products } from "public/data/product";
import styles from '@/styles/components/carousel_product_card.module.css'

export default function CarouselProductCard () {
    return (
        <div className={styles.container}>
        {products.map((product) => (
            <div className={styles.card} key={product.id}>
                <Link href="#" className={styles.link}>
                <Image 
                    src={product.imageURL} 
                    alt="logo"
                    width={164}
                    height={120}
                    className={styles.img}
                />

                <div className={styles.card_body}>
                    <h5>{product.name}</h5>
                    <p>{product.price}</p>
                </div>
                </Link>
            </div>
        ))}
        </div>
    );
}