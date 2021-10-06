
import { Box, Typography,makeStyles} from "@material-ui/core"
import {useContext,useState,useEffect } from 'react'

import {AccountContext} from '../../context/AccontProvider'
import { UserContext } from "../../context/UserProvider"
import {getConversation, setConversation} from '../../service/api'

const useStyles = makeStyles({
    component:{
        display:'flex',
        height:40,
        padding:'13px 0',
        cursor:'pointer'
    },
    DP:{
        widht:45,
        height:45,
        borderRadius:'50%',
        padding:'0 14px'
    },
    text:{
        color:'rgba(0,0,0,0.6)',
        fontSize:14
    },
    time:{
        fontSize:12,
        marginLeft:'auto',
        marginRight:20,
        color:'#00000099'

    }
})

const Conversations = ({user})=>{

    const url = user.imageUrl;
    const classes = useStyles();
    const {account,newMessageFlag}  =  useContext(AccountContext);
    const {setPerson}  = useContext(UserContext);

    const [message,setMessage] = useState([]);

    useEffect(()=>{
        const getConversationMessage = async ()=>{
            const data = await getConversation({sender:account.googleId,receiver:user.googleId});
            setMessage({text:data.message,timestamp:data.updatedAt});
        }
        getConversationMessage();
    },[newMessageFlag])

    const setUser =async ()=>{
        setPerson(user);
       await setConversation({ senderId:account.googleId,receiverId:user.googleId})
    }


    return(
        <Box className={classes.component} onClick={()=>setUser()}>
            <Box>
                <img src={url} alt="DP"className={classes.DP}/>
            </Box>
            <Box style={{width:'100%'}}>
                <Box style={{display:'flex'}}>
                    <Typography>{user.name}</Typography>
                    {
                        message.text && 
                        <Typography className={classes.time}>
                            {new Date(message.timestamp).getHours()}:{new Date(message.timestamp).getMinutes()}
                        </Typography>
                    }
                </Box>
                <Box>
                    <Typography className={classes.text}>{message.text}</Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default Conversations