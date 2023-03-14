import styles from '@/styles/components/homepage/searchbox.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Seachbox() {
    return (
        <>
            <div className={styles.search_box}>
                <button className={styles.search_icon}>
                    <Image 
                        src="/aset/search box aset/search_icon.svg" 
                        alt="logo google"
                        width={25}
                        height={25}
                    />
                </button>
                            
                <input className={styles.search_form} type="text" placeholder='Cari...'/>

                <button className={styles.search_setting}>
                    <Image 
                        src="/aset/search box aset/search_setting.svg" 
                        alt="logo google"
                        width={25}
                        height={25}
                    />
                </button>
            </div>
        </>
    )
}