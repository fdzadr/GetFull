import Link from 'next/link';
import { getrich } from "public/data/getrich";
import styles from '@/styles/order.module.css'
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Head from 'next/head';
import Navback from '/components/navback';
import Cart from '/components/cart/cart_display';
import Footer from '/components/footer';
import Image from 'next/image';
import { getSession, useSession, signOut } from "next-auth/react";

export default function order({ getrichh }) {
    
    return (
        <>
        <Head>
            <title>GetFull</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <Navback/>

            <div className={styles.container}>
                <div className="mt-3">
                    <div className={styles.head}>
                        <p>Detail Pesanan</p>
                    </div>
                <div>

                <div className={styles.loc}>
                    <Image 
                        src="/aset/setting aset/loc.svg" 
                        alt="logo"
                        width={20}
                        height={20}
                        className={styles.img}
                    />
                    <b>Diantar ke:</b><br/>
                    Jl. Kenangan Jogja dan kawannya No.14, Pogung Empire, Bunga Melati, kec. Kerajaan Jogja 12345
                </div>

                <Cart/>

                <div className={styles.promo}>
                    <b>Promo dipakai:<br/></b>
                    <Link href='/promo' className={styles.pro}>    
                        Anda tidak memakai promo apapun
                    </Link>
                </div>

                <div className={styles.calc}>
                    Subtotal<br/>Ongkos Kirim<br/>Diskon<br/>Biaya Admin<br/>
                    <b>Total</b>                    
                    <div className={styles.price}>
                        <b>20.000<br/>8.000<br/>0<br/>2.000<br/>30.000</b>
                    </div>  
                </div>
        
                </div>
                    <footer class="fixed-bottom">
                        <div className={styles.foot}>
                                <p class="text-end">
                                    Total<br/>Rp30.000
                                </p>  
                            <Link href="/payment">
                                <div className={styles.cekout}>
                                    <h6>Checkout</h6>
                                </div>
                            </Link>
                        </div>
                    </footer>
                </div>
            </div>

        </>
    )
}