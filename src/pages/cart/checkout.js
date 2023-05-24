import { checkout } from '/public/data/checkout.js';

export default function CheckoutPage() {
  const adminFee = 2;
  const shippingCost = 2;
  const totalBefore = checkout ? checkout.reduce((total, item) => total + item.harga, 0) : 0;
  const totalAfter = totalBefore + adminFee + shippingCost;

  return (
    <div>
      {!checkout || checkout.length === 0 ? (
        <p>Tidak ada item dalam keranjang</p>
      ) : (
        <div>
          {checkout.map((item) => (
            <div key={item.menuId}>
              <p>Menu: {item.namaMenu}</p>
              <p>Harga: {item.harga}</p>
            </div>
          ))}
          <button>Pilih Promo</button>
          <h2>Sub Total: {totalBefore}</h2>
          <p>Admin: {adminFee}</p>
          <p>Ongkir: {shippingCost}</p>
          <h2>Total Harga: {totalAfter}</h2>
          <button>Checkout</button>
        </div>
      )}
    </div>
  );
}
