"use client"

import ProductCard from '@/components/productCard/productCard';
import { fetchAllCategories, fetchAllData, fetchDataByCategories } from '@/service/fetchData';
import { useEffect, useState } from 'react';
import styles from './products.module.scss';


const Page = () => {

    const [activeProductList, setActiveProductList] = useState<productProps[]>([])
    const [allCategories, setAllCategories] = useState<string[]>(["All"])
    const [currentCategories, setCurrentCategories] = useState<string>("All")

    const fetchData = async () => {
        const res = await fetchAllData();
        if (res) {
            setActiveProductList(res.products)
        }
    }

    useEffect(() => {
        fetchCategories();
        if (currentCategories === "All") {
            fetchData()
        } else {
            handleFetchByCategories(currentCategories)
        }
    }, [currentCategories])


    const fetchCategories = async () => {
        const res = await fetchAllCategories();

        if (res && (res.length > 0)) {
            setAllCategories(prevValue => prevValue ? [...res, "All"] : [])
        }
    }

    const handleFetchByCategories = async (category: string) => {
        const res = await fetchDataByCategories(category);
        if (res) {
            setActiveProductList(res.products)
            // setDataList(dataList)
        }
    }

    const handleCategoryChange = (e: any) => {
        setCurrentCategories(e.target.value)
    }

    return (
        <div className={styles.product__container}>

            <div className={styles.product__container__main__title} >
                Prodcuts
            </div>

            <div className={styles.product__container__category}>
                <div className={styles.product__container__title} >
                    {`${">>"} ${currentCategories}`}
                </div>
                <select name="cars" id="cars" className={styles.product__container__select} onChange={handleCategoryChange}>
                    {
                        allCategories?.map((val: string) => (
                            <option value={val} key={val}>{val}</option>
                        )
                        )
                    }
                </select>
            </div>

            <div className={styles.product__container__category__products}>
                {
                    activeProductList?.map((product: productProps) => (
                        <div key={product.id} className={styles.product__card}>
                            <ProductCard brand={product.brand} title={product.title} id={product.id} />

                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Page