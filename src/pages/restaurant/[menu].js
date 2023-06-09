import Link from 'next/link';
import Image from "next/image";
import { restaurants } from "public/data/restaurants";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { useRouter } from 'next/router';
import styles from '@/styles/restaurant/menu.module.css'
import Searchbox from '/components/homepage/searchbox';
import Footer from '/components/footer';
import { Modal } from 'react-bootstrap';
import { data } from 'jquery';

export default function Menu({ restaurant }) {
  const router = useRouter();
  const { menu } = restaurant;

  function Back() {
  router.back();
  }

  const [showModal, setShowModal] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState({});

  const [data, setData] = useState([]);


  useEffect(() => {
    fetch("http://localhost:3000/api/produk-api", {
        method: "GET"
    }).then((res) => res.json()).then((data) => setData(data.data))
    console.log(data)
  }, []);

  // const searchFilter = (data) => { 
  //   return data.filter(
  //   (product) => product.namaresto.toLowerCase()
  //   .replace(/\s+/g, "")
  //   .includes(query.toLowerCase().replace(/\s+/g, ""))
  // )};

  // const filtered = searchFilter(data)

  const handleModal = (item) => {
    if (item) {
      setSelectedMenu(item);
    }
    setShowModal(!showModal);
  };

  const handleAddToCart = () => {

    const cartItem = {
      restaurantId: restaurant.id,
      namaRestaurant: restaurant.nama,
      alamat: restaurant.alamat,
      menuId: selectedMenu.id,
      namaMenu: selectedMenu.nama,
      harga: selectedMenu.harga,
    };
  
    fetch('/api/addCart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cartItem),
    })
      .then((response) => response.json())
      .then((data) => {
        alert('Item added to cart:', data);
      })
      .catch((error) => {
        console.error('Error adding item to cart:', error);
      });
  };

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
          </div>
        </div>
      </nav>

      <div className={styles.content}>
      <Searchbox/>

        {restaurant.menu.map((item) => (
          <div className={styles.box} key={item.id}>
            <button type="button" className={styles.box_link} onClick={() => handleModal(item)}>
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
            </button>
          </div> 
        ))}
      </div>

      <Modal show={showModal} onHide={handleModal} aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedMenu.nama}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image 
            src={selectedMenu.image} 
            alt="logo"
            width={200}
            height={200}
            className="mx-auto d-block"
          />
          <p className='mt-3 d-flex justify-content-center'>{selectedMenu.deskripsi}</p>
          <h5 className='d-flex justify-content-center'>{selectedMenu.harga}</h5>
        </Modal.Body>
        <Modal.Footer className={styles.btn_cart}>
          <button className={styles.cart} onClick={handleAddToCart}>
            Tambahkan ke Cart
          </button>
        </Modal.Footer>
      </Modal>

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