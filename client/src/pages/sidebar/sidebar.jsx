import React from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import './sidebar.css';
import Avatar from 'react-avatar';
import { Link } from "react-router-dom";
 

const Sidebar = () => {
  return (
    <div className='sidebar-container'>
    <ProSidebar >
        <div className='sidebar-sub'>
    <Avatar name="uday nama" size="70" round={true} />
    <h3>Uday Nama</h3>
    </div>
  <Menu iconShape="square">
    <MenuItem > <Link to="/home">Documentation page</Link></MenuItem>
    <SubMenu title="Components" >
      <MenuItem> <Link to="/JavaScript">Day 4 Assignment</Link>
      </MenuItem>
      <MenuItem>Component 2</MenuItem>
    </SubMenu>
  </Menu>
</ProSidebar> 
    </div>
  )
}

export default Sidebar;
