import Link from 'next/link';
import Image from "next/image";
import styles from '@/styles/cart/cart_display.module.css';
import { restaurants } from "public/data/menudummy";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

export default function cart() {
    return (
        <>
        <div className={styles.container}>
            <div className={styles.resto}>
                <b>Resto Makan Enak</b>
                <p>Jl. Dimana Saja</p>
            </div>
            {restaurants.map((restaurant) => (
                <div className={styles.menu} key={restaurant.id}>
                    <Image 
                        src={restaurant.image} 
                        alt="logo"
                        width={50}
                        height={50}
                        className={styles.img}
                    />
                    <p>{restaurant.nama}</p>
                    <p>{restaurant.harga}</p>
                </div>
            ))}
        </div>
        
        </>
    )
}