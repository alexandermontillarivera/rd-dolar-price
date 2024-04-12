import styles from '@styles/components/skeletons/PriceSkeleton.module.css'
import { Skeleton } from '@components/elements/Skeleton'

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
          <Skeleton width='120px' height='40px' />
          <div className={`${styles.headerElementsContainer}`}>
            <Skeleton height='14px' />
            <Skeleton height='12px' width='80%' />
          </div>
        </header>
        <ul>
          <li>
            <Skeleton />
            <Skeleton />
          </li>
          <li>
            <Skeleton />
            <Skeleton />
          </li>
          <li>
            <Skeleton />
            <Skeleton />
          </li>
        </ul>
        <footer>
          <Skeleton width='100px' />
          <Skeleton width='100px' height='30px' />
        </footer>
      </article>
    </>
  )
}
