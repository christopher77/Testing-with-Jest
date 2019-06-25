// index.js
import React from "react";
import { render } from "react-dom";
import { Map, TileLayer, Marker } from "react-leaflet";
import useGeolocation from "./use-geolocation";

function App() {
  const { latitude, longitude } = useGeolocation();

  return (
    <Map center={[latitude, longitude]} zoom={15}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors | Made for Codeable'
      />
      <Marker position={[latitude, longitude]} />
    </Map>
  );
}

const $root = document.getElementById("root");
render(<App />, $root);
