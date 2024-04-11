import styles from '@styles/pages/Home.module.css'
import { PriceCard } from '@components/cards/PriceCard'
import { usePricesList } from '@hooks/usePricesList'
import { Grid } from '@/components/container/Grid'
import { PriceSkeleton } from '@components/skeleton/PriceSkeleton'

function HomePage () {
  const { prices, createActionCard, loading, arrayLoadingSkeleton, error } = usePricesList()

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
      <section className={styles.sectionPrices}>
        <h2>
          Precios del dolar
        </h2>
        <Grid maxGridWidth='1fr' minGridWidth='300px' gap='20px' margin='0px auto' maxWidth='1400px'>
          {loading && arrayLoadingSkeleton.map((id) => (
            <PriceSkeleton key={id} maxWidth='100%' />
          ))}

          {!error && !loading && prices.map((price) => (
            <PriceCard
              key={price.id}
              title={price.entity}
              logo={price.logo}
              buyPrice={price.buy}
              sellPrice={price.sell}
              buttonAction={createActionCard(price.id)}
              priceRise={price.priceRise}
              priceRisePercentage={price.priceRisePercentage}
              spreed={price.spreed}
              url={price.url}
              maxWidth='100%'
            />
          ))}

        </Grid>
      </section>

    </>
  )
}

export default HomePage
