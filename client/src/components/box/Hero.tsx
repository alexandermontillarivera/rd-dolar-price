import styles from '@styles/components/box/Hero.module.css'

interface Props {
  imagesUrls?: string[]
  title: string
  imagesWidth?: string
}

export function Hero ({ imagesUrls = [], title, imagesWidth = '100px' }: Props) {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.images}>
          {
            imagesUrls.map((url) => (
              <img src={url} key={url} width={imagesWidth} alt='Imagen del hero' />
            ))
          }
        </div>
        <h1>
          {title}
        </h1>
      </section>
    </>
  )
}
