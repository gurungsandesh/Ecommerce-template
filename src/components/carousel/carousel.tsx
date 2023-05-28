'use client'

import { CSSProperties } from 'react';
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import styles from "./carousel.module.scss";
import CarouselCard, { CarouselCardProps } from './carouselCard';

const ImageStyle: CSSProperties = {
    maxInlineSize: "100%",
    blockSize: "auto",
}


export interface CarouselProps {
    carouselItems: CarouselCardProps[]
    normalCarousel: boolean
}

const responsive: any = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 4
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2
    }
};


const CustomButtonGroup = ({ next, previous }: any) => {
    return (
        <div className={styles.carousel__button} >
            <div onClick={() => previous()} className={styles.carousel__button__left} style={{ fontWeight: 'bold' }} ><BsArrowLeftCircle color={"#EE19D8"} /></div>
            <div onClick={() => next()} className={styles.carousel__button__right} style={{ fontWeight: 'bold' }}><BsArrowRightCircle color={'#EE19D8'} /></div>
        </div>
    );
};


const CarouselMultiItem = ({ carouselItems, normalCarousel }: CarouselProps) => {
    return (
        <div className={styles.carousel__container}>
            <Carousel
                responsive={responsive}
                infinite={true}
                containerClass={styles.carousel}
                itemClass={styles.carousel__item}
                customLeftArrow={<></>}
                customRightArrow={<></>}
                customButtonGroup={<CustomButtonGroup />}
            >
                {
                    carouselItems.map((item: CarouselCardProps) => <div key={item.title}>
                        <CarouselCard category={item.category} price={item.price} title={item.title} review={item.review} normalCard={normalCarousel} />
                    </div>

                    )
                }

            </Carousel>
        </div >
    )
}

export default CarouselMultiItem