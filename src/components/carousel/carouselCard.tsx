"use client"

import Image from 'next/image'
import { CSSProperties } from 'react'
import styles from './carouselCard.module.scss'



const ImageStyle: CSSProperties = {
    maxInlineSize: "100%",
    blockSize: "auto",
}

export type CarouselCardProps = {
    image?: string;
    category?: string;
    title?: string;
    price?: string;
    review?: number;
    normalCard?: boolean;
};

const CarouselCard = ({ category, price, review, title, normalCard, image }: CarouselCardProps) => {

    return (
        <div className={styles.carousel__card}>
            <div className={styles.carousel__card__image}>
                <Image src={image ? image : "/headphone.png"} alt='heart' width={100} height={140} priority={true} />
            </div>

            {
                !normalCard && <>
                    <div className={styles.carousel__card__category}>
                        {category}
                    </div>

                    <div className={styles.carousel__card__title}>
                        {title}
                    </div>

                    <div className={styles.carousel__card__price}>
                        ${price}.00
                    </div>

                    <div className={styles.carousel__card__rating}>
                        <Image src={"/rating.svg"} alt='heart' width={100} height={20} priority={true} />
                        ({"10"})
                    </div>
                </>
            }
        </div>

    )
}

export default CarouselCard