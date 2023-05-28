
import styles from './textDropAnimation.module.scss'

const TextDropAnimation = ({ text, children }: textList) => {
    return (
        <div className={styles.text__drop}>
            <div>
                {
                    text.map((val: string) => (
                        <div className={styles.text__drop__single__text} key={val}>
                            {val}
                        </div>
                    ))
                }
            </div>
            <div className={styles.text__drop__subheading}>
                {children[0]}
            </div>
            <div className={styles.text__drop__viewAll}>
                {children[1]}
            </div>
        </div >
    )
}

export default TextDropAnimation