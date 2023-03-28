import Link from 'next/link';
import Image from "next/image";
import { products } from "public/data/product";
import styles from '@/styles/components/carousel_product_card.module.css'
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

var $ = require("jquery");
if (typeof window !== "undefined") {
    window.$ = window.jQuery = require("jquery");
}

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
});

export default function CarouselProductCard () {
    const Responsive = {
        200: {
            margin: 15,
            items: 2,
        },
        
        300: {
            margin: 15,
            items: 2,
        },
    };

    return (
        <div className={styles.container}>
        <OwlCarousel 
            className="owl-theme"
            responsive={Responsive}
            loop={false}
            dots={false}
        >
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
        </OwlCarousel>
        </div>
    );
}