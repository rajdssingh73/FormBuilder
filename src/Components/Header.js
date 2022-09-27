import React from 'react'
import "./Header.css"
import { IconButton } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import AppsIcon from '@material-ui/icons/Apps'
import Avatar from '@material-ui/core/Avatar'
import Sidebar from './Sidebar'


const Header = () => {
  return (
    <div className='header'>
        <div className="header_info">
            <Sidebar />
           <span className="title"><b>FlokX FormBuilder</b></span>
        </div>
        <div className="header_search">
            <SearchIcon />
            <input type="text" name='search'placeholder='Search Your Form Here'
             style={{fontFamily:"Sans"}}/>
            
        </div>
        <div className="header_right">
           <IconButton>
                <AppsIcon />
            </IconButton> 
            <IconButton>
                <Avatar src=""/>
            </IconButton>
        </div>
        

    </div>
  )
}

export default Header