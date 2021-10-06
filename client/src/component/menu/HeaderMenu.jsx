import { useState, useContext } from "react"

import { MenuItem, Menu, makeStyles } from "@material-ui/core"
import { MoreVert } from "@material-ui/icons"
import { GoogleLogout } from "react-google-login"
import { clientId } from "../../constant/data"
import { AccountContext } from "../../context/AccontProvider"
import  Drawer  from '../drawer/Ddrawer'

const useStyles = makeStyles({

    menuItem: {
        fontSize: 15,
        padding: '15px 60px 5px 24px',
        color: '#4A4A4A'
    },
    logout: {
        border: 'none!important',
        boxShadow: 'none!important',
        '&>*': {
            padding: '0px!important'
        }
    }


})

const HeaderMenu = () => {
    const [open, setOpen] = useState(false);
    const [openDrawer,setOpenDrawer] = useState(false)

    const { setAccount } = useContext(AccountContext);

    const classes = useStyles();
    const handleClose = () => {
        setOpen(false);
    }
    const handleClick = (event) => {
        setOpen(event.currentTarget);
    }

    const onLogoutSuccess = () => {
        alert("you have been logged out successfully");
        console.clear();
        setAccount('');
    }
    const toggleDrawe = () => {
        setOpenDrawer(true);
    }
    return (
        <>
            <MoreVert onClick={handleClick} />
            <Menu
                anchorE1={open}
                keepMounted
                open={Boolean(open)}
                onClose={handleClose}
                getContentAnchorEl={null}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center'
                }}
            >
                <MenuItem className={classes.menuItem} onClick={()=>{handleClose();toggleDrawe()}}>Profile</MenuItem>
                <MenuItem className={classes.menuItem} onClick={handleClose}>
                    <GoogleLogout
                        clientId={clientId}
                        buttonText="Logout"

                        onLogoutSuccess={onLogoutSuccess}
                        className={classes.logout}

                    >

                    </GoogleLogout>
                </MenuItem>


            </Menu>
            <Drawer open={openDrawer} setOpen={setOpenDrawer}/>
        </>
    )
}

export default HeaderMenu
