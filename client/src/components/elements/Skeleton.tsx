import styles from '@styles/components/elements/Skeleton.module.css'

interface Props {
  width?: string
  height?: string
  borderRadius?: string
}

export function Skeleton ({ height = '20px', width = '100%', borderRadius = '5px' }: Props) {
  return (
    <>
      <div className={styles.skeleton} style={{
        height,
        width: '100%',
        borderRadius,
        maxWidth: width
      }} />
    </>
  )
}
