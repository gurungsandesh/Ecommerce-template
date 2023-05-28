'use client';

import Image from 'next/image';

import { useRouter } from 'next/navigation';
import { CSSProperties, useState } from 'react';
import styles from './ProductCard.module.scss';

const ImageStyle: CSSProperties = {
    maxInlineSize: "100%",
    blockSize: "auto",
}


const ProductCard = ({ brand, title, id }: productProps) => {

    const [showHeart, setShowHeart] = useState<boolean>(false);
    const router = useRouter();

    const handleClickHeartButton = (e: React.MouseEvent<HTMLDivElement>) => {
        setShowHeart(prevValue => prevValue ? false : true)
    }

    const handleClickCard = () => {
        if (id) {
            router.push(`/products/${id}`);
        } else {
            router.push(`/products/${1}`);
        }
    }

    return (
        <div className={styles.card} >
            <div className={styles.card__top}>
                <div className={styles.card__top__brand}>{brand}</div>
                <div className={styles.card__top__heart__image} onClick={handleClickHeartButton}>
                    <Image src={showHeart ? "/redHeart.svg" : "/heart.svg"} alt='heart' fill={true} priority={false} style={ImageStyle} />
                </div>
            </div>

            <div className={styles.card__middle}>
                <div className={styles.card__middle__product__image}>
                    <Image
                        src={"/thumbnail.svg"}
                        alt='product-image'
                        fill={true}
                        style={ImageStyle}
                        priority={true}
                    />
                </div>
                <div className={styles.card__middle__title}>{title}</div>
            </div>

            <div className={styles.card__bottom} onClick={() => handleClickCard()}>
                <div className={styles.card__bottom__button}>
                    <span className={styles.card__bottom__button__name}>
                        View
                    </span>
                    <div className={styles.card__bottom__button__image}>
                        <Image
                            src={"/arrowCircle.svg"}
                            alt='product-image'
                            height={40}
                            width={40}
                            priority={false}
                        />
                    </div>
                </div>


            </div>

            <div className={`${styles.card__redheart} ${showHeart ? styles.animateBigRedHeart : ""}`}>
                <Image src={"/redHeart.svg"} alt='heart' height={200} width={200} priority={false} />
            </div>

        </div>
    )
}

export default ProductCard