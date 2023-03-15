import { useState } from "react";
import { items } from "/public/data/carousel";
import { Carousel } from "react-bootstrap";
import Image from 'next/image';
import styles from '@/styles/components/homepage/carousel.module.css';

export default function Carousels() {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {items.map((item) => (
        <Carousel.Item key={item.id} interval={4000}>
            <Image 
                src={item.imageUrl} 
                alt="logo google"
                width={320}
                height={120}
                className={styles.img_carousel}
            />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}