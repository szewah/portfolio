import React from 'react';
import {Grid, Box, Divider} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './style.css';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        height: '100vh',
    }
}));



export default function Intro(){

    const classes = useStyles();

    return (
        <div className={classes.root}>
             <Grid id="intro-grid" container alignItems="center" justify="center">
                <img title="apple" src={require('../../icons/apple.svg')} alt="apple"/>
                <Box>
                    <p id="name">Szewah Chin</p>
                    <Grid container alignItems="center" justify="center">
                        <Divider  style={{backgroundColor: 'red', height: '3px', width: '70%'}}/>
                    </Grid>
                    <p className="text">Bringing communications experience</p>
                    <p className="text">to Full Stack Web Development</p>
                </Box>
            </Grid>
        </div>
        
    )

}

