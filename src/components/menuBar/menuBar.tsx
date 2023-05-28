'use client';

import { useWindowWidth } from '@/hooks/useWindowWidth';
import Image from 'next/image';
import Link from 'next/link';
import React, { CSSProperties, useEffect, useRef, useState } from 'react';
import styles from './menuBar.module.scss';

const ImageStyle: CSSProperties = {
    maxInlineSize: "100%",
    blockSize: "auto",
}

const MenuBar = () => {

    const [showMenu, setShowMenu] = useState<boolean>(false);

    const selectHam = useRef<any>(null)


    const handleOnClickHam = (e: React.MouseEvent<HTMLElement>) => {
        setShowMenu(prevValue => prevValue ? false : true)
    }

    const breakpoints = useWindowWidth();

    useEffect(() => {
        if (breakpoints > 576) {
            setShowMenu(false)
        }
    }, [breakpoints])


    return (
        <>
            <div className={`${styles.navbar__hamburger}  `} onClick={handleOnClickHam} ref={selectHam} >
                <Image src={showMenu ? "/arrowNavbarOpen.svg" : "/arrowNavbarClose.svg"} fill={true} alt='ham' style={ImageStyle} />
            </div>
            <div className={`${styles.navbar} ${showMenu ? styles.opacity__zero : ""}`}>
                <div className={styles.navbar__logo}>
                    <Image src={"/logo.svg"} alt="logo" fill={true} style={ImageStyle}></Image>
                </div>
                <ul className={`${styles.navbar__hamburger__nav}  ${showMenu ? styles.opacity__zero : ""}`} >
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/products">Products</Link>
                    </li>
                </ul>
            </div >
        </>
    )
}

export default MenuBar