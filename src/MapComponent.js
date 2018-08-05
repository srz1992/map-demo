import React, {Component} from 'react';
import { InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import Map from './Map';

export class Container extends React.Component{
  render(){
    const style = {
      width: '100vw',
      height: '100vh'
    }
    return (
      <div style={style}>
        <Map google={this.props.google} />
      </div>
    )
  }
}

// export class Map extends Component {
//   constructor(props) {
//     super(props);
//     this.onMarkerClick = this.onMarkerClick.bind(this);
//     this.state = {
//       showingInfoWindow: false,
//       activeMarker: {},
//       selectedPlace: {}
//     };
//   }

//   componentDidUpdate(prevProps, prevState){
//     if (prevProps.google !== this.props.google){
//       this.loadMap();
//     }
//   }

//   componentDidMount(){
//     this.loadMap();
//   }

//   loadMap(){
//     if (this.props && this.props.google){
//       const {google} = this.props;
//       const maps = google.maps;

//       const mapRef = this.refs.map;
//       const node = ReactDOM.findDOMNode(mapRef);

//       let zoom = 14;
//       let lat = 37.774929;
//       let lng = -122.419416;
//       const center = new maps.LatLng(lat, lng);
//       const mapConfig = Object.assign({}, {
//         center: center,
//         zoom: zoom
//       })
//       this.map = new maps.Map(node, mapConfig)
//     }
//   }

//   onMarkerClick(props, marker, e) {
//     this.setState({
//       selectedPlace: props,
//       activeMarker: marker,
//       showingInfoWindow: true
//     });
//   }


//   render() {
//     if (!this.props.google) {
//       return <div>Loading...</div>;
//     }

//     return (
//       <div ref="map">
//         Loading map...
//       </div>
//     );
//   }
// }


export default GoogleApiWrapper({
  apiKey: "AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo",
  v: "3"
})(Container);


