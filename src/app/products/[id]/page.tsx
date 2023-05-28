"use client"

import { fetchDataById } from '@/service/fetchData'
import Image from 'next/image'
import { CSSProperties, useEffect, useState } from 'react'
import styles from "./singleProduct.module.scss"
import CarouselMultiItem from '@/components/carousel/carousel'
import { CarouselCardProps } from '@/components/carousel/carouselCard'

const ImageStyle: CSSProperties = {
    maxInlineSize: "100%",
    blockSize: "auto",
}

const carouselItem: CarouselCardProps[] = [
    {
        category: "Headphone",
        price: "100",
        review: 5,
        title: 'Samsung Headphone'
    },
    {
        category: "Headphone",
        price: "100",
        review: 5,
        title: 'Samsung Headphone'
    },
    {
        category: "Headphone",
        price: "100",
        review: 5,
        title: 'Samsung Headphone'
    },
    {
        category: "Headphone",
        price: "100",
        review: 5,
        title: 'Samsung Headphone'
    },
    {
        category: "Headphone",
        price: "100",
        review: 5,
        title: 'Samsung Headphone'
    },
    {
        category: "Headphone",
        price: "100",
        review: 5,
        title: 'Samsung Headphone'
    },
]



const SingleProduct = ({ params }: any) => {

    const [productData, setProductData] = useState<productProps>();
    const [carouselData, setCarouselData] = useState<CarouselCardProps[]>([])

    const getProductData = async (productId: string) => {
        const res = await fetchDataById(productId)

        if (res) {
            setProductData(res)
            CarouselDataSet(res)
        }
    }

    const CarouselDataSet = (data: productProps) => {
        if (data.images) {
            let imageList = data.images.map((imageLink: string) => ({
                image: imageLink
            }))
            setCarouselData(imageList)
        }
    }

    useEffect(() => {
        getProductData(params.id)
    }, [])


    return (
        <div className={styles.product__container}>
            <div className={styles.product__container__title}>
                Product Details
            </div>
            <div className={styles.product__container__productName}>
                {productData?.brand}
            </div>
            <div className={styles.product__container__productCard}>
                <div className={styles.product__container__productCard__image}>
                    <Image
                        src={"/thumbnail.svg"}
                        alt='product-image'
                        fill={true}
                        style={ImageStyle}
                        priority={true}
                    />
                </div>
                <div className={styles.product__container__productCard__details}>
                    <div className={styles.product__container__productCard__name}>
                        {productData?.title}
                    </div>
                    <div className={styles.product__container__productCard__star}>
                        <Image src={"/rating.svg"} alt='heart' width={100} height={18} priority={true} />
                    </div>
                    <div className={styles.product__container__productCard__description}>
                        {productData?.description}
                    </div>
                    <div className={styles.product__container__productCard__price}>
                        Price: Rs {productData?.price}
                    </div>
                    <div className={styles.product__container__productCard__discount}>
                        Discount: {productData?.discountPercentage}%
                    </div>
                </div>
            </div>

            <div className={styles.product__container__carousel}>
                <CarouselMultiItem carouselItems={carouselItem} normalCarousel></CarouselMultiItem>
            </div>

        </div>
    )
}

export default SingleProduct