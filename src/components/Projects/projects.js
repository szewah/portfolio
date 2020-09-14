import React, {Component}from 'react';
//material UI
import {Grid, Box, Link, GridList, GridListTile} from '@material-ui/core';
import './style.css';
import { makeStyles} from '@material-ui/core/styles';
import tileData from './tileData'




const divStyle = {
    backgroundColor: "teal",
    color: 'white',
    minHeight: '100vh'
}


const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        flexGrow: 1,
        justifyContent: 'center',
        overflow: 'hidden',
        marginTop: 20,
        paddingBottom: 30,
    },
    gridList: {
    }
})



export default function Projects(){

    const changeBackground = (e) => {
        e.target.style.opacity = '0.5';

      }

    const normalBaackground =(e) => {
        e.target.style.opacity = '1';
    }

    const externalPage = () => {
        window.location.assign()
    }

    const preventDefault = (event) => {
        console.log(event);
    }

    const classes = useStyles();
    return (
        <div style={divStyle}>
            <Grid container justify='center'>
                <h2 style={{fontWeight: 300, paddingTop: '50px'}}>PROJECTS</h2>
            </Grid>
            <GridList cellHeight={160} className={classes.gridList} cols={3}>
                {tileData.map((tile) => (
                    <GridListTile 
                        key={tile.img} 
                        cols={tile.cols || 1} 
                        onClick={() => {
                            window.open(`${tile.link}`)
                        }}
                    >
                        <img 
                            src={tile.img} 
                            alt={tile.title} 
                            onMouseEnter={changeBackground} 
                            onMouseLeave={normalBaackground} 
                            style={{cursor: 'pointer', padding:0}}
                        />
                    </GridListTile>
                ))}
            </GridList>
        </div>
        )
}

