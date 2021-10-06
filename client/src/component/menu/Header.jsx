import { useContext, useState } from 'react'
import { Box, makeStyles } from '@material-ui/core'
import { Chat } from '@material-ui/icons'

import { AccountContext } from '../../context/AccontProvider'
import HeaderMenu from './HeaderMenu'
import Drawer from '../drawer/Ddrawer'

const useStyles = makeStyles({
    header: {
        height: 30,
        background: '#ededed',
        padding: '10px 10px',
        display: 'flex',
        alignItems: 'center'
    },
    avatar: {
        height: '35px',
        width: '35px',
        borderRadius: '50%'
    },
    icons: {
        marginLeft: 'auto',
        '& > *': {
            marginLeft: '2px',
            padding: '10px',
            color: '#919191'
        },

        '& :first-child': {
            fontSize: '20px',
            marginRight: '8px',
            marginTop: '5px'
        }
    }
})

const Header = () => {
    const { account } = useContext(AccountContext)

    const [open, setOpen] = useState(false);
    const classes = useStyles();

    const toggleDrawe = () => {
        setOpen(true);
    }

    return (
        <>
            <Box className={classes.header}>
                <img src={account.imageUrl} onClick={toggleDrawe} alt="Profile-picture" className={classes.avatar} />
                <Box className={classes.icons}>
                    <Chat />
                    <HeaderMenu />
                </Box>
            </Box>
            <Drawer open={open} setOpen={setOpen}/>
        </>
    )

}

export default Header
