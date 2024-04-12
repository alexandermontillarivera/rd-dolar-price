import styles from '@styles/pages/Home.module.css'
import { PriceCard } from '@components/cards/PriceCard'
import { usePricesList } from '@hooks/usePricesList'
import { Grid } from '@components/container/Grid'
import { PriceSkeleton } from '@components/skeletons/PriceSkeleton'
import { Hero } from '@components/box/Hero'

function HomePage () {
  const { prices, createActionCard, loading, arrayLoadingSkeleton, error } = usePricesList()

  return (
    <>
    <Hero
      imagesUrls={['/dominican-flag.png', '/dollar-symbol.png']}
      title='Verifica los precios del dolar cotizado por diferentes entidades financieras en la República Dominicana'
    />
      <section className={`${styles.sectionPrices} ${error ? styles.errorContent : ''}`}>
        {
          <h2 className={`${loading && styles.hiddenTitle}`}>
            {error ? 'Error al cargar los precios' : 'Precios del dolar'}
          </h2>
        }
        {
          (error && !loading) && (
            <div className={styles.error}>
              <img src="/error.png" alt="Error al cargar los servicios" />
              <p>Hubo un error al cargar los precios, por favor intenta de nuevo más tarde.</p>
            </div>
          )
        }
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
