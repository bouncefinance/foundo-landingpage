import ProductCard from 'components/ProductCard'
import FundoInfo from 'components/FundoInfo'
import ArtistCard from 'components/ArtistCard'
import ArtistInfo from 'components/ArtistInfo'
import { Box } from '@mui/material'
import { useMemo } from 'react'
import { useIsSMDown } from '../../../../theme/useTheme'

export enum AnimateStep {
  'notShow' = 0,
  'enter' = 1,
  'leave' = 2,
  'rotate' = 3 // only partner component use this status
}
export default function ThreeCard({ animationRatio, step }: { animationRatio?: string; step: AnimateStep }) {
  const isSm = useIsSMDown()
  const transformStr = useMemo(() => {
    let result = 'translate3D(0, 0, 0)'
    switch (step) {
      case AnimateStep.enter:
        if (Number(animationRatio) < 0.2) {
          result = `translate3D(-${Number(animationRatio) * 2.5 * 70}%, 0, 0)`
        } else if (Number(animationRatio) >= 0.2 && Number(animationRatio) <= 0.5) {
          result = `translate3D(-${0.5 * 70}%, 0, 0)`
        } else if (Number(animationRatio) > 0.5) {
          result = `translate3D(-${Number(animationRatio) * 70}%, 0, 0)`
        }
        break
      case AnimateStep.leave:
        result = `translate3D(-70%, -${Number(animationRatio) * 100}vh, 0)`
        break
    }
    return result
  }, [step, animationRatio])
  return (
    <Box
      style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        marginTop: isSm ? '-180px' : '-320px',
        marginLeft: isSm ? '-129px' : '-229px',
        transform: transformStr,
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'flex-start',
        alignItems: 'center'
      }}
      gap={'120px'}
    >
      <ProductCard hideProduct={true} />
      <FundoInfo animationRatio={animationRatio} />
      <ArtistCard />
      <ArtistInfo />
    </Box>
  )
}
