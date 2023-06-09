import Link from 'next/link';
import { getrich } from "public/data/getrich";
import styles from '@/styles/ratedrive.module.css'
import React, { useState, useEffect } from 'react';
import dynamic from "next/dynamic";
import Head from 'next/head';
import Navback from '/components/navback';
import Footer from '/components/footer';
import Image from 'next/image';
import { getSession, useSession, signOut } from "next-auth/react";

export default function ratedrive({ getrichh }) {

  useEffect(() => {
    const ratingInputs = document.querySelectorAll('.rating input');

    ratingInputs.forEach(input => {
      input.addEventListener('change', () => {
        const rating = input.value;
        console.log(`Selected rating: ${rating}`);
      });
    });

    // Cleanup the event listener when the component unmounts
    return () => {
      ratingInputs.forEach(input => {
        input.removeEventListener('change', () => {
          // Remove event listener logic
        });
      });
    };
  }, []);

  return (
    <>
      <Head>
        <title>GetFull</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navback />

      <main>
        <div className={styles.container}>
          <div className="mt-3">
            <div className={styles.head}>
              <p>Nilai Driver</p>
            </div>
          </div>

          <div className={styles.container1}>
            <div className={styles.poto}>
              
            </div>
            DRIVER HANDAL
          </div>

          <div className={styles.container2}>
            <textarea className={styles.input} placeholder='Tulis review disini...'/>
            <Link href="/ratefood">
              <button className={styles.button}>Kirim</button>
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
