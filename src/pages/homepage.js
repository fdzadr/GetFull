import Head from 'next/head';
import Navbar from '/components/navbar';
import Footer from '/components/footer';
import Searchbox from '/components/homepage/searchbox';
import Portal from '/components/homepage/getrich_portal';
import Carousel from '/components/homepage/carousel/carousel';
import Slider from '/components/product card/carousel_product_card';
import styles from '@/styles/homepage/homepage.module.css';
import styles2 from '@/styles/components/homepage/searchbox.module.css';
import styles3 from '@/styles/components/carousel_product_card.module.css'

import Image from 'next/image';
import { getSession, useSession, signOut } from "next-auth/react";
import React from "react";
import { useState } from 'react';
import { useEffect } from 'react';

import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Link from 'next/link';

export default function Home() {

    const [data, setData] = useState([]);
    const [query, setQuery] = useState('');

    useEffect(() => {
        fetch("http://localhost:3000/api/produk-api", {
            method: "GET"
        }).then((res) => res.json()).then((data) => setData(data.data))
        console.log(data)
    }, []);

    const searchFilter = (data) => { 
        return data.filter(
        (product) => product.namaproduk.toLowerCase()
        .replace(/\s+/g, "")
        .includes(query.toLowerCase().replace(/\s+/g, ""))
    )};

    const filtered = searchFilter(data)

    const handleChange = (e) => {
        setQuery(e.target.value)
    }


    var $ = require("jquery");
    if (typeof window !== "undefined") {
        window.$ = window.jQuery = require("jquery");
    }

    const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
        ssr: false,
    });

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
        
        <>
        <Head>
        <title>GetFull</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        </Head>

        <Navbar/>

        <main>
        <div className={styles.container}>
            {/* Search box */}
            <div className={styles2.search_box}>
                    <button className={styles2.search_icon}>
                        <Image 
                            src="/aset/search box aset/search_icon.svg" 
                            alt="logo google"
                            width={25}
                            height={25}
                        />
                    </button>
                                
                    <input onChange={handleChange} className={styles2.search_form} type="text" placeholder='Cari...'/>

                    <button className={styles2.search_setting}>
                        <Image 
                            src="/aset/search box aset/search_setting.svg" 
                            alt="logo google"
                            width={25}
                            height={25}
                        />
                    </button>
            </div>
        

            {/* GetRich Portal */}
            <div className={styles.gr_portal}>
                <Portal/>
            </div>

            {/* Carousel */}
            <div className={styles.carousel_home}>
                <Carousel/>
            </div>

            {/* Product */}
            <div className={styles3.product_section}>
                <div className={styles3.product_carousel}>
                <div className={styles3.container}>
                    <OwlCarousel 
                        className={styles.owl}
                        responsive={Responsive}
                        loop={false}
                        dots={false}
                    >
                    {filtered.map((item) => (
                        <div className={styles3.card}>
                            <Link href="#" className={styles3.link}>
                            <Image 
                                src={"/aset/fotomakanan2.svg"} 
                                alt="logo"
                                width={164}
                                height={120}
                                className={styles3.img}
                            />

                            <div className={styles3.card_body}>
                                <h5>{item.namaproduk}</h5>
                                <p>{item.harga}</p>
                            </div>
                            </Link>
                        </div>
                    ))}
                    </OwlCarousel>
                    </div>
                </div>
            </div>

        </div>
        </main>

        <Footer/>
        </>
    )
}

/*
export async function getServerSideProps({req}){
    const session = await getSession({req})

    if(!session){
        return{
            redirect:{
                destination:'http://localhost:3000',
                permanent:false
            }
        }
    }

    return {
        props: {session}
    }
}
*/