import React from 'react';
import { compose, withProps } from 'recompose';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  BicyclingLayer,
  Marker
} from 'react-google-maps';

import markericon from '../../assets/images/map-marker.png';

const GeneralMap = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAYzby4yYDVaXPmtu4jZAGR258K6IYwjIY&libraries",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `500px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(({ location }) => {
  if (!location) return null;
  const { lat = 0, lng = 0 } = location;

  return (
    <GoogleMap
      defaultZoom={13}
      defaultCenter={{ lat, lng }}
      defaultOptions={{
        disableDefaultUI: false, // disable default map UI
        draggable: true, // make map draggable
        keyboardShortcuts: false, // disable keyboard shortcuts
        scaleControl: true, // allow scale control
        scrollwheel: true, // allow scroll wheel
        styles: [
          {
            featureType: 'road',
            stylers: [
              { color: '#ffffff' }
            ]
          }, {
            featureType: 'water',
            stylers: [
              { color: '#e9e9e9' }
            ]
          }, {
            featureType: 'landscape',
            stylers: [
              { color: '#f5f5f5' }
            ]
          }, {
            elementType: 'labels.text.fill',
            stylers: [
              { color: 'transparent' }
            ]
          }, {
            featureType: 'poi',
            stylers: [
              { color: '#fefefe' }
            ]
          }, {
            elementType: 'labels.text',
            stylers: [
              { saturation: 1 },
              { weight: 0.1 },
              { color: '#737980' }
            ]
          }
        ],
        icon: markericon
      }}
    >
      <Marker
        icon={{ url: markericon }}
        animation={1}
        position={{ lat, lng }}
      />
      <BicyclingLayer autoUpdate />
    </GoogleMap>
  );
});

export default GeneralMap