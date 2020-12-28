import React, { useContext } from 'react'
import { View, StyleSheet} from 'react-native';
import { Text, Button, Input } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';

const AccountScreen = () => {
    const { signout } = useContext(AuthContext);
    return <>
            <Spacer>
               <Button title="Sign Out" onPress={signout}></Button>
            </Spacer>
          </>
};
const styles = StyleSheet.create({

});

export default AccountScreen