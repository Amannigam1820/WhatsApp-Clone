import {useState,useEffect,useContext} from 'react';
import { UserContext } from '../../context/UserProvider';
import { Box } from '@material-ui/core';
import { getConversation} from '../../service/api'
import {AccountContext} from '../../context/AccontProvider'

//component import
import ChatHeader from './ChatHeader';
import Messages from './Messages';


const Chat = () => {
    const {person}  = useContext(UserContext);
    const {account } = useContext(AccountContext);

    const [conversation,setConversation] = useState({});

    useEffect(()=>{
        const getConversationdetail = async()=>{
            let data = await getConversation({sender:account.googleId,receiver:person.googleId})
            setConversation(data)

        }
        getConversationdetail();
    },[person.googleId])


    return (
        <Box>
            <ChatHeader/>
            <Messages conversation={conversation} person={person}/>
        </Box>
    )
}

export default Chat
