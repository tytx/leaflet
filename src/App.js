import React from "react";
import Map from "./Map";
import { city_data } from "./data";

export default function App() {
  return (
    <div>
      <Map cityData={city_data} />
    </div>
  );
}
