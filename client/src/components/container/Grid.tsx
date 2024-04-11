interface Props {
  children: React.ReactNode
  maxWidth: string
  minGridWidth: string
  maxGridWidth: string
  justifyContent: string
  alignItems: string
  gap: string
  margin: string
}

export function Grid ({ children, maxGridWidth = '1fr', minGridWidth = '1fr', gap = '1rem', justifyContent = 'space-between', maxWidth = '1200px', margin = '0px', alignItems = 'inherit' }: Partial<Props>) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: `repeat(auto-fill, minmax(${minGridWidth}, ${maxGridWidth}))`,
      gap,
      width: '100%',
      justifyContent,
      maxWidth,
      margin,
      alignItems
    }}>
      {children}
    </div>
  )
}
