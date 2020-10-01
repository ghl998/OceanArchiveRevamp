import "../styles/styles.css";

declare var require: any

var React = require('react');

import GoogleMapReact from 'google-map-react';

import * as Constant from '../constants';

class GoToLocation extends React.Component {
    render() {
        return (
            <div>
                <form style={{ display: 'flex', height: '50px' }}>
                    <div className='goToLocLabels noselect'>Lat</div>
                    <input type='search' className='goToLocSearch' />
                    <div className='goToLocLabels noselect'>Long</div>
                    <input type='search' className='goToLocSearch' />
                    <input type='submit' className='goToLocButton' />
                </form>
            </div>
        );
    }
}

class Location extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='mapLocationInfo'>
                <img src={this.props.src} alt={this.props.title + " thumbnail"} />
                <div style={{ flex: '0 0 auto' }}>
                    <div stlye={{ display: 'flex', flexDirection: 'column', height: '100px' }}>
                        <h2 className='listTitle'>{this.props.title}</h2>
                        <p className='listDesc'>{this.props.desc}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default class Map extends React.Component {
    render() {
        return (
            <div style={{ flex: '1' }}>
                <div className="mapSection">
                    <div className='mapSideBar'>
                        <GoToLocation />
                        <div className='scrollableList'>
                            <Location title='Pacific Ocean Garbage Patch' desc='Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.' src='https://live.staticflickr.com/2490/4214811049_1264c95738_b.jpg' />
                            <Location title='The Various Shark Species' desc='Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.' src='https://live.staticflickr.com/194/463483080_828f04aba3_b.jpg' />
                            <Location title='Under The Ocean: Life with Turtles' desc='Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.' src='https://live.staticflickr.com/2534/32899940111_6d3f8956d7_b.jpg' />
                            <Location title='Fish in the Ocean' desc='Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.' src='https://live.staticflickr.com/2736/4098744853_0c65ccb710_b.jpg' />
                            <Location title='Ocean Waves' desc='Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.' src='https://live.staticflickr.com/7309/9787099472_f24d4766e5_b.jpg' />
                            <Location title='Sharks Electromagnetic Sense' desc='Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.' src='https://live.staticflickr.com/6018/5951373622_3146ed0aab_b.jpg' />
                            <Location title='Coral Research' desc='Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.' src='https://live.staticflickr.com/1688/26104103086_766619aeb8_b.jpg' />
                            <Location title='Plastic Island' desc='Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.' src='https://live.staticflickr.com/3182/2785503884_8b0b76f781_b.jpg' />
                            <Location title='Sunset Shore' desc='Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.' src='https://live.staticflickr.com/65535/49112821866_f88763e374_b.jpg' />
                            <Location title='Deep Ocean Mining' desc='Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.' src='https://live.staticflickr.com/6178/6207340169_32c7846a32_b.jpg' />
                            <Location title='Oil Pollution' desc='Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.' src='https://farm9.staticflickr.com/8746/17022954452_3c3fefafe0_b.jpg' />
                            <Location title='Deep Ocean Life' desc='Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.' src='https://live.staticflickr.com/5463/8880188144_f2e22d06c1.jpg' />
                            <Location title='Whale Spotting' desc='Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.' src='https://live.staticflickr.com/32/49470279_74b8873c7c_b.jpg' />
                            <Location title='Octopus Learning Habits' desc='Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.' src='https://live.staticflickr.com/3463/3306513983_f8269902ee_b.jpg' />
                        </div>
                    </div>
                    <div className='mapContainer'>
                        <GoogleMapReact bootstrapURLKeys={{ key: 'AIzaSyDqIVtQawOQ0DqWTSP3LG60nVhGJvsdSHk' }} defaultZoom={10} defaultCenter={{ lat: -33.8688, lng: 151.2093 }} />
                    </div>
                </div>
            </div>
        );
    }
}
