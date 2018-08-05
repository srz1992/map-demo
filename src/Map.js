import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'

export class Map extends Component {
    constructor(props) {
      super(props);
      const {lat, lng} = this.props.initialCenter;
      this.state = {
        currentLocation: {
            lat: lat,
            lng: lng
        }
      };
    }
  
    componentDidUpdate(prevProps, prevState){
      if (prevProps.google !== this.props.google){
        this.loadMap();
      }
      if (prevState.currentLocation !== this.state.currentLocation){
          this.recenterMap();
      }
    }
  
    recenterMap = () => {
        const map = this.map;
        const currentLocation = this.state.currentLocation;

        const google = this.props.google;
        const maps = google.maps;

        if(map){
            let center = new maps.LatLng(currentLocation.lat, currentLocation.lng)
            map.panTo(center);
        }

    }

    componentDidMount(){
      this.loadMap();
    }
  
    loadMap = () => {
      if (this.props && this.props.google){
        console.log('hello');
        
        // const {google} = this.props;
        // const maps = google.maps;
  
        // const mapRef = this.refs.map;
        // const node = ReactDOM.findDOMNode(mapRef);
  
        // let zoom = 14;
        // let lat = 37.774929;
        // let lng = -122.419416;
        // const center = new maps.LatLng(lat, lng);
        // const mapConfig = Object.assign({}, {
        //   center: center,
        //   zoom: zoom
        // })
        // this.map = new maps.Map(node, mapConfig)

        const {google} = this.props;
        const maps = google.maps;
  
        const mapRef = this.refs.map;
        const node = ReactDOM.findDOMNode(mapRef);
  
        let {initialCenter, zoom} = this.props;
        let {lat, lng} = initialCenter;
        const center = new maps.LatLng(lat, lng);
        const mapConfig = Object.assign({}, {
          center: center,
          zoom: zoom
        })
        this.map = new maps.Map(node, mapConfig)
      }
    }
  


    onMarkerClick(props, marker, e) {
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      });
    }
  
  
    render() {
      if (!this.props.google) {
        return <div>Loading...</div>;
      }
  
      const style = {
        width: '100vw',
        height: '100vh'
      }

      return (
          // div MUST have width and height defined here AND in map container
        <div style={style} ref="map">
          Loading map...
        </div>
      );
    }
  }

  // allows strict typing for specific properties
Map.propsTypes = {
    google: PropTypes.object,
    zoom: PropTypes.number,
    initialCenter: PropTypes.object
}

// sets default values for certain properties
Map.defaultProps = {
    zoom: 13,

    initialCenter: {
        lat: 37.774929,
        lng: -122.419416
    }
}

export default Map