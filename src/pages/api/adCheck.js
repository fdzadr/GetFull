import fs from 'fs';
import path from 'path';

export const checkout = [];

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { restaurantId, namaRestaurant, menuId, namaMenu, harga } = req.body;

    const filePath = path.join(process.cwd(), 'public/data/checkout.js');
    let data = [];

    try {
      const fileContent = fs.readFileSync(filePath, 'utf8');
      data = JSON.parse(fileContent);
    } catch (error) {
      console.error('Error reading cart data:', error);
    }

    data.push({
      restaurantId,
      namaRestaurant,
      menuId,
      namaMenu,
      harga,
    });

    try {
      fs.writeFileSync(filePath, `export const checkout = ${JSON.stringify(data)};`);
      console.log('Item added to cart:', restaurantId, namaRestaurant, menuId, namaMenu, harga);
      res.status(200).json({ message: 'Item added to cart' });
    } catch (error) {
      console.error('Error adding item to cart:', error);
      res.status(500).json({ error: 'Failed to add item to cart' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
