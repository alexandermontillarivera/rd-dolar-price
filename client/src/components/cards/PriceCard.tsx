import styles from '@styles/components/cards/PriceCalendar.module.css'
import { Button } from '../buttons/Button'
import {
  IconTrendingDown,
  IconTrendingUp,
  IconArrowRight
} from '@tabler/icons-react'
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

  const riseTexts = {
    up: 'Subió',
    down: 'Bajó',
    equal: 'Igual'
  } as const

  const riseClassess = {
    up: styles.up,
    down: styles.down,
    equal: styles.equal
  } as const

  const riseIcons = {
    up: IconTrendingUp,
    down: IconTrendingDown,
    equal: IconArrowRight
  } as const

  const rise = priceRise === null ? 'equal' : priceRise ? 'up' : 'down'

  const Icon = riseIcons[rise]

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
          <p className={`
            ${riseClassess[rise]}
            ${styles.rise}
          `}>
            <Icon stroke={1} />
            {
              riseTexts[rise] + ' ' + priceRisePercentage + '%'
            }
          </p>
          <Button text='Focus' />
        </footer>
      </article>
    </>
  )
}
