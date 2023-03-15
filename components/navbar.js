import Image from 'next/image';
import styles from '@/styles/components/navbar.module.css';
import Link from 'next/link';

export default function Navbar() {
    return (
        <>
        <nav class='navbar sticky-top'>
            <div class="container-fluid">
                <div className={styles.logo_getfull}>
                    <Link href="/homepage">
                    <Image 
                    src="/aset/logo nav/Getfull.svg" 
                    alt="logo"
                    width={90}
                    height={35}
                    />
                    </Link>
                </div>

                <div className={styles.logo_profile}>
                    <Link href="/setting">
                    <Image 
                    src="/aset/logo nav/profile.svg" 
                    alt="logo"
                    width={40}
                    height={40}
                    />
                    </Link>
                </div>
            </div>
        </nav>
        </>
    )
}