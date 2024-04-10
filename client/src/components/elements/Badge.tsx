import { type Icon123 } from '@tabler/icons-react'
import styles from '@styles/components/elements/Badge.module.css'

interface Props {
  text: string
  Icon?: typeof Icon123
  type?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'
}

export function Badge ({ text, type = 'primary', Icon }: Props) {
  return (
    <>
      <span className={`${styles[type]} ${styles.badge}`}>
        {
          Icon != null && (
            <Icon className={styles.icon} stroke={1} size={30} />
          )
        }
        {text}
      </span>
    </>
  )
}
