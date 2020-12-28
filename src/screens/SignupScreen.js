import React, { useContext, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation'
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink'

const SignupScreen = () => {
  const { state, signup, clearErrorMessage, tryLocalSignin } = useContext(AuthContext);
    // when we navigate from 1 page and back we are not clearing the data , to handle errors rendered errors we are using
    //  NavigationEvents with onWillFocus , this way when we switch screens will remove the errors
    useEffect(() => {
      tryLocalSignin();
    }, []);

  return (
    <View style={styles.container}>
       <NavigationEvents  
          onWillFocus={clearErrorMessage}  /> 
      <AuthForm
        headerText="Sign Up for Tracker"
        errorMessage={state.errorMessage}
        submitButtonText="Sign Up"
        onSubmit={signup}
      />
       <NavLink 
        routeName="Signin"
        text="Alredy have an account? Sign in instead!"
      />
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    header: () => false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250,
  },
});

export default SignupScreen;


