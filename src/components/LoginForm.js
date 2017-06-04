import React, { Component } from 'react';
import firebase from 'firebase';
import { Text } from 'react-native';
import { Card, CardSection, Button, Input, Spinner } from './common';

class LoginForm extends Component {
  state = { email: '', password: '', error: '', loading: false };

  onButtonPress() {
    const { email, password } = this.state;
    this.setState({ error: '', loading: true });
    //this statement returns here a promise
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this))
      });
  }

  onLoginFail() {
    this.setState({ error: 'Authentication Failed', loading: false });
  }

  onLoginSuccess() {
    this.setState({
      error: '',
      email: '',
      password: '',
      loading: false
    })
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size={'small'} />
    }

    return (
      <Button buttonName={'Log In'} onPress={this.onButtonPress.bind(this)} />
    );
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder={'user@gmail.com'}
            label={'Email'}
            value={this.state.email}
            onChangeText={(text) => this.setState({ email: text })} />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry={true}
            placeholder={'password'}
            label={'Password'}
            value={this.state.password}
            onChangeText={(text) => this.setState({ password: text })} />
        </CardSection>
        <Text style={styles.errorStyle}>
          {this.state.error}
        </Text>
        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorStyle: {
    color: 'red',
    fontSize: 20,
    alignSelf: 'center'
  }
}

export default LoginForm;