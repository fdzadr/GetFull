import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { carts } from '/public/data/cart';

export default function CartPage() {
  const [cartData, setCartData] = useState([]);
  const [totalHarga, setTotalHarga] = useState(0);
  const router = useRouter();

  useEffect(() => {
    setCartData(carts);
  }, []);

  useEffect(() => {
    if (cartData && cartData.length > 0) {
      let total = 0;
      cartData.forEach((item) => {
        total += item.harga;
      });
      setTotalHarga(total);
    }
  }, [cartData]);

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

  const handleCheckout = () => {
    if (cartData && cartData.length === 0) {
      console.log('Keranjang kosong');
      return;
    }

    const checkoutData = JSON.stringify(cartData);

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
        setCartData([]);
        setTotalHarga(0);
        router.push('/cart/checkout');
      })
      .catch((error) => {
        console.error('Terjadi kesalahan saat checkout:', error);
      });
  };

  const handleClearCart = () => {
    setCartData([]);
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
            <div key={restaurantId}>
              <p>Restaurant: {items[0].namaRestaurant}</p>
              {items.map((item, index) => (
                <div key={item.menuId}>
                  <p>Menu: {item.namaMenu}</p>
                  <p>Harga: {item.harga}</p>
                </div>
              ))}
            </div>
          ))}
          {cartData && cartData.length > 0 && (
            <div>
              <h2>Total Harga: {totalHarga}</h2>
              <button onClick={handleCheckout}>Checkout</button>
              <button onClick={handleClearCart}>Clear</button> {/* Tombol Clear */}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
