import { Drawer, Box, Typography, makeStyles } from '@material-ui/core'
import { ArrowBack } from '@material-ui/icons';
import Profile from './Profile';

const useStyles = makeStyles({
    header: {
        background: '#00bfa5',
        height: '84px',
        color: '#fff',
        display: 'flex',
        '&>*': {
            marginTop: 'auto',
            padding: 13,
            fontWeight: '600'
        }
    },
    component:{
        background:'#ededed',
        height:'87%'
    }
})



const Ddrawer = ({ open, setOpen }) => {
    const classes = useStyles()

    const handleClose = () => {
        setOpen(false);
    }
    return (
        <Drawer open={open} onClose={handleClose}>
            <Box className={classes.header}>
                <ArrowBack onClick={handleClose} />
                <Typography>Profile</Typography>
            </Box>
            <Box className={classes.component}>
                <Profile/>
            </Box>
        </Drawer>
    )
}

export default Ddrawer
