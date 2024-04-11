import { type Icon123 } from '@tabler/icons-react'
import styles from '@styles/components/buttons/Button.module.css'

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  text: string
  Icon?: typeof Icon123
}

export function Button ({ Icon, text, ...rest }: Props) {
  return (
    <>
      <button
        className={styles.button}
        {...rest}
      >
        {
          (Icon != null) &&
          <Icon />
        }
        <span>
          {text}
        </span>
      </button>
    </>
  )
}
