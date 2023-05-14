import Image from 'next/image';
import styles from '@/styles/components/footer.module.css';
import Link from 'next/link';

export default function Navbar() {
    return (
        <>
        <footer class="fixed-bottom">
        <div className={styles.container}>
            <button className={styles.logo}>
                <Link href="/restaurant">
                <Image 
                    src="/aset/footer/resto.svg" 
                    alt="logo google"
                    width={40}
                    height={40}
                />
                </Link>
            </button>

            <button className={styles.logo}>
                <Link href="/homepage">
                <Image 
                    src="/aset/footer/home.svg" 
                    alt="logo google"
                    width={40}
                    height={40}
                />
                </Link>
            </button>

            <button className={styles.logo}>
                <Link href="/cart">
                <Image 
                    src="/aset/footer/cart.svg" 
                    alt="logo google"
                    width={40}
                    height={40}
                />
                </Link>
            </button>
        </div>
        </footer>
        </>
    )
}