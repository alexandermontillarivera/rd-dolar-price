import styles from '@styles/components/cards/PriceCalendar.module.css'
import { Badge } from '@components/elements/Badge'

interface Props {
  title: string
  logo: string
  url: string
  buyPrice: number
  sellPrice: number
  priceRise: boolean | null
  priceRisePercentage: number
  id: string
  spreed: number
}

export function PriceCard ({ buyPrice, logo, priceRise, priceRisePercentage, sellPrice, title, url, spreed }: Props) {
  const { host } = new URL(url)
  return (
    <>
      <article className={styles.card}>
        <header>
          <img src={logo} alt={`Logo de ${title}`} />
          <div>
            <h3>
              {title}
            </h3>
            <a href={url} target='_blank' rel="noreferrer">
              {host}
            </a>
          </div>
        </header>
        <ul>
          <li>
            <strong>
              Compra
            </strong>
            <span>
              ${buyPrice}
            </span>
          </li>
          <li>
            <strong>
              Venta
            </strong>
            <span>
              ${sellPrice}
            </span>
          </li>
          <li>
              <strong>
                Diferencia
              </strong>
              <span>
                {spreed}
              </span>
            </li>
        </ul>
        <footer>
        </footer>
      </article>
    </>
  )
}
