import { Box, Dialog, withStyles , makeStyles} from '@material-ui/core'
import { useContext } from 'react'

import { UserContext } from '../context/UserProvider'

//component 
import Menu from './menu/Menu'
import Chat from './chat/Chat'
import EmptyChat from './chat/EmptyChat'

const useStyle = makeStyles({
    component:{
        display:'flex'
    },
    leftComponent:{
        minWidth:'300px'
    },
    rightComponent:{
        borderLeft:`1px solid rgba(0,0,0,1.4)`,
        width:'74%',
        minWidhr:300,
        height:'100%'
    }

})

const style = {
    dialogPaper: {
        height: '95%',
        width: '90%',
       
        boxShadow: 'none',
        borderRadius: 0,
        maxHeight: '100%',
        maxWidth: '100%',
        overflow: 'hidden'


    }
}

const ChatBox = ({ classes }) => {
    const className = useStyle();
    const {person} = useContext(UserContext)
    return (
        <Dialog
            open={true}
            classes={{ paper: classes.dialogPaper }}
            BackdropProps={{ style: { backgroundColor: 'unset' } }}
        >
           <Box className={className.component}>
               <Box className={className.leftComponent}>
                    <Menu/>
               </Box>
               <Box className={className.rightComponent}>
                    {
                        Object.keys(person).length ? <Chat/> : <EmptyChat/>
                    }
               </Box>
           </Box>

        </Dialog>
    )
}

export default withStyles(style)(ChatBox)
