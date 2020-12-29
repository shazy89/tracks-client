import React, {useContext} from 'react'
import {Context as LocationContext } from '../context/LocationContext'
import {Context as TrackContext } from '../context/TrackContext'
import { View, StyleSheet, Text} from 'react-native';

const useSaveTrack = () => {
    const { createTrack } = useContext(TrackContext);
    const { state: { locations, name }  } = useContext(LocationContext);
};
const styles = StyleSheet.create({

});

export default useSaveTrack;