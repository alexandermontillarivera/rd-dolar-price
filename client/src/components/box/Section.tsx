import styles from '@styles/components/box/Section.module.css'

interface Props {
  title: string
  children: React.ReactNode
}

export function Section ({ title, children }: Props) {
  return (
    <>
      <section className={styles.container}>
        <h2>
          {title}
        </h2>
        {children}
      </section>
    </>
  )
}
