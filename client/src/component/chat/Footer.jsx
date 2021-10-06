
import {Box,makeStyles,InputBase} from '@material-ui/core'
import {EmojiEmotions, AttachFile,Mic} from '@material-ui/icons'


const useStyles = makeStyles(theme=>({
    footer:{
        height:'60px',
        background:'#ededed',
        width:'100%',
        display:'flex',
        alignItems:'center',
        padding : '0 15px',
        '&>*':{
            margin:5,
            color:'#919191'
        }
    },
    clipicon:{
        transform:'rotate(40deg)'
    },
    search:{
        backgroundColor:'#FFFFFF',
        borderRadius:18,
        width:'calc(95% - 100px)',
        marginBottom:15
        
    },
    inputRoot:{
       width:'100%'
    },
    inputInput:{
        padding:theme.spacing(1,1,1,0),
        paddingLeft:25,
        fontSize:14,
        width:'100%',
        height:20
    }
}))
const Footer = ({sendText,setValue,value}) => {
    const classes = useStyles();
    return (
       <Box className={classes.footer}>
           <EmojiEmotions/>
           <AttachFile className={classes.clipicon}/>
           <Box className={classes.search}>
               <InputBase
                   placeholder="type a message"
                   classes={{
                        root:classes.inputRoot,
                        input:classes.inputInput,
                   }}
                   inputProps={{'aria-label':'search'}}
                   onKeyPress={(e)=>sendText(e)}
                   onChange={(e)=>setValue(e.target.value)}
                   value={value}
               />
           </Box>
           <Mic/>

          
       </Box>
    )
}

export default Footer
