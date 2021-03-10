import React, {Component}from 'react';
//material UI
import {Grid, Box, withStyles} from '@material-ui/core';
import { FaReact, FaPython, FaBootstrap, FaNodeJs } from 'react-icons/fa';
import {DiDjango, DiJavascript1, DiHtml5} from 'react-icons/di';
import {SiMysql, SiMongodb, SiFlutter, SiRedux, SiCsswizardry} from 'react-icons/si';
import { IconContext } from "react-icons";
import {Link} from 'react-router-dom';


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
                                Leverages background in video journalism, documentaries and corporate 
                                communications to build applications that help organizations build a narrative and make connections with their stakeholders.                        
                            </p>
                            <Box pt={4}>
                                <IconContext.Provider value={{ color: "black", size:"2em", style: { padding: '10px' }}}>
                                    <div>
                                        <Link to="https://reactjs.org/">
                                            <FaReact/>
                                        </Link>
                                        <Link to="https://react-redux.js.org/">
                                            <SiRedux/>
                                        </Link>
                                        <Link to="https://www.djangoproject.com/">
                                            <DiDjango/>
                                        </Link>    
                                        <Link to="https://www.python.org/">
                                            <FaPython/>
                                        </Link>
                                        <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
                                            <DiJavascript1/>
                                        </Link>
                                        <Link to="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5">
                                            <DiHtml5/>
                                        </Link>
                                    </div>
                                    <div>
                                        <Link to="https://nodejs.org/en/">
                                            <FaNodeJs/>
                                        </Link>       
                                        <Link to="https://www.mysql.com/">
                                            <SiMysql/>
                                        </Link>
                                        <Link to="https://www.mongodb.com/">
                                            <SiMongodb/>
                                        </Link>
                                        <Link to="https://flutter.dev/">
                                            <SiFlutter/>    
                                        </Link>
                                        <Link to="https://getbootstrap.com/">
                                            <FaBootstrap/>
                                        </Link>
                                        <Link to="https://developer.mozilla.org/en-US/docs/Web/CSS">
                                            <SiCsswizardry/>
                                        </Link>    
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