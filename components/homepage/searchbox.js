import styles from '@/styles/components/homepage/searchbox.module.css';
import Link from 'next/link';
import Image from 'next/image';
import {useRouter} from 'next/router';
import { useState } from 'react';
import { useEffect } from 'react';
import Carousel from 'components/product card/carousel_product_card'

export async function getStaticProps(){
    const data = await fetch('http://localhost:300/api/data-usaha')
    return {
    props: {
    countries: data.data
    }
    }
}

export default function Seachbox() {


    const [data, setData] = useState([]);
    const [query, setQuery] = useState('');

    useEffect(() => {
        fetch("http://localhost:3000/api/data-usaha", {
            method: "GET"
        }).then((res) => res.json()).then((data) => setData(data.data))
        console.log(data)
    }, []);

    const searchFilter = (data) => { 
        return data.filter(
        (product) => product.namaresto.toLowerCase()
        .replace(/\s+/g, "")
        .includes(query.toLowerCase().replace(/\s+/g, ""))
    )};

    const filtered = searchFilter(data)

    const handleChange = (e) => {
        setQuery(e.target.value)
    }


    return (
        <>
            <div className={styles.search_box}>
                <button className={styles.search_icon}>
                    <Image 
                        src="/aset/search box aset/search_icon.svg" 
                        alt="logo google"
                        width={25}
                        height={25}
                    />
                </button>
                            
                <input onChange={handleChange} className={styles.search_form} type="text" placeholder='Cari...'/>

                <button className={styles.search_setting}>
                    <Image 
                        src="/aset/search box aset/search_setting.svg" 
                        alt="logo google"
                        width={25}
                        height={25}
                    />
                </button>

                

            </div>

            {filtered.map((item) => (
                <div>
                
                </div>
                ))}

        </>
    )
}