import { Box, Typography } from '@mui/material'
import Diamond from 'components/assets/img/diamond.svg'
import { useIsSMDown } from '../../../theme/useTheme'

export default function FixedIndex({ style }: { style?: React.CSSProperties }) {
  const isSm = useIsSMDown()
  return (
    <Box
      sx={{
        position: 'absolute',
        width: '73px',
        top: '40%',
        right: isSm ? '0' : '-20px',
        transform: 'translate3D(0, -40%,0)',
        zIndex: 997,
        display: 'flex',
        flexFlow: 'column nowrap',
        justifyContent: 'flex-start',
        alignContent: 'center',
        ...style
      }}
    >
      <Typography
        sx={{
          fontWeight: 600,
          fontFamily: `'Public Sans'`,
          fontSize: isSm ? '22px' : '34px',
          marginBottom: isSm ? '10px' : '38px',
          color: 'var(--ps-text-5)',
          whiteSpace: 'nowrap',
          textAlign: 'center'
        }}
      >
        # 01
      </Typography>
      <Box
        sx={{
          width: '100%',
          height: '111px',
          background: `linear-gradient(340.18deg, rgba(255, 255, 255, 0.1) -24.06%, rgba(255, 255, 255, 0.015) 113.26%)`,
          border: `1px solid rgba(255, 255, 255, 0.2)`,
          backdropFilter: `blur(25px)`,
          borderRadius: '80px',
          overflow: 'hidden'
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: '47px',
            borderBottom: `1px solid rgba(255, 255, 255, 0.2)`,
            display: 'flex',
            flexFlow: 'row nowrap',
            justifyContent: 'center',
            alignContent: 'center',
            marginBottom: '6px'
          }}
        >
          <img
            src={Diamond}
            alt=""
            style={{
              width: '20px'
            }}
          />
        </Box>
        <Typography
          sx={{
            width: '100%',
            textAlign: 'center',
            fontFamily: `'Public Sans'`,
            fontWeight: 500,
            fontSize: '16px',
            color: '#fff'
          }}
        >
          19.21
        </Typography>
        <Typography
          sx={{
            width: '100%',
            fontFamily: `'Public Sans'`,
            textAlign: 'center',
            fontWeight: 400,
            fontSize: '12px',
            color: '#fff'
          }}
        >
          Carats
        </Typography>
      </Box>
    </Box>
  )
}
