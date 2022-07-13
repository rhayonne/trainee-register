import { AppBar, Grid, Toolbar } from '@material-ui/core';
// import { Search } from '@material-ui/icons';
// import { Search } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';
import { ChatBubbleOutline, NotificationsNone, PowerSettingsNew, } from '@mui/icons-material';
// import Search  from '@mui/icons-material/Search'; 
import { Badge, IconButton, InputBase } from '@mui/material';
import React from 'react';

const useStyles = makeStyles(theme=> (
    {
    root:{
        backgroundColor: '#fff',
        // transform: 'translateZ(0)', <-- Over rided on apps.js
    },
    searchInput: {
        opacity: '0.6',
        padding: '0px 8 px',
        fontSize: '0.8rem',
        '&:hover':{
            backgroundColor: '#f2f2f2'
        },
        '& .MuiSvgIcon-root':{
            
        }
    },
    shape:{
        borderRadius: '12px',
    },
    
   
}))

const Header = () => {
    const classes = useStyles();
    
    return (
        <div>
            <AppBar position='static' className={classes.root}>
                <Toolbar>
                <Grid container
                alignItems='center'>
                    <Grid item>
                        <InputBase placeholder='RECHERCHE' 
                        fontSize='small'
                        className={classes.searchInput}
                        
                        /*startAdornment={Search} <-- this img dont's work, find another way to use*/
                        />
                    </Grid>
                    <Grid item sm> {/* Will do the automatic spacements in bar*/}
                    </Grid>
                    {/* <Grid item sm={6} style={{border: '1px solid #fff'}}>
                        <InputBase></InputBase>
                    </Grid> */}

                    <Grid item>
                        <IconButton  >
                            <Badge badgeContent={4} color="secondary" >
                                <NotificationsNone fontSize='small' />
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <Badge badgeContent={3} color="secondary">
                                <ChatBubbleOutline fontSize='small'/>
                               
                            </Badge>
                            </IconButton>
                            <IconButton>
                                <PowerSettingsNew  />
                            </IconButton>
                        </Grid>
                </Grid>
                </Toolbar>

            </AppBar>
        </div>
    );
};

export default Header;