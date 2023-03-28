import Link from 'next/link';
import Image from "next/image";
import { restaurants } from "public/data/restaurant";
import styles from '@/styles/components//restaurant/restaurant.module.css'
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

export default function Restaurant() {
    return (
        <>
        <div>
        {restaurants.map((restaurant) => (
            <div className={styles.card} key={restaurant.id}>
                <Link href="#" className={styles.link}>
                <Image 
                    src={restaurant.imageURL} 
                    alt="logo"
                    width={180}
                    height={150}
                    className={styles.img}
                />

                <div className={styles.card_body}>
                    <h6>{restaurant.nama}</h6>
                    <p>{restaurant.alamat}</p>

                    <div className={styles.rating}>
                        <Image 
                            src="/aset/restaurant/star.svg" 
                            alt="logo"
                            width={20}
                            height={20}
                            className="star"
                        />
                        <p>{restaurant.rating}</p>
                    </div>
                </div>
                </Link>
            </div>
        ))}
        </div>
        </>
    )
}