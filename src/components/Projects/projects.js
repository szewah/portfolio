import React, {Component}from 'react';
//material UI
import {Grid, GridListTile, GridList,Box} from '@material-ui/core';
import './style.css';
import { withStyles} from '@material-ui/core/styles';
import tileData from './tileData';



const divStyle = {
    backgroundColor: "teal",
    color: 'white',
    minHeight: '100vh'
}


const useStyles = theme => ({

    a: {
        display: 'block',
        height: '100%', 
      },
    img: {
        objectFit: 'cover',
        width: '100%',
        height: '100%',
        filter: 'blur(0)',
        transition: '.5s ease',
    },
    tile: {
        '&:hover': {
            cursor: 'pointer',
            '& $box': {
                opacity: 1,
                width: '95%',
                height: '93%',
            },
            '& $img': {
                filter: 'blur(2px)',
                width: '110%',
                height: '110%',
                opacity: '0.3'
            },
        },
    },
    box: {
        objectFit: 'cover',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        margin: 'auto',
        width: '100%',
        height: '100%',
        color: 'black',
        zIndex: 1,
        opacity: 0,
        transition: '.5s ease',
        backgroundColor: 'white',
    }
});


class Projects extends Component {

    state = {

    }
    
    render() {
        const {classes} = this.props;

        return (
            <div style={divStyle}>
                <Grid container justify='center'>
                    <h2 style={{fontWeight: 300, paddingTop: '50px'}}>PROJECTS</h2>
                </Grid>
                
                <Box mx='auto' p={5}>
                    <GridList cellHeight={250} cols={4}>
                        {tileData.map((tile) => (
                            <GridListTile key={tile.id} cols={tile.cols || 1} className={classes.tile}>
                                <a className={classes.a} href={`${tile.link}`} target='_blank' rel="noopener noreferrer">                                   
                                    <Box className={classes.box}>
                                        <h4>{tile.title} - {tile.role}</h4>
                                        <p style={{fontSize: '12px'}}>{tile.detail}</p>
                                    </Box>                                 
                                    <img 
                                        src={tile.img} 
                                        alt={tile.title} 
                                        className={classes.img}
                                    />
                                </a>
                            </GridListTile>
                        ))}
                    </GridList>
                </Box>
            </div>
        )
    }
};



export default withStyles(useStyles)(Projects);

