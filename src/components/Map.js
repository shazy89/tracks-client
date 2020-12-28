import React from 'react'
import { View, StyleSheet, Text} from 'react-native';
import MapView from 'react-native-maps'

const Map = () => {
    return <MapView 
    initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    style={styles.map}/>
};
const styles = StyleSheet.create({
 map: {
     height: 300
 }
});

export default Map;