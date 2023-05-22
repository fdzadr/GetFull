import Head from 'next/head';
import Navbar from '/components/navbar';
import Footer from '/components/footer';
import CartInfo from '/components/cart/cart_info'

export default function Cart() {
    return (
        <>
        <Navbar/>

        <main>
            <div className='container'>
                <CartInfo/>
            </div>
        </main>

        <Footer/>
        </>
    )
}