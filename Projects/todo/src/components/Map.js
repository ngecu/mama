import React, { Component } from 'react'
import { Map, TileLayer } from "react-leaflet";

export default class M extends Component {


    render() {
        return (
            <Map center={[0.846192, 38.068187]} zoom={6}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
          </Map>
        )
    }
}
