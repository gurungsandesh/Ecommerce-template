import MenuBar from '@/components/menuBar/menuBar'
import { Poppins } from 'next/font/google'
import Image from 'next/image'
import { CSSProperties } from 'react'
import bgFooter from '../../public/circuit-two.png'
import bg from '../../public/circuit-width.png'
import './globals.scss'
import styles from './layout.module.scss'

import { AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillTwitterSquare } from 'react-icons/ai'


export const metadata = {
  title: 'Task',
}

const poppins = Poppins({
  subsets: ['latin'],
  weight: "400"
})

const ImageStyle: CSSProperties = {
  maxInlineSize: "100%",
  blockSize: "auto",
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <header>
          <MenuBar />
        </header>
        <section className={styles.cta}>
          <div className={styles.cta__image__top} style={{ background: `url(${bg.src})` }}>
          </div>
        </section>
        {children}

        <footer className={styles.footer}>
          <div className={styles.footer__image__bottom} style={{ background: `url(${bgFooter.src})` }} >
          </div>

          <div className={styles.footer__content}>
            <div className={styles.footer__content__description} >
              <div className={styles.footer__content__logo} >
                <Image src={"/logo.svg"} alt="logo" fill={true} style={ImageStyle}></Image>
              </div>
              <div className={styles.footer__description} >
                lOGO is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when
              </div>
            </div>

            <div className={styles.footer__links} >
              <div className={styles.footer__links__title}>
                Useful Links
              </div>

              <ul className={styles.footer__links__link}>
                <li>Home</li>
                <li>Product</li>
                <li>About Us</li>
                <li>Contact Us</li>
              </ul>
            </div>


            <div className={styles.footer__contacts} >
              <div className={styles.footer__links__title}>
                FOLLOW US ON
              </div>

              <ul className={styles.footer__links__link}>
                <li><AiFillFacebook color='#ffffff' /></li>
                <li><AiFillTwitterSquare color='#ffffff' /></li>
                <li><AiFillLinkedin color='#ffffff' /></li>
                <li><AiFillInstagram color='#ffffff' /></li>
              </ul>
            </div>
          </div>

          <div className={styles.footer__last}>
            COPYRIGT 2021 lOGO ALL RIGHT RESERVED
          </div>
        </footer>
      </body>
    </html>
  )
}
