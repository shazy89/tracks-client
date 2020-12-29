import React, { useContext } from 'react'
import { Button, Input} from 'react-native-elements';
import Spacer from './Spacer'
import { Context as LocationContext } from '../context/LocationContext'
const TrackForm = () => {
    const { state: { name, recording}, 
        startRecording, stopRecording, changeName } = useContext(LocationContext);

    return <>
            <Spacer>
              <Input onChangeText={changeName} value={name} placeholder="Enter name"/>
            </Spacer>
            <Spacer>
              {
               recording ? 
              (<Button title='Stop Recording' buttonStyle={{backgroundColor: 'red'}} onPress={stopRecording} />) : 
              (<Button title='Start Recording' onPress={startRecording}/>)
              }
            </Spacer>
           </>
};


export default TrackForm;