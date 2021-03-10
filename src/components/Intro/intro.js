import React from 'react';
import {Grid, Box, Divider, withWidth } from '@material-ui/core';
import { makeStyles} from '@material-ui/core/styles';
import './style.css';

const styles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        height: '100vh',
        backgroundColor: '#ffc0cb'
    }
}));



export default function Intro(){

    const classes = styles();

    return (
        <div className={classes.root}>
             <Grid id="intro-grid" container alignItems="center" justify="center">
                <Box>
                    <p id="name">Szewah Chin</p>
                    <p id="chinesename">秦思华</p>
                    <Grid container alignItems="center" justify="center">
                        <Divider style={{backgroundColor: '#ffcc66', height: '3px', width: '70%'}}/>
                    </Grid>
                    <p className="text">Full Stack Web Developer</p>
                </Box>
            </Grid>
        </div>
        
    )

}

