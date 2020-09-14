import React, {Component}from 'react';
import {Grid} from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';


class About extends Component{

    render() {

    return (
        <div style={{minHeight: '100vh', backgroundColor:'pink'}}>
            <Grid container alignItems="center" justify="center">
                <Grid item>
                    <h4>HELLO, WORLD</h4>
                </Grid>
                <Grid item>
                    <p style={{padding:'10px'}}>Full Stack Web Developer and a graduate of Columbia University’s Coding Bootcamp with a passion for solving problems through web technologies. 
                        Leverages background in video journalism and corporate communications to build meaningful applications that help organizations make connections with their stakeholders.</p>
                </Grid>
                <Grid item>    
                    <p>
                    Experience in front-end, back-end, and full-stack architecture, facilitating the full software development life cycle and applying technical proficiencies to deliver robust software solutions for a variety of business objectives.
                    </p> 
                </Grid>
                <Grid item>
                <p>Results-driven professional with a proven track record of driving complex development projects to completion significantly before established deadlines, delivering customer satisfaction in order to drive enhanced retention. Innovative leader with an entrepreneurial spirit, successfully developing multiple concurrent software solutions—both professional and personal—with an emphasis on optimized efficiency and end-user experience.</p>
                </Grid>
            </Grid>
        </div>
        )
    }
}

export default About;