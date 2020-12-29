import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import { requestPermissionsAsync } from 'expo-location'
import Map from '../components/Map';

const TrackCreateScreen = () => {
   const [err, setErr] = useState(null);
   
   const startWatching = async () => {
    try {
      const { granted } = await requestPermissionsAsync();
      if (!granted) {
        throw new Error('Location permission not granted');
      }
    } catch (e) {
      setErr(e);
    }
  };
     useEffect(() => {
        startWatching(); 
     }, [])
    return <>
            <SafeAreaView forceInset={{top: 'always'}}>
               <Text h1> TrackCreateScreen  </Text>
               <Map />
               {err ? <Text>Please enable locaton services</Text> : null}
            </SafeAreaView>
          </>
};
const styles = StyleSheet.create({

});

export default TrackCreateScreen