import Link from 'next/link';
import Image from "next/image";
import { restaurants } from "public/data/restaurants";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { useRouter } from 'next/router';
import styles from '@/styles/restaurant/menu.module.css'
import Searchbox from '/components/homepage/searchbox';
import Footer from '/components/footer';

export default function Menu({ restaurant }) {
  const router = useRouter();
  const { menu } = restaurant;

  function Back() {
  router.back();
  }

  return (
    <div>
      <nav className="navbar sticky-top">
        <div className={styles.header}>
          <div className={styles.header_card}>
              <button onClick={Back} className={styles.header_back}>
                <Image 
                  src="/aset/restaurant/backtopleft.svg" 
                  alt="logo"
                  width={30}
                  height={30}
                  className="back"
                />
              </button>

              <Image 
                src={restaurant.image} 
                alt="logo"
                width={50}
                height={50}
                className={styles.header_img}
              />

              <div className={styles.header_card_body}>
                <h6>{restaurant.nama}</h6>
                <p>{restaurant.alamat}</p>
              </div>

              <div className={styles.header_rating}>
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
        </div>
      </nav>

      <div className={styles.content}>
      <Searchbox/>

        {restaurant.menu.map((item) => (
          <div className={styles.box} key={item.id}>
            <Link href={`/restaurant/${menu.nama}`} className={styles.box_link}>
                <Image 
                    src={item.image} 
                    alt="logo"
                    width={180}
                    height={150}
                    className={styles.box_img}
                />

                <div className={styles.box_body}>
                    <div>
                      <h5>{item.nama}</h5>
                      <p>{item.deskripsi}</p>
                      <h6>{item.harga}</h6>
                    </div>

                    <div className={styles.heart}>
                        <Image 
                            src="/aset/restaurant/heart.svg" 
                            alt="logo"
                            width={20}
                            height={20}
                            className="star"
                        />
                    </div>
                </div>
            </Link>
          </div>
        ))}
      </div>

      <Footer/>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = restaurants.map((restaurant) => ({
    params: { menu: restaurant.nama },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const restaurant = restaurants.find((r) => r.nama === params.menu);

  return { props: {restaurant}};
}