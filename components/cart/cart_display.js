import Link from 'next/link';
import Image from "next/image";
import styles from '@/styles/cart/cart_display.module.css';
import  {carts}  from "public/data/cart";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { useRouter } from 'next/router';
import styles2 from '@/styles/cartfe.module.css'



export default function cart() {
  
    const [cartData, setCartData] = useState([]);
    const [totalHarga, setTotalHarga] = useState(0);
    const router = useRouter();

    useEffect(() => {
        setCartData(carts);
      }, []);
      console.log(cartData)
    
    useEffect(() => {
        if (cartData && cartData.length > 0) {
          let total = 0;
          cartData.forEach((item) => {
            total += item.harga;
          });
          setTotalHarga(total);
        }
    }, [cartData]);

    const calculateTotalHarga = (items) => {
      if (items && items.length > 0){
        let total = 0;
        items.forEach((item) => {
          total += item.harga;
        });
        return total;
      }
      return 0;
    };

    const groupByRestaurant =
    cartData && cartData.length > 0
      ? cartData.reduce((acc, item) => {
          const { restaurantId } = item;
          if (acc[restaurantId]) {
            acc[restaurantId].push(item);
          } else {
            acc[restaurantId] = [item];
          }
          return acc;
        }, {})
    : {};

    // const handleCheckout = () => {
    //     if (cartData && cartData.length === 0) {
    //       console.log('Keranjang kosong');
    //       return;
    //     }
    
    // const checkoutData = JSON.stringify(cartData);

    // fetch('/api/addCheckout', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ data: checkoutData }),
    //   })
    //     .then((response) => response.json())
    //     .then((data) => {
    //       console.log('Data checkout berhasil disimpan:', data);
    //       localStorage.removeItem('cartItems');
    //       setCartData([]);
    //       setTotalHarga(0);
    //       router.push('/cart/order');
    //     })
    //     .catch((error) => {
    //       console.error('Terjadi kesalahan saat checkout:', error);
    //     });
    // };
    

    const handleCheckout = (restaurantId) => {
      const restaurantCartData = cartData.filter(item => item.restaurantId === restaurantId);
    
      if (!restaurantCartData || restaurantCartData.length === 0) {
        console.log('Keranjang kosong');
        return;
      }
    
      const checkoutData = JSON.stringify(restaurantCartData);
    
      fetch('/api/addCheckout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: checkoutData }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Data checkout berhasil disimpan:', data);
          localStorage.removeItem('cartItems');
          setCartData(cartData.filter(item => item.restaurantId !== restaurantId));
          setTotalHarga(totalHarga - calculateTotalHarga(restaurantCartData));
          router.push('/cart/order');
        })
        .catch((error) => {
          console.error('Terjadi kesalahan saat checkout:', error);
        });
    };
    
  
    const handleClearCart = (restaurantId) => {
      const updatedCartData = cartData.filter(item => item.restaurantId !== restaurantId);
      setCartData(updatedCartData);
      setTotalHarga(0);
      
    };

    return (
        <div>
            {!cartData || cartData.length === 0 ? (
                <div className='position-absolute top-50 start-50 translate-middle w-75 text-center'>
            <h1>Waduh, keranjang lagi kosong nih!</h1>
                </div>
            ) : (
                <div>
                  {Object.entries(groupByRestaurant).map(([restaurantId, items]) => (
                    <div className={styles.container}>
                      <div className={styles.resto}>
                        <div key={restaurantId}>
                        <p>{items[0].namaRestaurant}</p>
                        </div>
                      </div>
                      {items.map((item, index) => (
                          <div className={styles.menu} key={item.id}>
                            <Image 
                            src={item.image}
                            alt="logo"
                            width={50}
                            height={50}
                            className={styles.img}
                            />
                                <div key={item.menuId}>
                                    <p>Menu: {item.namaMenu}</p>
                                    <p>Harga: {item.harga}</p>
                                </div>
                          </div>
                      ))}
                      {cartData && cartData.length > 0 && (
                          <div className={styles2.foot}>
                            <p>Total Harga: {calculateTotalHarga(items)}</p>
                            <button className={styles2.cekout} onClick={() => handleCheckout(items[0].restaurantId)}>Checkout</button>
                            <button className={styles2.clear} onClick={() => handleClearCart(items[0].restaurantId)}>Clear</button>
                          </div>
                      )}
                    </div>
                  ))}
                </div>
            )}
        
        </div>
    )
}
