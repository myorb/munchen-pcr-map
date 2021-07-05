import React from "react"
import { Map, Marker } from "pigeon-maps"

const MainMap = () => {
  return (
    <Map height={500} defaultCenter={[48.137154, 11.576124]} defaultZoom={13}>
      <Marker width={50} anchor={[48.137154, 11.576124]} />
    </Map>
  )
};

export default MainMap;
