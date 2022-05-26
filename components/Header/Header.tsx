import React from 'react'
import Image from 'next/image';

import { Avatar, Box, Button, Toolbar, Tooltip } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person'
import LoginIcon from '@mui/icons-material/Login'

import { useHeaderStyles } from './styles'

const Header = () => {
    const classes = useHeaderStyles()
    return (
        <header className={classes.header}>
            <Toolbar
                disableGutters
                sx={{
                    minHeight: 64,
                    left: 0,
                    px: 2
                }}
            >
                <a className={classes.logo} href="https://fpvmap.vercel.app/">
                    <Image 
                        src='/logo.png'
                        width={120}
                        height={35}
                        objectFit="contain"
                    />
                </a>
                <Box sx={{ flexGrow: 1 }} />
                {false ? (
                    <Tooltip title="Profile">
                        <Avatar
                            sx={{
                                height: 40,
                                width: 40,
                                ml: 1
                            }}
                            //src="https://material-kit-react.devias.io/static/images/avatars/avatar_6.png"
                        >
                            <PersonIcon fontSize="small" />
                        </Avatar>
                    </Tooltip>
                ) : (
                    <Button variant="contained" color="secondary" startIcon={<LoginIcon />}>
                        Sign In
                    </Button>
                )}
            </Toolbar>
        </header>
    )
}

export default Header;