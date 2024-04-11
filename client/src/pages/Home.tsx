import styles from '@styles/pages/Home.module.css'
import { PriceCard } from '@components/cards/PriceCard'
import { usePricesList } from '@hooks/usePricesList'
import { Grid } from '@/components/container/Grid'

function HomePage () {
  const { prices, createActionCard } = usePricesList()

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
      <Grid maxGridWidth='1fr' minGridWidth='300px' gap='20px' margin='0px auto' maxWidth='1400px'>
        {prices.map((price) => (
          <PriceCard
            key={price.id}
            title={price.entity}
            buyPrice={price.buy}
            logo={price.logo}
            priceRise={price.priceRise}
            priceRisePercentage={price.priceRisePercentage}
            sellPrice={price.sell}
            spreed={price.spreed}
            url={price.url}
            buttonAction={createActionCard(price.id)}
          />
        ))}
      </Grid>

    </>
  )
}

export default HomePage
