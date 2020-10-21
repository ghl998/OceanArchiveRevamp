import "../styles/styles.css";

declare var require: any

var React = require('react');

import GoogleMapReact from 'google-map-react';
import MediaQuery from 'react-responsive';

import * as Constant from '../constants';

class GoToLocation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            location: { lat: 0, lng: 0 }
        };
    }

    changeLat = (e) => {
        var location = this.state.location;
        var lat = parseFloat(e.target.value);
        if (lat > Constant.LAT_BOUNDS.MAX) {
            lat = Constant.LAT_BOUNDS.MAX;
        } else if (lat < Constant.LAT_BOUNDS.MIN) {
            lat = Constant.LAT_BOUNDS.MIN;
        }

        location.lat = lat;

        this.setState({
            location: location
        });
    }

    changeLng = (e) => {
        var location = this.state.location;
        var lng = parseFloat(e.target.value);
        if (lng > Constant.LNG_BOUNDS.MAX) {
            lng = Constant.LNG_BOUNDS.MAX;
        } else if (lng < Constant.LNG_BOUNDS.MIN) {
            lng = Constant.LNG_BOUNDS.MIN;
        }

        location.lng = lng;

        this.setState({
            location: location
        });
    }

    goToLocation = (e) => {
        e.preventDefault();
        this.props.goToLocationFunc(this.state.location);
    }

    render() {
        return (
            <div>
                <form style={{ display: 'flex', height: '50px' }} onSubmit={(e) => this.goToLocation(e)}>
                    <div className='goToLocLabels noselect'>Lat</div>
                    <input type='number' name='lat' value={this.state.location.lat} className='goToLocSearch' onChange={(e) => this.changeLat(e)} />
                    <div className='goToLocLabels noselect'>Long</div>
                    <input type='number' name='lng' value={this.state.location.lng} className='goToLocSearch' onChange={(e) => this.changeLng(e)} />
                    <input type='submit' value='GO' className='goToLocButton' />
                </form>
            </div>
        );
    }
}

class Location extends React.Component {
    constructor(props) {
        super(props);
        this.map = null;
    }

    render() {
        return (
            <div className={this.props.isMobile ? 'mapLocationInfo mobile' : 'mapLocationInfo'}>
                <img src={this.props.src} alt={this.props.title + " thumbnail"} />
                <div style={{ flex: '0 0 auto' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', height: '95px' }}>
                        <h2 className={this.props.isMobile ? 'listTitle mobile' : 'listTitle'}>{this.props.title}</h2>
                        <p className={this.props.isMobile ? 'listDesc mobile' : 'listDesc'}>{this.props.desc}</p>
                    </div>
                </div>
            </div>
        );
    }
}

const testLocations = [
    { title: 'Pacific Ocean Garbage Patch', desc: 'Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.', src: 'https://live.staticflickr.com/2490/4214811049_1264c95738_b.jpg' },
    { title: 'The Various Shark Species', desc: 'Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.', src: 'https://live.staticflickr.com/194/463483080_828f04aba3_b.jpg' },
    { title: 'Under The Ocean: Life with Turtles', desc: 'Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.', src: 'https://live.staticflickr.com/2534/32899940111_6d3f8956d7_b.jpg' },
    { title: 'Fish in the Ocean', desc: 'Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.', src: 'https://live.staticflickr.com/2736/4098744853_0c65ccb710_b.jpg' },
    { title: 'Ocean Waves', desc: 'Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.', src: 'https://live.staticflickr.com/7309/9787099472_f24d4766e5_b.jpg' },
    { title: 'Sharks Electromagnetic Sense', desc: 'Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.', src: 'https://live.staticflickr.com/6018/5951373622_3146ed0aab_b.jpg' },
    { title: 'Coral Research', desc: 'Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.', src: 'https://live.staticflickr.com/1688/26104103086_766619aeb8_b.jpg' },
    { title: 'Plastic Island', desc: 'Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.', src: 'https://live.staticflickr.com/3182/2785503884_8b0b76f781_b.jpg' },
    { title: 'Sunset Shore', desc: 'Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.', src: 'https://live.staticflickr.com/65535/49112821866_f88763e374_b.jpg' },
    { title: 'Deep Ocean Mining', desc: 'Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.', src: 'https://live.staticflickr.com/6178/6207340169_32c7846a32_b.jpg' },
    { title: 'Oil Pollution', desc: 'Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.', src: 'https://farm9.staticflickr.com/8746/17022954452_3c3fefafe0_b.jpg' },
    { title: 'Deep Ocean Life', desc: 'Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.', src: 'https://live.staticflickr.com/5463/8880188144_f2e22d06c1.jpg' },
    { title: 'Whale Spotting', desc: 'Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.', src: 'https://live.staticflickr.com/32/49470279_74b8873c7c_b.jpg' },
    { title: 'Octopus Learning Habits', desc: 'Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.', src: 'https://live.staticflickr.com/3463/3306513983_f8269902ee_b.jpg' }
]

export default class Map extends React.Component {
    constructor(props) {
        super(props);
    }

    goToLocation = (location) => {
        this.map.panTo(location);
    }

    render() {
        return (
            <div style={{ flex: '1' }}>
                <MediaQuery minDeviceWidth={1224}>
                    <div className="mapSection">
                        <div className='mapSideBar'>
                            <GoToLocation goToLocationFunc={this.goToLocation} />
                            <div className='scrollableList'>
                                {testLocations.map((location, i) => {
                                    return (
                                        <Location isMobile={false} title={location.title} desc={location.desc} src={location.src} key={'location' + i} />
                                    )
                                })}
                            </div>
                        </div>
                        <div className='mapContainer'>
                            <GoogleMapReact ref='mapRef'
                                onGoogleApiLoaded={({ map, maps }) => { this.map = map }}
                                yesIWantToUseGoogleMapApiInternals
                                bootstrapURLKeys={{ key: 'AIzaSyDqIVtQawOQ0DqWTSP3LG60nVhGJvsdSHk' }}
                                defaultZoom={10}
                                defaultCenter={{ lat: -33.8688, lng: 151.2093 }}
                                options={{ fullscreenControl: false }} />
                        </div>
                    </div>
                </MediaQuery>
                <MediaQuery maxDeviceWidth={1223}>
                    <div className="mapSection mobile">
                        <div className='mapContainer mobile'>
                            <GoogleMapReact ref='mapRef'
                                onGoogleApiLoaded={({ map, maps }) => { this.map = map }}
                                yesIWantToUseGoogleMapApiInternals
                                bootstrapURLKeys={{ key: 'AIzaSyDqIVtQawOQ0DqWTSP3LG60nVhGJvsdSHk' }}
                                defaultZoom={10}
                                defaultCenter={{ lat: -33.8688, lng: 151.2093 }}
                                options={{ fullscreenControl: false }} />
                        </div>
                        <div className='mapSideBar mobile'>
                            <GoToLocation goToLocationFunc={this.goToLocation} />
                            <div className='scrollableList'>
                                {testLocations.map((location, i) => {
                                    return (
                                        <Location isMobile={true} title={location.title} desc={location.desc} src={location.src} key={'location' + i} />
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </MediaQuery>
            </div>
        );
    }
}
