import React from 'react';
import './App.css';
import { firestore, loggedIn$ } from './Firebase';
import SignIn from '../src/Components/SignIn'

class App extends React.Component {
  state = {
    user: null
  };
  componentDidMount() {
    /* Observable from RxFire */
    loggedIn$.subscribe(user => {
      this.authHandler({ user }); //Update state on load of app
      const { displayName, email, phoneNumber, photoURL } = user;
      firestore
        .collection('users')
        .doc(user.uid)
        .set({ displayName, email, phoneNumber, photoURL });
    });
  }
  authHandler = async authData => {
    this.setUser(authData.user);
  };
  setUser = user => {
    this.setState({
      user: user
    });
  };
  
  render() {
    return (
          <SignIn
            user={this.state.user}
            authHandler={this.authHandler}
            setUser={this.setUser}/>
    );
  }
}

export default App;