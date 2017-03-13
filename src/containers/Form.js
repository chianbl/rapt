import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const style= {
    display:'flex',
    flexDirection: 'column',
    width:'30vw'
}

class Form extends Component {
  render() {
    return (
    <Paper zDepth={1} className="Form">
            <TextField className="form-input" hintText="Name"/>
            <TextField className="form-input" hintText="Email"/>
            <RaisedButton label="Submit" primary={true} />
    </Paper>
    );
  }
}

export default Form;
