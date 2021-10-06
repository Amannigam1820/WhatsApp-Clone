import {useEffect,useState,useContext} from 'react';
import { getUsers } from "../../service/api"
import {Box,makeStyles} from '@material-ui/core'


//component import
import Conversations from './Conversations'
import { AccountContext } from '../../context/AccontProvider';

const useStyles = makeStyles({
    component:{
        height:'81vh',
        overflow:'overlay'
    }
})

const Conversation = ({text}) => {
    const classes = useStyles();
    const [users,setUsers] = useState([]);
    const {account,socket,setActiveUsers} = useContext(AccountContext);

    useEffect(()=>{
        const fetchdata = async ()=>{
          const data =  await getUsers();
          const filterdata = data.filter(user=>user.name.toLowerCase().includes(text.toLowerCase()));
          setUsers(filterdata);

        }
        fetchdata();
    },[text])
    useEffect(()=>{
        socket.current.emit('addUser',account.googleId);
        socket.current.on('getUsers',users=>{
            setActiveUsers(users);
        })
    },[account])
    return (
        <Box className={classes.component}>
            {
                users.map(user=>(
                    user.googleId !== account.googleId &&
                    <Conversations user = {user}/>
                ))
            }
        </Box>
    )
}

export default Conversation
