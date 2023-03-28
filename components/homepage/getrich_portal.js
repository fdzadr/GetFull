import styles from '@/styles/components/homepage/getrich_portal.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Portal() {
    return (
        <>
        <div className={styles.getrich}>
            <div className={styles.saldo}>
                <Link href="#">
                <button className={styles.getrich_saldo_btn}>
                    GetRich
                    <br></br>
                    <span>Rp.1000</span>
                </button>
                </Link>
            </div>

            <div className={styles.arr_btn_container}>
                <div className={styles.arr_btn}>
                    <Link href="#">
                    <button className={styles.getrich_arr_icon}>
                        <Image 
                            src="/aset/getrich portal/reward.svg" 
                            alt="logo transfer"
                            width={20}
                            height={20}
                        />
                    </button>
                    </Link>
                    <span className={styles.label}>Reward</span>
                </div>

                <div className={styles.arr_btn}>
                    <Link href="#">
                    <button className={styles.getrich_arr_icon}>
                        <Image 
                            src="/aset/getrich portal/topup.svg" 
                            alt="logo transfer"
                            width={20}
                            height={20}
                        />
                    </button>
                    </Link>
                    <span className={styles.label}>Top Up</span>
                </div>

                <div className={styles.arr_btn}>
                    <Link href="#">
                    <button className={styles.getrich_arr_icon}>
                        <Image 
                            src="/aset/getrich portal/transfer.svg" 
                            alt="logo transfer"
                            width={20}
                            height={20}
                        />
                    </button>
                    </Link>
                    <span className={styles.label}>Transfer</span>
                </div>
            </div>
        </div>
        </>
    )
}