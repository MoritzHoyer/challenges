import { useEffect, useState } from "react";
import Controls from "./components/Controls";
import Map from "./components/Map";
import "./App.css";

const URL = "https://api.wheretheiss.at/v1/satellites/25544";

export default function App() {
  const [coords, setCoords] = useState({
    longitude: 0,
    latitude: 0,
  });

  // Asynchrone Funktion zum Abrufen der ISS-Koordinaten
  async function getISSCoords() {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      setCoords({
        longitude: data.longitude,
        latitude: data.latitude,
      });
    } catch (error) {
      console.error("Fehler beim Abrufen der ISS-Koordinaten:", error);
    }
  }

  // useEffect for sync of ISS-data
  useEffect(() => {
    // get coordinates by first init
    getISSCoords();

    // Set Interval for updating coordinates
    const intervalId = setInterval(getISSCoords, 5000);

    // Cleanup function, delete interval, if component is removed
    return () => clearInterval(intervalId);
  }, []); // empty array, run only once

  return (
    <main>
      <Map longitude={coords.longitude} latitude={coords.latitude} />
      <Controls
        longitude={coords.longitude}
        latitude={coords.latitude}
        onRefresh={getISSCoords}
      />
    </main>
  );
}
