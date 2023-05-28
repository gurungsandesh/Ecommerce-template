"use client"

import CarouselMultiItem from '@/components/carousel/carousel'
import { CarouselCardProps } from '@/components/carousel/carouselCard'
import ProductCard from '@/components/productCard/productCard'
import TextDropAnimation from '@/components/textDropAnimation/textDropAnimation'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { CSSProperties } from 'react'
import styles from './page.module.scss'


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


export default function Home() {

  const router = useRouter();
  const handleClickViewAll = () => {
    router.push("/products")
  }

  return (
    <main className={styles.main__container}>
      <TextDropAnimation text={["L", "o", "g", "o", "E", "l", "e", "c", "t", "r", "o", "n", "i", "c", "s"]}>
        <div className={styles.main__container__subheading}>
          The techies you love
        </div>
        <div className={styles.main__container__viewAll}>
          <span className={styles.main__container__viewAll__title} onClick={() => handleClickViewAll()}>
            view all products
          </span>
          <div className={styles.main__container__viewAll__img}>
            <Image src={"/pinkGradientArrow.svg"} alt="logo" fill={true} style={ImageStyle}></Image>
          </div>
        </div>
      </TextDropAnimation>

      <CarouselMultiItem carouselItems={carouselItem} normalCarousel={false} />

      <div className={styles.main__container__products}>
        Products
      </div>

      <div className={styles.main__container__products__container}>
        <div className={styles.product__card}>
          <ProductCard />
        </div>
        <div className={styles.product__card}>
          <ProductCard />
        </div>
        <div className={styles.product__card}>
          <ProductCard />
        </div>
        <div className={styles.product__card}>
          <ProductCard />
        </div>
        <div className={styles.product__card}>
          <ProductCard />
        </div>
        <div className={styles.product__card}>
          <ProductCard />
        </div>
      </div>

    </main>
  )
}
