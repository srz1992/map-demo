// import {React, Component} from 'react';
// import {GoogleApiWrapper, Map, InfoWindow, Marker} from 'google-maps-react';
 
// export class MapContainer extends Component {
//   render() {
//     return (
//       <Map google={this.props.google} zoom={14}>
 
//         <Marker onClick={this.onMarkerClick}
//                 name={'Current location'} />
 
//         <InfoWindow onClose={this.onInfoWindowClose}>
//             <div>
//               <h1>{this.state.selectedPlace.name}</h1>
//             </div>
//         </InfoWindow>
//       </Map>
//     );
//   }
// }
 
// export default GoogleApiWrapper({
//   apiKey: 'AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo'
// })(MapContainer)

// export class Container extends Component {
//     render(){
//         const style = {
//             width: '100vw',
//             height: '100vh'
//         }
//         if (!this.props.loaded){
//             return <div>Loading...</div>
//         }
//         return (
//             <div>
//                 <Map google={this.props.google} />
//             </div>
//         )
//     }
// }

// export class Map extends Component{
    
// componentDidMount(){
//     this.loadMap();
// }

//     componentDidUpdate(prevProps, prevState){
//         if (prevProps.google !== this.props.google) {
//             this.loadMap();
//         }
//     }

//     loadMap(){
//         if (this.props && this.props.google){
//             // google is available
//             const {google} = this.props;
//             const maps = google.maps;
            
//             mapRef = this.refs.map;
//             const node = ReactDOM.findDOMNode(mapRef);
//         }
//         let zoom = 14;
//         let lat = 37.774929;
//         let lng = -122.418416;
//         const center = new maps.LatLng(lat, lng);
//         const mapConfig = Object.assign({}, {
//             center: center,
//             zoom: zoom
//         })
//         this.map = new maps.Map(node, mapConfig)
//     }
    
//     render(){
//         return(
//             <div ref='map'>
//             Loading map...
//             </div>
//         )
//     }
// }

// export default GoogleApiWrapper({
//     apiKey: AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo
// })(Container)