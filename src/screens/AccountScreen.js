import React, { useContext } from 'react'
import { View, StyleSheet} from 'react-native';
import { SafeAreaView } from 'react-navigation'
import { Text, Button, Input } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';
import { FontAwesome } from '@expo/vector-icons'; 

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

AccountScreen.navigationOptions = {
   title: 'Account',
   tabBarIcon: <FontAwesome name="gear" size={20} color="black" />
};
const styles = StyleSheet.create({

});

export default AccountScreen