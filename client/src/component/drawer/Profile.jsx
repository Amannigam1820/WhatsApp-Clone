import { useContext } from 'react'
import { Box , makeStyles,Typography } from '@material-ui/core'
import React from 'react'
import { AccountContext } from '../../context/AccontProvider'

const useStyles = makeStyles({
    image:{
        display:'flex',
        justifyContent:'center',
    },
    dp:{
        width:180,
        height:180,
        borderRadius:'50%',
        padding:'18px 0px'
    },
    name:{
        background:'#FFFFFF',
        padding:'12px 30px 2px',
        boxShadow:'0 1px 3px  rgba(0,0,0,0.08)',
        '& :first-child':{
            fontSize:14,
            color:'#009688'
        },
        '& :last-child':{
            color:'#4A4A4A',
            margin:'14px 0'
        }
    },
    description:{
        padding:'10px 20px 28px 30px',
        '& >*':{
            fontSize:'14px',
            color:'rgba(0,0,0,0.45)'

        }
    },
     names:{
         height:'90px',
        background:'#FFFFFF',
        padding:'12px 30px 2px',
        boxShadow:'0 1px 3px  rgba(0,0,0,0.08)',
        '& :first-child':{
            fontSize:14,
            color:'#009688'
        },
        '& :last-child':{
            color:'#4A4A4A',
            margin:'14px 0'
        }
    }
})

const Profile = () => {
    const classes = useStyles();
    const {account} = useContext(AccountContext)
    return (
        <>
            <Box className={classes.image}>
                    <img src={account.imageUrl} alt="DP" className={classes.dp}/>
            </Box>
            <Box className={classes.name}>
                <Typography>Your Name</Typography>
                <Typography>{account.name}</Typography>
            </Box>
            <Box className={classes.description}>
            <Typography>This is not your username or pin. This name will be visible to your WhatsApp contacts</Typography>

            </Box>
            <Box className={classes.names}>
                <Typography>About</Typography>
                <Typography>I'm the devil of my World!!</Typography>
            </Box>
        </>
    )
}

export default Profile
