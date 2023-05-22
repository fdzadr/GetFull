import fs from 'fs';
import path from 'path';

export const carts = [{}];

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { restaurantId, namaRestaurant, menuId, namaMenu, harga, } = req.body;

    const cartItem = {
        restaurantId: parseInt(restaurantId),
        namaRestaurant,
        menuId: parseInt(menuId),
        namaMenu,
        harga: parseInt(harga), 
    };

    const filePath = path.join(process.cwd(), 'public/data/cart.js');
    let data = [];

    try {
      const fileContent = fs.readFileSync(filePath, 'utf8');
      data = JSON.parse(fileContent);
    } catch (error) {

      console.error('Error reading cart data:', error);
    }
xxx
    data.push(cartItem);

    data = [...data, cartItem];

    try {
      fs.writeFileSync(filePath, `export const carts = ${JSON.stringify(data)};`);
      console.log('Item added to cart:', cartItem);
      res.status(200).json({ message: 'Item added to cart' });
    } catch (error) {
      console.error('Error adding item to cart:', error);
      res.status(500).json({ error: 'Failed to add item to cart' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
