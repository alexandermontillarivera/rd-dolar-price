import type { ListItem } from '@contracts/ListAnchors'
import styles from '@styles/components/list/ListAnchors.module.css'

interface Props {
  items?: ListItem[]
  external?: boolean
}

export function ListAnchors ({ items = [], external = true }: Props) {
  return (
    <>
      <ul className={styles.list}>
        {items.map(({ id, text, title, url }) => (
          <li key={id}>
            <a href={url}
              title={title}
              target={external ? '_blank' : undefined}
              rel={external ? 'noreferrer' : undefined}
            >
              {text}
            </a>
          </li>
        ))
        }
      </ul>
    </>
  )
}
