import styles from '@styles/components/skeleton/PriceSkeleton.module.css'

interface Props {
  maxWidth?: string
}

export function PriceSkeleton ({ maxWidth = '350px' }: Props) {
  return (
    <>
      <article className={styles.container} style={{
        maxWidth
      }}>
        <header>
          <div className={`${styles.logo} ${styles.skeleton}`}></div>
          <div className={`${styles.headerElementsContainer}`}>
            <div className={`${styles.skeleton} ${styles.title}`}></div>
            <div className={`${styles.skeleton} ${styles.link}`}></div>
          </div>
        </header>
        <ul>
          <li>
            <div className={`${styles.skeleton} ${styles.itemList}`}>
            </div>
            <div className={`${styles.skeleton} ${styles.itemList}`}>
            </div>
          </li>
          <li>
            <div className={`${styles.skeleton} ${styles.itemList}`}>
            </div>
            <div className={`${styles.skeleton} ${styles.itemList}`}>
            </div>
          </li>
          <li>
            <div className={`${styles.skeleton} ${styles.itemList}`}>
            </div>
            <div className={`${styles.skeleton} ${styles.itemList}`}>
            </div>
          </li>
        </ul>
        <footer>
          <div className={`${styles.skeleton} ${styles.rase}`}></div>
          <div className={`${styles.skeleton} ${styles.action}`}></div>
        </footer>
      </article>
    </>
  )
}
