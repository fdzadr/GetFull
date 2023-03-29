import Link from 'next/link';
import Image from "next/image";
import { restaurants } from "public/data/restaurant";
import styles from '@/styles/components//restaurant/restaurant.module.css'
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

export default function Restaurant() {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/api/data-usaha", {
            method: "GET"
        }).then((res) => res.json()).then((data) => setData(data.data))
        console.log(data)
    }, []);


    return (
        <>
        <div>
        {data.map((item) => (
            <div className={styles.card}>
                <Link href="#" className={styles.link}>
                <Image 
                    src="/aset/listmerch aset/merch1.svg" 
                    alt="logo"
                    width={180}
                    height={150}
                    className={styles.img}
                />

                <div className={styles.card_body}>
                    <h6>{item.namaresto}</h6>
                    <p>{item.alamat}</p>

                    <div className={styles.rating}>
                        <Image 
                            src="/aset/restaurant/star.svg" 
                            alt="logo"
                            width={20}
                            height={20}
                            className="star"
                        />
                        <p>4.8</p>
                    </div>
                </div>
                </Link>
            </div>
        ))}
        </div>
        </>
    )
}