import React from 'react'
import MenuIcon from  "@material-ui/icons/Menu"
import { IconButton } from '@material-ui/core'
import Drawer from '@material-ui/core/Drawer'
import { useState } from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import App from '../App'
import Formpage from './Formpage'


const Sidebar = () => {
   
    const [state, setState] = useState({ 
        left: false
    })

const toggleDrawer = (anchor, open) =>(event) => {
    setState({...state, [anchor]: open});
};

const list = (anchor) => {
    <div>
       
    </div>
}
  return (
    <div>
        <React.Fragment>
             <IconButton onClick={toggleDrawer("left", true)}>
                 <MenuIcon />
            </IconButton> 
            <Drawer open={state['left']} onClose={toggleDrawer("left", false)} anchor={'left'}>
            <List>
                <div>
                    <h1></h1>
                </div>
            <ListItem>
            <b>FormsBuilder by <br/>Dharmendra</b>
            </ListItem>
            <ListItem>
            <a href='' style={{textDecoration:"none"}}>View Created Forms</a>
            </ListItem>
            <ListItem>
            <a href='' style={{textDecoration:"none"}}>Create New Form</a>
            </ListItem>
        </List>
            </Drawer>
        </React.Fragment>
    </div>
  )
}

export default Sidebar