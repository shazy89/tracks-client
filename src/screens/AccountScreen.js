import React, { useContext } from 'react'
import { View, StyleSheet} from 'react-native';
import { SafeAreaView } from 'react-navigation'
import { Text, Button, Input } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';

const AccountScreen = () => {
    const { signout } = useContext(AuthContext);
    return <>
            <SafeAreaView forceInset={{top: 'always'}}>
               <Spacer>
                   <Text style={{fontSize: 45}}>AccountScreen</Text>
                  <Button title="Sign Out" onPress={signout}></Button>
               </Spacer>
            </SafeAreaView>
         </>
};
const styles = StyleSheet.create({

});

export default AccountScreen