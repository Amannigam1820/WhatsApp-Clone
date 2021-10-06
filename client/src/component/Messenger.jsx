import { AppBar, Toolbar, makeStyles, Box } from '@material-ui/core'
import React ,{ useContext } from 'react';
import { AccountContext } from '../context/AccontProvider';
//component import
import ChatBox from './ChatBox';
import Login from './account/Login';
const useStyles = makeStyles({
    loginHeader: {
        height: 200,
        background: '#00bfa5',
        boxShadow: 'none'
    },
    Header: {
        height: 100,
        background: '#128C7E',
        boxShadow: 'none'
    },
   
    component: {
        background: '#DCDCDC',
        height: '100vh'
    }
})



const Messenger = () => {
    const classes = useStyles();
    const { account } = useContext(AccountContext)
    return (
        <Box className={classes.component}>
            <AppBar className={account ? classes.Header : classes.loginHeader}>
                <Toolbar></Toolbar>
            </AppBar>
            {account ? <ChatBox/> : <Login />}{/*condition rendering of component*/}
        </Box>

    )
}

export default Messenger
