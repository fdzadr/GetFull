import Image from 'next/image';
import styles from '@/styles/components/navbar.module.css';

export default function Navbar() {
    return (
        <>
        <nav class='navbar sticky-top'>
            <div class="container-fluid">
                <div className={styles.logo_getfull}>
                    <Image 
                    src="/aset/logo nav/Getfull.svg" 
                    alt="logo"
                    width={90}
                    height={35}
                    />
                </div>

                <div className={styles.logo_profile}>
                    <Image 
                    src="/aset/logo nav/profile.svg" 
                    alt="logo"
                    width={40}
                    height={40}
                    />
                </div>
            </div>
        </nav>
        </>
    )
}