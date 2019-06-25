// use-geolocation.js
import React from "react";

function useGeolocation(initialLatitude = 0, initialLongitude = 0) {
  const [latitude, setLatitude] = React.useState(initialLatitude);
  const [longitude, setLongitude] = React.useState(initialLongitude);

  React.useEffect(() => {
    const watchId = navigator.geolocation.watchPosition(({ coords }) => {
      setLatitude(coords.latitude);
      setLongitude(coords.longitude);
    });

    return () => navigator.geolocation.clearWatch(watchId);
  }, [setLatitude, setLongitude]);

  return { latitude, longitude };
}

export default useGeolocation;
