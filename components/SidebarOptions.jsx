import { IconButton } from '@mui/material';
import React from 'react';
import './SidebarOptions.css'

const SidebarOptions = ({text, Icon, fontsize}) => {
    return (
        <div className='Sidebar__option'>
            <IconButton >
          <Icon fontSize={fontsize}/>
          </IconButton>
        </div>
    );
}

export default SidebarOptions;
