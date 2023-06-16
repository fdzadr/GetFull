import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'public/data/cart.js');

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { restaurantId, namaRestaurant, alamat, menuId, namaMenu, harga } = req.body;

    const cartItem = {
      restaurantId: parseInt(restaurantId),
      namaRestaurant,
      alamat,
      menuId: parseInt(menuId),
      namaMenu,
      harga: parseInt(harga),
    };

    let data = [];
    try {
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const match = fileContent.match(/export const carts = (.+);/);
      if (match && match.length > 1) {
        data = JSON.parse(match[1]);
      }
    } catch (error) {
      console.error('Error reading cart data:', error);
    }

    data.push(cartItem);

    fs.writeFile(filePath, `export const carts = ${JSON.stringify(data)};`, (error) => {
      if (error) {
        console.error('Error adding item to cart:', error);
        res.status(500).json({ error: 'Failed to add item to cart' });
      } else {
        console.log('Item added to cart:', cartItem);
        res.status(200).json({ message: 'Item added to cart' });
      }
    });
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
