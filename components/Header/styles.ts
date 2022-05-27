import { makeStyles } from '@mui/styles'
import { lightBlue } from '@mui/material/colors'

export const useHeaderStyles = makeStyles({
    header: {
        position: 'absolute',
        zIndex: 11,
        top: 0,
        left: 0,
        width: '100%',
        color: '#fff',
        backgroundColor: '#222841',
    },
    logo: {
        display: 'block',
        fontFamily: 'Roboto',
        fontSize: '1.3em',
        lineHeight: 0.9,
        fontWeight: 500,
        letterSpacing: 3,
        textTransform: 'uppercase',
        textDecoration: 'none',
        color: '#fff',
    },
})
