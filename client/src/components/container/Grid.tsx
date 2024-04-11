import styles from '@styles/components/container/Grid.module.css'
interface Props {
  children: React.ReactNode
  maxWidth: string
  minGridWidth: string
  maxGridWidth: string
  justifyContent: string
  alignItems: string
  gap: string
  margin: string
  mobileMinGridWidth: string
  mobileMaxGridWidth: string
  mobileGap: string
}

export function Grid (props: Partial<Props>) {
  const {
    children,
    maxGridWidth = '1fr',
    minGridWidth = '1fr',
    gap = '1rem',
    justifyContent = 'space-between',
    maxWidth = '1200px',
    margin = '0px',
    alignItems = 'inherit',
    mobileGap = '1rem',
    mobileMaxGridWidth = '1fr',
    mobileMinGridWidth = '1fr'
  } = props

  return (
    <div
      className={styles.container}
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(auto-fill, minmax(${minGridWidth}, ${maxGridWidth}))`,
        gap,
        width: '100%',
        justifyContent,
        maxWidth,
        margin,
        alignItems
      }}
      data-min-mobile-width={mobileMinGridWidth}
      data-max-mobile-width={mobileMaxGridWidth}
      data-mobile-gap={mobileGap}
      >
      {children}
    </div>
  )
}
