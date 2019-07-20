import React from "react";
import { compose, withProps } from "recompose";
import constants from "../../assets/constants";
import pin from "../../images/pin.png";
import { Input } from "antd";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
const {
  SearchBox
} = require("react-google-maps/lib/components/places/SearchBox");
const { Search } = Input;

/* global google */

const MyMapComponent = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=" +
      constants.GOOGLE_KEY_API +
      "&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `500px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={8} defaultCenter={{ lat: -6.02457, lng: -37.9845 }}>
    <SearchBox
      ref={props.onSearchBoxMounted}
      bounds={props.bounds}
      controlPosition={google.maps.ControlPosition.TOP_RIGHT}
      onPlacesChanged={props.onPlacesChanged}
    >
      <Search
        placeholder="Pesquise por cidade ..."
        onSearch={value => console.log(value)}
        size="large"
        style={{ width: 300, marginTop: 10, marginRight: 10 }}
      />
    </SearchBox>
    {props.isMarkerShown && (
      <Marker
        position={{ lat: -6.02457, lng: -37.9845 }}
        animation={google.maps.Animation.DROP}
        onClick={props.onMarkerClick}
        clickable={false}
        icon={pin}
      />
    )}
  </GoogleMap>
));

class MyFancyComponent extends React.PureComponent {
  state = {
    isMarkerShown: false
  };

  componentDidMount() {
    this.delayedShowMarker();
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true });
    }, 3000);
  };

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false });
    this.delayedShowMarker();
  };

  render() {
    return (
      <MyMapComponent
        isMarkerShown={this.state.isMarkerShown}
        onMarkerClick={this.props}
      />
    );
  }
}

export default MyFancyComponent;
