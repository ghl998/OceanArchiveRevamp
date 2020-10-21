"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("../styles/styles.css");
var React = require('react');
const google_map_react_1 = require("google-map-react");
const react_responsive_1 = require("react-responsive");
const Constant = require("../constants");
class GoToLocation extends React.Component {
    constructor(props) {
        super(props);
        this.changeLat = (e) => {
            var location = this.state.location;
            var lat = parseFloat(e.target.value);
            if (lat > Constant.LAT_BOUNDS.MAX) {
                lat = Constant.LAT_BOUNDS.MAX;
            }
            else if (lat < Constant.LAT_BOUNDS.MIN) {
                lat = Constant.LAT_BOUNDS.MIN;
            }
            location.lat = lat;
            this.setState({
                location: location
            });
        };
        this.changeLng = (e) => {
            var location = this.state.location;
            var lng = parseFloat(e.target.value);
            if (lng > Constant.LNG_BOUNDS.MAX) {
                lng = Constant.LNG_BOUNDS.MAX;
            }
            else if (lng < Constant.LNG_BOUNDS.MIN) {
                lng = Constant.LNG_BOUNDS.MIN;
            }
            location.lng = lng;
            this.setState({
                location: location
            });
        };
        this.goToLocation = (e) => {
            e.preventDefault();
            this.props.goToLocationFunc(this.state.location);
        };
        this.state = {
            location: { lat: 0, lng: 0 }
        };
    }
    render() {
        return (React.createElement("div", null,
            React.createElement("form", { style: { display: 'flex', height: '50px' }, onSubmit: (e) => this.goToLocation(e) },
                React.createElement("div", { className: 'goToLocLabels noselect' }, "Lat"),
                React.createElement("input", { type: 'number', name: 'lat', value: this.state.location.lat, className: 'goToLocSearch', onChange: (e) => this.changeLat(e) }),
                React.createElement("div", { className: 'goToLocLabels noselect' }, "Long"),
                React.createElement("input", { type: 'number', name: 'lng', value: this.state.location.lng, className: 'goToLocSearch', onChange: (e) => this.changeLng(e) }),
                React.createElement("input", { type: 'submit', value: 'GO', className: 'goToLocButton' }))));
    }
}
class Location extends React.Component {
    constructor(props) {
        super(props);
        this.map = null;
    }
    render() {
        return (React.createElement("div", { className: this.props.isMobile ? 'mapLocationInfo mobile' : 'mapLocationInfo' },
            React.createElement("img", { src: this.props.src, alt: this.props.title + " thumbnail" }),
            React.createElement("div", { style: { flex: '0 0 auto' } },
                React.createElement("div", { style: { display: 'flex', flexDirection: 'column', height: '95px' } },
                    React.createElement("h2", { className: this.props.isMobile ? 'listTitle mobile' : 'listTitle' }, this.props.title),
                    React.createElement("p", { className: this.props.isMobile ? 'listDesc mobile' : 'listDesc' }, this.props.desc)))));
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
];
class Map extends React.Component {
    constructor(props) {
        super(props);
        this.goToLocation = (location) => {
            this.map.panTo(location);
        };
    }
    render() {
        return (React.createElement("div", { style: { flex: '1' } },
            React.createElement(react_responsive_1.default, { minDeviceWidth: 1224 },
                React.createElement("div", { className: "mapSection" },
                    React.createElement("div", { className: 'mapSideBar' },
                        React.createElement(GoToLocation, { goToLocationFunc: this.goToLocation }),
                        React.createElement("div", { className: 'scrollableList' }, testLocations.map((location, i) => {
                            return (React.createElement(Location, { isMobile: false, title: location.title, desc: location.desc, src: location.src, key: 'location' + i }));
                        }))),
                    React.createElement("div", { className: 'mapContainer' },
                        React.createElement(google_map_react_1.default, { ref: 'mapRef', onGoogleApiLoaded: ({ map, maps }) => { this.map = map; }, yesIWantToUseGoogleMapApiInternals: true, bootstrapURLKeys: { key: 'AIzaSyDqIVtQawOQ0DqWTSP3LG60nVhGJvsdSHk' }, defaultZoom: 10, defaultCenter: { lat: -33.8688, lng: 151.2093 }, options: { fullscreenControl: false } })))),
            React.createElement(react_responsive_1.default, { maxDeviceWidth: 1223 },
                React.createElement("div", { className: "mapSection mobile" },
                    React.createElement("div", { className: 'mapContainer mobile' },
                        React.createElement(google_map_react_1.default, { ref: 'mapRef', onGoogleApiLoaded: ({ map, maps }) => { this.map = map; }, yesIWantToUseGoogleMapApiInternals: true, bootstrapURLKeys: { key: 'AIzaSyDqIVtQawOQ0DqWTSP3LG60nVhGJvsdSHk' }, defaultZoom: 10, defaultCenter: { lat: -33.8688, lng: 151.2093 }, options: { fullscreenControl: false } })),
                    React.createElement("div", { className: 'mapSideBar mobile' },
                        React.createElement(GoToLocation, { goToLocationFunc: this.goToLocation }),
                        React.createElement("div", { className: 'scrollableList' }, testLocations.map((location, i) => {
                            return (React.createElement(Location, { isMobile: true, title: location.title, desc: location.desc, src: location.src, key: 'location' + i }));
                        })))))));
    }
}
exports.default = Map;
//# sourceMappingURL=map.js.map