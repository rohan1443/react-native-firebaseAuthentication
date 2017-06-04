import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    // Initialize Firebase
    firebase.initializeApp({
      apiKey: 'AIzaSyC9Xt-KHlobO19a5PVhmsZyKiGzLo9z_fo',
      authDomain: 'authentication-95c80.firebaseapp.com',
      databaseURL: 'https://authentication-95c80.firebaseio.com',
      projectId: 'authentication-95c80',
      storageBucket: 'authentication-95c80.appspot.com',
      messagingSenderId: '205170574989'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true })
      } else {
        this.setState({ loggedIn: false })
      }
    })
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return <Button buttonName={'Log Out'} onPress={() => firebase.auth().signOut()}/>;
      case false:
        return <LoginForm />;
      default:
        return (
          <View style={styles.spinnerStyle} >
            <Spinner size={'large'} />
          </View>
        )
    }


  }

  render() {
    return (
      <View>
        <Header headerValue={'Auth'} />
        {this.renderContent()}
      </View>
    );
  }
}

const styles = {
  spinnerStyle: {
    justifyContent: 'center',
    alignItems: 'center'
  }
}

export default App;