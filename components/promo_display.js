import Link from 'next/link';
import Image from "next/image";
import { restaurants } from "public/data/restaurants";
import styles from '@/styles/promo.module.css'
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

export default function Promo({ restaurant }) {
    return (
        <>
        <div className={styles.head}>
            <p>Promo Ditawarkan</p>
        </div>
        <div className={styles.eta}>
            <p>Promo Makanan</p>
        </div>
        <div>
        {restaurants.map((restaurant) => (
            <div className={styles.card} key={restaurant.id}>
                <div className={styles.link}>
                    <div className={styles.card_body}>
                        <h6>{restaurant.nama}</h6>
                        <p>{restaurant.alamat}</p>
                        
                    </div>
                    <div class="form-check">
                        <input className={styles.check} type="radio" value=""/>
                    </div>
                </div>
            </div>
        ))}
        </div>
        <div className={styles.eta}>
            <p>Promo Makanan</p>
        </div>
        <div>
        {restaurants.map((restaurant) => (
            <div className={styles.card} key={restaurant.id}>
                <div className={styles.link}>
                    <div className={styles.card_body}>
                        <h6>{restaurant.nama}</h6>
                        <p>{restaurant.alamat}</p>
                        
                    </div>
                    <div class="form-check">
                        <input className={styles.check} type="radio" value=""/>
                    </div>
                </div>
            </div>
        ))}
        </div>
        <footer class="fixed-bottom">
        <Link href="#">
            <div className={styles.foot}>
                <h6>Pilih Promo Diskon</h6>
            </div>
        </Link>
        </footer>
        </>
    )
}