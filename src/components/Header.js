import React,{useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  Typography,
  Paper,
  Grid,
  ListItemText,
  Divider,
  InputLabel,
FormControl,
Select
} from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send';



const useStyles = makeStyles((theme) => ({
  header:{
      marginBottom:'10px',
      marginTop: '0px',
      width:'100%',
      backgroundColor: '#4E4A4A',
      color:'white'
     
     
  },
   formControl: {
       margin: theme.spacing(1),
       minWidth: 120,
   },

}));
const Header=()=>{

  const [formData,setFormData]=useState({option1:'',option2:'',option3:''})



    const classes = useStyles();
    return(
        <Paper Paper className = {classes.header}>
              <form form autoComplete = "off"
              noValidate style = {
                  {
                      display: 'flex',
                      padding: '30px',
                    
                  }
              } >
                 <Grid container style={{paddingRight:'5px'}}>
               <FormControl  fullWidth variant = "outlined" className = {  classes.formControl } >
        <InputLabel htmlFor="input1">Select</InputLabel>
        <Select Select fullWidth value = {
          formData.option1
        }
        name = "option1"
        onChange = {
          (e) => setFormData({
            ...formData,option1: e.target.value
          })
        } >
         
          <option value={10}>Select Your Query First</option>
          <option value={3627}>option2</option>
          <option value={76}>option3</option>
          
        </Select>
      </FormControl>
      <Typography style={{marginLeft:"15px"}} vriant="p">please  select your query Type</Typography>
                 </Grid>
                
                 <Grid Grid container style = {
                     {
                         paddingRight: '5px'
                     }
                 } >
       <FormControl  fullWidth variant = "outlined" className = {  classes.formControl } >
        <InputLabel htmlFor="input1">Select</InputLabel>
        <Select Select fullWidth value = {
          formData.option2
        }
        name = "option2"
        onChange = {
          (e) => setFormData({
            ...formData,option2: e.target.value
          })
        } >
          
          <option value={10} >Select Your Query First</option>
          <option value={3627}>option2</option>
          <option value={76}>option3</option>
          
        </Select>
      </FormControl>
       <Typography style={{marginLeft:"15px"}} vriant="body2">please  select your query Type</Typography>
                 </Grid>

                
   <Grid Grid container style = {
                     {
                         paddingRight: '5px'
                     }
                 } >
       <FormControl  fullWidth variant = "outlined" className = {  classes.formControl } >
        <InputLabel htmlFor="input1">Select</InputLabel>
        <Select Select fullWidth value = {
          formData.option3
        }
        name = "option3"
        onChange = {
          (e) => setFormData({
            ...formData,option3: e.target.value
          })
        } >
          
          <option value={10}>Select Your Query </option>
          <option value={3627}>option2</option>
          <option value={76}>option3</option>
          
        </Select>
      </FormControl>
      <Typography style={{marginLeft:"15px"}} vriant="p">please  select your query Type</Typography>
                 </Grid>
         
              </form>
               <Divider/>
                     <Grid container  >
                            <Grid Grid item xs = {
                              12
                            }
                            style = {
                              {
                                display: 'flex',
                                padding:'15px'
                              }
                            } >
                                <ListItemText type="submit" style={{marginLeft:'995px'}} align="right" primary="Cancel"></ListItemText>
                            <Button variant="outlined"  style={{marginLeft:'8px',color:'white'}} href="#outlined-buttons">APPLY<SendIcon /></Button>
                            </Grid>
                           
                        </Grid>
         </Paper>
    )
}


export default Header