import React from 'react';
import {Grid, Box, Divider, withWidth } from '@material-ui/core';
import { makeStyles} from '@material-ui/core/styles';
import './style.css';

const styles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        height: '100vh',
        // backgroundColor: 'khaki'
    }
}));



export default function Intro(){

    const classes = styles();

    return (
        <div className={classes.root}>
             <Grid id="intro-grid" container alignItems="center" justify="center">
                <img title="apple" src={require('../../icons/apple.svg')} alt="apple"/>
                <Box>
                    <p id="name">Szewah Chin</p>
                    <Grid container alignItems="center" justify="center">
                        <Divider style={{backgroundColor: '#ffcc66', height: '3px', width: '70%'}}/>
                    </Grid>
                    <p className="text">Bringing 15 years of communications experience</p>
                    <p className="text">to Full Stack Web Development</p>
                </Box>
            </Grid>
        </div>
        
    )

}

