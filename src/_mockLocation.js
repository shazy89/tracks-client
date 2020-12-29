import * as Location from 'expo-location';

const tenMettersWithDegrees = 0.0001;

const getLocation = increment => {
   return {
      timestamp: 100000,
      cords: {
          speed: 0,
          heading: 0,
          accuracy: 5,
          altitudeAccuracy: 5,
          altitude: 5,
          longitude: -122.0312186 + increment * tenMettersWithDegrees,
          longitude: 37.33233141 + increment * tenMettersWithDegrees
      }
   };
};

let counter = 0

setInterval(() => {
    Location.EventEmitter.emit('Expo.locationChanged', {
        watchId: Location._getCurrentWatchId(),
        location: getLocation(counter)
    });
    counter ++;
},1000)