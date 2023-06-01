import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { data } = req.body;

    const checkoutData = 'export const checkout = [{}];'; 

    const checkoutFilePath = path.join(process.cwd(), 'public/data/checkout.js');
    const checkoutFileContent = `export const checkout = ${data};`;

    // const mergedData = `export const checkout = ${checkoutFileContent.replace('export const checkout = [{}];', '')}${data}`;

    fs.writeFile(checkoutFilePath, checkoutFileContent, (err) => {
      if (err) {
        console.error('Terjadi kesalahan saat menulis file checkout.js:', err);
        res.status(500).json({ message: 'Terjadi kesalahan saat menulis file checkout.js' });
      } else {
        console.log('Data checkout berhasil ditulis ke file checkout.js');
        res.status(200).json({ message: 'Data checkout berhasil disimpan' });
      }
    });
  } else {
    res.status(405).json({ message: 'Metode HTTP yang digunakan tidak diizinkan' });
  }
}
