import styles from '@styles/pages/Home.module.css'
import { PriceCard } from '@components/cards/PriceCard'

function HomePage () {
  return (
    <>
      <section className={styles.hero} style={{
        marginBottom: '2rem'
      }}>
        <div className={styles.images}>
          <img src="/dominican-flag.png" alt="Bandera dominicana" width="100px" />
          <img src="/dollar-symbol.png" alt="Simbolo dolar" width="100px" />
        </div>
        <h1>
          Verifica los precios del dolar cotizado por diferentes
          entidades financieras en la República Dominicana
        </h1>
      </section>

      <PriceCard
        title='Banco Popular Dominicano'
        buyPrice={56.50}
        sellPrice={57.50}
        priceRise
        priceRisePercentage={0.5}
        id='BPD'
        logo='http://localhost:3000/images/BPD.png'
        spreed={1}
        url='https://www.popularenlinea.com/'
        key={'BPD'}
      />
    </>
  )
}

export default HomePage
