import { useContext } from "react";
import { Dialog, withStyles, Box, Typography, makeStyles, ListItem, List } from "@material-ui/core"
import { GoogleLogin } from 'react-google-login';
import { AccountContext } from "../../context/AccontProvider";
import {clientId} from '../../constant/data'
import { addUser } from "../../service/api";

const useStyles = makeStyles({
    component: {
        display: 'flex'
    },
    leftComponent: {
        padding: '56px 0px 56px 56px'

    },
    qrCode: {
        height: 265,
        width: 265,
        padding: '50px 20px 0 50px'
    },
    title: {
        fontSize: 22,
        marginBottom: 25,
        color: '#525252',
        fontFamily: 'Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif',
        fontWeight: 300

    },
    list: {
        '&>*': {
            fontSize: 18,
            padding: 0,
            marginTop: 15,
            lineHeight: '28px',
            color: '#4a4a4a'
        }
    }
});


const style = {
    dialogPaper: {
        height: '95%',
        width: '60%',
        marginTop: '12%',
        boxShadow: 'none',
        borderRadius: 0,
        maxHeight: '100%',
        maxWidth: '100%',
        overflow:'hidden'


    }
}
const Login = ({ classes }) => {
    const className = useStyles();
    const qrurl = 'https://www.ginifab.com/feeds/qr_code/img/qrcode.jpg';
    

    const {account, setAccount } = useContext(AccountContext);


    const onLoginSuccess = async(res) => {

        console.log('login succesful', res.profileObj);
        setAccount(res.profileObj);
        await addUser(res.profileObj)
    }
    const onLoginFailure = () => {
        console.log('login failed');
    }

    return (
        <Dialog
            open={true}
            classes={{ paper: classes.dialogPaper }}
            BackdropProps={{ style: { backgroundColor: 'unset' } }}
        >
            <Box className={className.component}>
                <Box className={className.leftComponent}>
                    <Typography className={className.title}>To use WhatsApp on your computer: </Typography>
                    <List className={className.list}>
                        <ListItem>1.Open WhatsApp on your phone</ListItem>
                        <ListItem>2. Tap Menu or Setting and select Linked devices</ListItem>
                        <ListItem>3.Point your phone to this screen to capture the code</ListItem>
                    </List>
                </Box>
                <Box style={{position:'relative'}}>
                    <img src={qrurl} alt="qr/" className={className.qrCode} />
                    <Box style={{position:'absolute',left:'5%'}}>
                        <GoogleLogin
                            clientId={clientId}
                            buttonText="Sign in with google on WhatsApp Clone"
                            isSignedIn={true}
                            onSuccess={onLoginSuccess}
                            onFailure={onLoginFailure}
                            cookiePolicy={'single_host_origin'}
                        />
                    </Box>
                </Box>
            </Box>

        </Dialog>
    )
}

export default withStyles(style)(Login)
