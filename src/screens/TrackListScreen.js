import React from 'react'
import { View, StyleSheet, Text, Button} from 'react-native';
import { NavigationEvents } from 'react-navigation';

const TrackListScreen = ({navigation}) => {
    return <>
             <NavigationEvents onWillFocus={() => console.log('hey there')}/>
            <Text style ={{fontSize: 48}}> TrackListScreen </Text>
            <Button title="Go to Track Detail" onPress={() => navigation.navigate("TrackDetail") }/>
           </>
};
const styles = StyleSheet.create({

});

export default TrackListScreen;