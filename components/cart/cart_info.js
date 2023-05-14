import Link from 'next/link';
import Image from 'next/image';
import Restaurant from 'components/restaurant/restaurant_display';
import { restaurants } from "public/data/restaurants";

export default function CartInfo() {
    return (
        <>
        <div class="d-flex flex-column">
            <div class="p-2">
                <Restaurant/>
            </div>

            <div class="p-2">Flex item 2</div>
            <div class="p-2">Flex item 3</div>
        </div>
        </>
    )
}