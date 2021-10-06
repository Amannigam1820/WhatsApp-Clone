import { createContext,useState,useRef,useEffect } from "react"
import {io} from 'socket.io-client';

export const AccountContext = createContext(null);

const AccontProvider = ({children}) => {
    const [account, setAccount] =  useState();
    const [activeUsers, setActiveUsers] = useState([]);

    const [newMessageFlag,setNewMessageFlag] = useState(false);

    const socket = useRef();
    useEffect(()=>{
        socket.current = io('ws://localhost:9000');//socket server for client side
    },[])


    return (
       <AccountContext.Provider
        value = {{
            account,
            setAccount,
            socket,
            setActiveUsers,
            activeUsers,
            newMessageFlag,
            setNewMessageFlag
        }}>
        {children}
       </AccountContext.Provider>
    )
}

export default AccontProvider
