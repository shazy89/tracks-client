import React, { useState, useContext } from 'react'
import { View, StyleSheet} from 'react-native';
import { Text, Input, Button } from 'react-native-elements'
import Spacer from '../components/Spacer'
import { Context as AuthContext } from '../context/AuthContext'
const SignupScreen = ({ navigation }) => {
    const { state, signup } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
      

    return <View style={styles.container}>
     <Spacer>
        <Text h2 > Sign Up for 
           <Text h1 style={{color: 'red'}}> Tracker  </Text>
        </Text>
      </Spacer>
      <Spacer />
        <Input label="Email" 
                value={email} onChangeText={setEmail} 
                autoCapitalize="none" autoCorrect={false} />
      <Spacer />
        <Input label="Password" 
               value={password} onChangeText={setPassword}  
               autoCapitalize="none" autoCorrect={false} secureTextEntry/>
               {state.errorMessage ? <Text style={styles.errMessage}> {state.errorMessage}</Text> : null}
      <Spacer>
        <Button title="Sign Up" onPress={() => signup({ email, password })} />
      </Spacer>
    </View>
};
SignupScreen.navigationOptions = () => {
    return {
        headerShown: false
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      marginBottom: 250
  },
  errMessage: {
    color: 'red',
    fontSize: 16,
    marginLeft: 15
    

  }
});



export default SignupScreen  