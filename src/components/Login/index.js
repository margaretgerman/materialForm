import React from 'react';
import Button from '@material-ui/core/Button';
import { TextField, Container, CssBaseline } from '@material-ui/core';
import { connect } from 'react-redux';
import { submitForm } from '../../redux/actions';

const mapDispatchToProps = (dispatch) => {
  return {
    submitUserInfo: (userInfo) => {
          dispatch(submitForm(userInfo));
      }
  }
};


class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      repeatedPassword: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({[e.target.name] : e.target.value});
  }

  handleSubmit(e) {
    this.props.submitUserInfo(this.state);
    e.preventDefault();
  }

  render() {
    const { name, email, password, repeatedPassword } = this.state;
    return (
      <Container component="main" maxWidth="xs">
      <CssBaseline />
      <form onSubmit={this.handleSubmit}>
        
          <TextField 
            required
            fullWidth
            name='name' 
            label = 'Name' 
            onChange={this.handleChange} 
            value = {name}
            margin="normal"
            variant="outlined"/>
          <TextField 
            required
            fullWidth
            name='email'
            label = 'E-mail'
            onChange={this.handleChange}
            value = {email}
            margin="normal"
            variant="outlined"/>
          <TextField 
            required
            fullWidth
            type = 'password' 
            name = 'password'
            label='Password'
            onChange={this.handleChange}
            value = {password}
            margin="normal"
            variant="outlined"/>
          <TextField 
            required
            fullWidth
            type = 'password' 
            name = 'repeatedPassword'
            label='Repeat password'
            onChange={this.handleChange}
            value = {repeatedPassword}
            margin="normal"
            variant="outlined"/> 
            
        <Button  
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          onClick={this.handleSubmit}>
        Отправить
        </Button>
        
      </form>
      </Container>
    );
  }
}

export default connect(null, mapDispatchToProps)(LoginForm);