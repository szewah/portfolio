import React, {Component}from 'react';
//material UI
import {Grid, Box, withStyles} from '@material-ui/core';
import { FaReact, FaPython, FaBootstrap, FaNodeJs } from 'react-icons/fa';
import {DiDjango, DiJavascript1, DiHtml5} from 'react-icons/di';
import {SiMysql, SiMongodb, SiFlutter, SiRedux, SiCsswizardry} from 'react-icons/si';
import { IconContext } from "react-icons";


const useStyles = theme => ({
    root: {
      flexGrow: 1,
    },
    p: {
        textAlign: 'center'
    },
    grid: {
        padding: '20px'
    }
  });

class About extends Component {


    render() {
        const {classes} = this.props;
        return (
            <div style={{minHeight: '100vh', backgroundColor:'#ffcc66'}}>
                <Grid container justify='center'>
                    <h2 style={{fontWeight: 300, paddingTop: '50px'}}>ABOUT</h2>
                </Grid>
                <div className={classes.root}>
                    <Grid container spacing={1} className={classes.grid} justify="center">
                        <Grid item md={2}></Grid>
                        <Grid item md={6}>
                            <p className={classes.p}>Full Stack Web Developer and a graduate of Columbia University’s Coding Bootcamp with a passion for 
                                solving problems through web technologies. 
                            </p>
                            <p className={classes.p}>
                                Leverages background in video journalism and corporate 
                                communications to build meaningful applications that help organizations improve their workflow 
                                and make connections with their customers.                        
                            </p>
                            <p className={classes.p}>Currently looking for opportunities in sustainable finance, financing-for-all, or mobility-for-all.
                            </p>
                            <Box pt={4}>
                                <IconContext.Provider value={{ color: "black", size:"2em", style: { padding: '10px' }}}>
                                    <div>
                                        <FaReact/>
                                        <SiRedux/>
                                        <DiDjango/>
                                        <FaPython/>
                                        <DiJavascript1/>
                                        <DiHtml5/>
                                    </div>
                                    <div>
                                        <FaNodeJs/>
                                        <SiMysql/>
                                        <SiMongodb/>
                                        <SiFlutter/>
                                        <FaBootstrap/>
                                        <SiCsswizardry/>
                                    </div>
                                </IconContext.Provider>
                            </Box>

                        </Grid>
                        <Grid item md={2}></Grid>
                    </Grid>
                </div>
            </div>
        )
    }
}

export default withStyles(useStyles)(About);