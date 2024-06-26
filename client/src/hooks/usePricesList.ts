import { getPrices } from '@services/prices'
import { useNavigate } from 'react-router-dom'
import type { IPrice } from '@interfaces/Prices'
import { useGenerateArrayIds } from '@hooks/useGenerateArrayIds'
import { useState, useEffect } from 'react'

export const usePricesList = () => {
  const [prices, setPrices] = useState<IPrice[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<boolean>(false)

  const navigate = useNavigate()

  useEffect(() => {
    getPrices()
      .then((response) => {
        if (!response.ok) {
          setError(true)
          return
        }

        setPrices(response.data.prices)
      })
      .catch(() => {
        setError(true)
      })

      .finally(() => {
        setLoading(false)
      })
  }, [])

  const createActionCard = (id: string) => {
    return () => { navigate(`/prices/${id}`) }
  }

  const arrayLoadingSkeleton = useGenerateArrayIds(16)

  return {
    prices,
    loading,
    error,
    arrayLoadingSkeleton,
    createActionCard
  }
}
