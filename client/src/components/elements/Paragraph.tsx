import styles from '@styles/components/elements/Paragraph.module.css'

interface Props {
  children: React.ReactNode
}

export function Paragraph ({ children }: Props) {
  return (
    <>
      <p className={styles.paragraph}>
        {children}
      </p>
    </>
  )
}
