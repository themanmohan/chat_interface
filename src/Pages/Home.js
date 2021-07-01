import React,{useState} from 'react';
import ConverstionsData from '../Data/Conversation'
import {
    makeStyles
} from '@material-ui/core/styles';
import {
    Paper,
    Grid,
    Divider,
 TextField,
    Button
} from '@material-ui/core';

import SendIcon from '@material-ui/icons/Send';

import ChatSection from '../components/ChatSection'
import MessageArea from '../components/Messagearea'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
const useStyles = makeStyles({
    table: {
        minWidth: 550,
    },
    chatSection: {
        width: '100%',
        height: '90vh'
    },
    headBG: {
        backgroundColor: '#e0e0e0',
        marginRight: '10px'
    },
    borderRight500: {
        borderRight: '10px solid Black',
        backgroundColor: '#4E4A4A',
        color: 'white'

    },
    messageArea: {
        height: '50vh',
        overflowY: 'auto',
        
    }
});

const Home=()=>{
    const [conversationsData, setConversationsData] = useState(ConverstionsData.data.conversations)
    const [formData, setformData] = useState({text:''})
    const [messageData,setMessageData]=useState([{text:'Please Help Me',date:new Date()}])

    
    const handleSubmit=(e)=>{
            e.preventDefault()
            const data={...messageData,text:formData.text}
            setMessageData([...messageData,data])
    }
       const classes = useStyles();
    return(
         <div>
         <Navbar/>
        <Grid container>
            <Grid item xs={12} >
                <Header/>
            </Grid>
        </Grid>
        <Grid container component={Paper} className={classes.chatSection}>
            <Grid item xs={3} className={classes.borderRight500}>
            {
                   conversationsData.slice(2).map((data)=>{
                       return(
                            <ChatSection key={data.id} Data={data}/>
                       )
                   })
            }
               
            </Grid>
            <Divider />
            <Grid Grid item xs = {
                9
            }
            style = {
                {
                    backgroundColor: '#4E4A4A',
                }
            } >
               {
                   messageData.map((data)=>{
                       return(
                           <MessageArea Data={data}/>
                       )
                   })
               }
                <Divider />
                <Grid Grid container style = {
                    {
                        padding: '20px',
                        color: 'white'
                    }
                } >
                 <form  
                 onSubmit = {
                     handleSubmit
                 } >
                    <div style = {
                        {
                            display: 'flex'
                        }
                    } >
                      <Grid item xs={11} >
                        <TextField name="text"  value={formData.text} onChange={(e)=>{setformData({...formData,text:e.target.value})}} label="Type Something" fullWidth />
                    </Grid>
                    <Grid xs={1} align="right">
                    <Button  type="submit"  style = {
                    {
                       
                        color: 'white',
                        width:'500px',
                     
                    }
                }><SendIcon /></Button>
                       
                    </Grid>
                    </div>
                    </form>
                </Grid>
            </Grid>
        </Grid>
      </div>
    )
}


export default Home