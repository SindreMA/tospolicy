/* eslint-disable no-restricted-globals */
import q from 'qjuul'
import React from 'react'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import { AppPages } from '../../router';
import Link from '@mui/material/Link';
interface IProps {
    children: React.ReactNode
}

function Laout(props: IProps) {
  return (
    <q.div w100 h100 f1 fctl>
        <q.div w100 he={'70px'} className='layoutSection layoutheader' txal={'left'} >
            <q.h2 pa="0 20px">Terms of service and privacy policy</q.h2>
        </q.div>
        <q.div frtl f1 w100 h100>
            <q.div h100 f1 className='layoutSection layoutSidebar' maxw={'360px'} co="white !important" id='layoutSidebar' >
                <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <List component="nav" aria-label="main mailbox folders">
                        {AppPages.map(x=> (
                            <Link href={x.path} underline="none" key={x.path}>
                                <ListItemButton selected={location.pathname === x.path} >
                                    <ListItemIcon>
                                        <AutoAwesomeMotionIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={x.name} />
                                </ListItemButton>
                            </Link>
                        ))}
                  </List>
                </Box>
            </q.div>
            <q.div f3 w100 h100 className='pageContainer'>
                {props.children}
            </q.div>   
        </q.div>     
    </q.div>
  )
}

export default Laout