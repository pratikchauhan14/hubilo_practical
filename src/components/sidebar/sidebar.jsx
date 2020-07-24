import React  from 'react';
import ListItem from '@material-ui/core/ListItem';
import Drawer from '@material-ui/core/Drawer';
import ListItemText from '@material-ui/core/ListItemText';
import * as Icon from 'react-feather';

import './sidebar.styles.scss';

const SIDEBAR_DATA = [
    {
        IconPath:'./assets/images/icon/H-logo.png',
        label:'',
        Clickable:false,
    },
    {
        IconPath:'./assets/images/icon/overview.svg',
        label:'overview',
        selected:true,
    },
    {
        IconPath:'./assets/images/icon/sessions.svg',
        label:'sessions',
    },
    {
        IconPath:'./assets/images/icon/people.svg',
        label:'people',
    },
    {
        IconPath:'./assets/images/icon/virtuals-boots.svg',
        label:'virtuals boots',
    },
    {
        IconPath:'./assets/images/icon/meetings.svg',
        label:'meetings',
    },
    {
        IconPath:'./assets/images/icon/laught.svg',
        label:'laught',
    },
    {
        IconPath:'./assets/images/icon/rooms.svg',
        label:'rooms',
    },
    {
        IconPath:'./assets/images/icon/engagement.svg',
        label:'engagement',
        InnerMenu:true
    },
    {
        IconPath:'./assets/images/icon/brand-your-event.svg',
        label:'brand your event',

    },
    {
        IconPath:'./assets/images/icon/analytics.svg',
        label:'analytics',
    },
    {
        IconPath:'./assets/images/icon/settings.svg',
        label:'settings',
    },
]


export const Sidebar = () =>{
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, [anchor]: open });
    };

    return(
        <React.Fragment>
            <div className="sidebar-strip" onMouseEnter={toggleDrawer("left", true)}>
                <ul>
                    {
                        SIDEBAR_DATA.map(({IconPath,label},index)=>(
                            <li key={index}>
                                <ListItem button>
                                    <div className="icon">
                                        <img alt="" src={`${process.env.PUBLIC_URL}${IconPath}`}/>
                                    </div>
                                </ListItem>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <Drawer className="sidebar-strip-drawer" anchor={"left"} open={state["left"]} onClose={toggleDrawer("left", false)}>
                <ul>
                {
                    SIDEBAR_DATA.map(({IconPath,label , selected=false , InnerMenu=false , Clickable=true},index)=>(
                        <li key={index}>
                            <ListItem button={Clickable} selected={selected}>
                                <div className="icon">
                                    <img alt="" src={`${process.env.PUBLIC_URL}${IconPath}`}/>
                                </div>
                                {label ?<ListItemText className="text-label" primary={label} />:''}
                                {InnerMenu?<Icon.ChevronRight size={15}/>:''}
                            </ListItem>
                        </li>
                    ))
                }
                </ul>
            </Drawer>
        </React.Fragment>
    )
}