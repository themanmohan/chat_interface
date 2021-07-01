
import React from 'react'
import momnet from 'moment'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import {List,ListItem,ListItemText} from '@material-ui/core';



const useStyles = makeStyles({
   
    chatSection: {
        width: '95%',
        height: '90vh',
        
    },
    headBG: {
        backgroundColor: '#e0e0e0'
    },
    borderRight500: {
        borderRight: '1px solid #e0e0e0',

    },
    messageArea: {
        height: '70vh',
        overflowY: 'auto',
         color: 'white'

    },
    TextRight:{
        boxShadow: '1px 2px 0px 2px rgba(44,40,40,0.75)',
        marginLeft:"750px",
        padding:"0px 30px 0px 30px"
    },
    TextLeft: {
        boxShadow: '1px 2px 0px 2px rgba(44,40,40,0.75)',
        marginRight: "600px",
        padding: "0px 30px 0px 30px"
    },
   
});

const Messagearea=({Data})=>{
    const classes = useStyles();
    return(
        <>
         <List className={classes.messageArea}>
                    <ListItem key="1" >
                        <Grid container>
                            <Grid item xs={12}>
                                <ListItemText className={classes.TextRight} align="right" primary={Data.text}></ListItemText>
                            </Grid>
                            <Grid item xs={12}>
                                <ListItemText    align="right" >{momnet(Data.date).format("YYY/MM/DD")}</ListItemText>
                            </Grid>
                        </Grid>
                    </ListItem>
                    <ListItem key="2">
                        <Grid container>
                            <Grid item xs={12}>
                                <ListItemText className={classes.TextLeft} align="left" primary="Hey, Iam Good! What about you ?"></ListItemText>
                            </Grid>
                            <Grid item xs={12}>
                                <ListItemText align="left" >09:31</ListItemText>
                            </Grid>
                        </Grid>
                    </ListItem>
                </List>
        </>
    )
}

export default Messagearea