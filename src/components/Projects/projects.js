import React, {Component}from 'react';
//material UI
import {Grid, GridListTile, GridList, Slide} from '@material-ui/core';
import './style.css';
import { withStyles} from '@material-ui/core/styles';
import tileData from './tileData'



const divStyle = {
    backgroundColor: "teal",
    color: 'white',
    minHeight: '100vh'
}


const overlay = {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    height: '100%',
    width: '100',
    opacity: 0,
    transition: '.5s ease',
    backgroundColor: '#008CBA'
  }


const useStyles = theme => ({
    a: {
        display: 'block',
        height: '100%',
      },
    img: {
        objectFit: 'none',
        width: '100%',
        height: '100%',
    },
})



class Projects extends Component {

    state = {
        isHovering: false,
    }
    
    changeBackground = (e) => {
        e.target.style.opacity = '0.5';
        console.log('changed')
      };

    normalBackground = (e) => {
        e.target.style.opacity = '1';
    };
    


    render() {
        const classes = withStyles();
        return (
            <div style={divStyle}>
                <Grid container justify='center'>
                    <h2 style={{fontWeight: 300, paddingTop: '50px'}}>PROJECTS</h2>
                </Grid>
                {/* <Slide direction="up" mountOnEnter> */}
                <GridList cellHeight={200} cols={4} 
                    style={{marginLeft: '200px', marginRight: '200px', paddingTop: '20px', paddingBottom: '20px'}}>
                    {tileData.map((tile) => (

                        <GridListTile key={tile.id} cols={tile.cols || 1}>
                            <a className={classes.a} href={`${tile.link}`} target='_blank' rel="noopener noreferrer" >
                                <div className='overlay' style={overlay}></div>
                                <img 
                                    src={tile.img} 
                                    alt={tile.title} 
                                    className={classes.img} 
                                    onMouseMove={this.changeBackground} 
                                    onMouseLeave={this.normalBackground}
                                />
                            </a>
                        </GridListTile>
                    ))}
                </GridList>
                {/* </Slide> */}
            </div>
        )
    }
};

export default withStyles(useStyles)(Projects);

