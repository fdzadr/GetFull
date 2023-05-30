import Image from 'next/image';
import styles from '@/styles/components/navback.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navback() {
    const router = useRouter();
    function Back() {
    router.back();
    }
    return (
        <>
        <nav class='navbar sticky-top'>
            <div class="container-fluid">
                <button onClick={Back} className={styles.header_back}>
                    <Image 
                        src="/aset/restaurant/backtopleft.svg" 
                        alt="logo"
                        width={30}
                        height={30}
                        className="back"
                    />
                </button>

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

            </div>
        </nav>
        </>
    )
}