import { useState, useEffect } from 'react';
import { carts } from '/public/data/cart';
import styles from '@/styles/cart/cart_info.module.css';

export default function CartPage() {
  const [cartData, setCartData] = useState([]);
  const [totalHarga, setTotalHarga] = useState(0);

  useEffect(() => {
    setCartData(carts);
  }, []);

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

  return (
    <div>
      {Object.keys(groupByRestaurant).length === 0 ? (
        <div className='position-absolute top-50 start-50 translate-middle w-75 text-center'>
          <h1>Waduh nggak ada apa-apa nich</h1>
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
        </div>
      )}
    </div>
  );
}
