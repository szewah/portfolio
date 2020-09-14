import React, {Component}from 'react';
import {Grid, Button, TextField} from '@material-ui/core';
import './style.css';



class Contact extends Component{

    state = {
        status: ''
    };

    submitForm = (ev) => {
        ev.preventDefault();
        const form = ev.target;
        console.log(form);
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
          if (xhr.readyState !== XMLHttpRequest.DONE) return;
          if (xhr.status === 200) {
            form.reset();
            this.setState({ status: "SUCCESS" });
          } else {
            this.setState({ status: "ERROR" });
          }
        };
        xhr.send(data);
      }


    render() {
        const { status } = this.state;

        return (
            <div id="contact-div" style={{minHeight: '100vh', backgroundColor:'beige', alignItems:"center"}}>
                <Grid container spacing={2} justify="center">
                    <Grid item xs={6} style={{padding: '10px'}}>
                        <form
                            onSubmit={this.submitForm}
                            action="https://formspree.io/mlepqegr"
                            method="POST"
                            noValidate 
                            autoComplete="off"
                            id="contact_form"
                        >
                            <h2>GET IN TOUCH</h2>
                            <TextField 
                                id="email" 
                                label="email" 
                                type="email" name="email" 
                                variant="outlined" 
                                fullWidth 
                                style={{ marginBottom: "2em" }} 
                                aria-describedby="email_input"
                            />

                            <TextField 
                                id="message" 
                                label="message" 
                                type="text" 
                                name="message" 
                                fullWidth  
                                variant="outlined" 
                                aria-describedby="message_input"
                                multiline
                                rowsMax={4}
                            /
                            > 
                            <Grid item style={{marginTop: '20px'}}>
                                {status === "SUCCESS" ? <p>Thanks for getting in touch.</p> : <Button variant="contained" type="submit" color="primary">Submit</Button>}
                                {status === "ERROR" && <p>There was an error. Please try again.</p>}
                            </Grid>
                        </form>
                    </Grid>
                </Grid>
            </div>
            )
        }
}

export default Contact;