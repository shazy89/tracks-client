import { useState, useEffect } from 'react';
import {
  Accuracy,
  requestPermissionsAsync,
  watchPositionAsync,
} from 'expo-location';

export default (shouldTrack, callback) => {
  const [err, setErr] = useState(null);
  const [subscriber, setSubscriber] = useState(null);

  const startWatching = async () => {
    try {
      const { granted } = await requestPermissionsAsync();
      if (!granted) {
        throw new Error('Location permission not granted');
      }
      const sub = await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10,
        },
        callback
      );
      setSubscriber(sub);
    } catch (e) {
      setErr(e);
    }
  };

  useEffect(() => {
    if (shouldTrack) {
      startWatching();
    } else {
      subscriber.remove();
      setSubscriber(null);
    }

    return () => {
      if (subscriber) {
        subscriber.remove();
      }
    };
  }, [shouldTrack, callback]);

  return [err];
  


  // react will check if shouldTrack is changed and decide to make the callback or no
  // will check condition if shouldTrack is true or falce?
 // shouldTrack is the argument we are passing in from TrackCreateScreen ( isFocused ) and
 // isFocused is props from withNavigationFocus react-navigation
 // import { SafeAreaView, withNavigationFocus } from 'react-navigation';
};