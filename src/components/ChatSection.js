import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {List,Typography,
ListItemIcon,
Grid,
ListItem,
Avatar,
} from '@material-ui/core';
import momnet from 'moment'


const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    ChatBody:{
        paddingTop:'30px',
    },
    PersonCard:{
        width:'300px',
        marginLeft:'10px',
        marginRight: '10px',
        padding: '20px',
        boxShadow: '1px 2px 0px 2px rgba(44,40,40,0.75)',

    },
});

const ChatSection=({Data})=>{
    console.log()
      const classes = useStyles();
    return(
        <>
                <List className={classes.ChatBody} >
                    <ListItem button key="RemySharp" className={classes.PersonCard}>
                       <ListItemIcon>
                            <Avatar alt="Remy Sharp" src={Data.user.profilePic} />
                        </ListItemIcon>
                       <Grid>
                        
                        <Typography  variant="body2">{Data.user.firstName}</Typography><br/>
                         <Typography variant="body2">{Data.chats.map((Data)=>Data.message)}</Typography>
                         <Typography variant="body2">{Data.chats.map((Data)=>momnet(Data.createdAt).format("YYY/MM/DD"))}</Typography>
                       </Grid>
                        
                    </ListItem>
                </List>
                </>
    )
}

export default ChatSection