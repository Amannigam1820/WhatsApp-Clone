import { Box,Typography,makeStyles } from '@material-ui/core';
import {useContext} from 'react';
import {Search, MoreVert} from '@material-ui/icons'

import { UserContext } from '../../context/UserProvider';
import { AccountContext } from '../../context/AccontProvider';
const useStyles = makeStyles({
    header:{
        display:'flex',
        height:30,
        background:'#ededed',
        padding:'10px 16px',
        alignItems:'center',
        paddingTop:14
        
        
    },
    dp:{
        width:40,
        height:40,
        borderRadius:'50%',
        padding:'0 2px'
    },
    name:{
        marginLeft:10
    },
    status:{
        fontSize:12,
        marginLeft:10,
        color:'rgb(0,0,0,0.6)'
    },
    right:{
        marginLeft:'auto',
        '&>*':{
            padding:8,
            fontSize:22,
            color:'#919191'
        }
    }
})

const ChatHeader = () => {
    const classes = useStyles();
    const {person} = useContext(UserContext);

    const {activeUsers} = useContext(AccountContext)

    return (
        <Box className={classes.header}>
            <img src = {person.imageUrl} alt="DP"className={classes.dp}/>
            <Box>
            <Typography className={classes.name}>{person.name}</Typography>
            <Typography className={classes.status}>
                {activeUsers?.find(user=>user.userid===person.googleId)?'online':'offline'}
            </Typography>
            </Box>
            <Box className={classes.right}>
                <Search/>
                <MoreVert/>
            </Box>

        </Box>
    )
}

export default ChatHeader
