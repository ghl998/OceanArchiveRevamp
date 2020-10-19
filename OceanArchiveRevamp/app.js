"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Run this in console after changing code.
//node_modules\.bin\webpack app.tsx --config webpack-config.js
require("./styles/styles.css");
require("./styles/carousel.css");
require("./styles/dropdown.css");
var React = require('react');
var ReactDOM = require('react-dom');
const react_router_dom_1 = require("react-router-dom");
const header_1 = require("./components/header");
const home_1 = require("./components/home");
const map_1 = require("./components/map");
const myItems_1 = require("./components/myItems");
const myCollections_1 = require("./components/myCollections");
const myAnnouncements_1 = require("./components/myAnnouncements");
const itemCollectionPage_1 = require("./components/itemCollectionPage");
const createItem_1 = require("./components/createItem");
const createCollection_1 = require("./components/createCollection");
const createAnnouncement_1 = require("./components/createAnnouncement");
const onboardingForm_1 = require("./components/onboardingForm");
const search_1 = require("./components/search");
const Constant = require("./constants");
document.body.style.backgroundColor = Constant.MAIN_COLOUR;
document.body.style.fontFamily = 'Roboto';
document.body.style.color = '#ffffff';
document.body.style.padding = '0px';
document.body.style.margin = '0px';
class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.onBoard = (isOnBoarded) => {
            this.setState({
                onBoarded: isOnBoarded
            });
            localStorage.setItem('onBoarded', isOnBoarded);
        };
        this.logIn = (loggedIn) => {
            //console.log('before: ', this.state.loggedIn, ' |after: ', loggedIn);
            this.setState({
                loggedIn: loggedIn
            });
            localStorage.setItem('loggedIn', loggedIn);
        };
        this.state = {
            onBoarded: false,
            loggedIn: false
        };
    }
    componentDidMount() {
        const onBoarded = localStorage.getItem('onBoarded') === 'true';
        const loggedIn = localStorage.getItem('loggedIn') === 'true';
        this.setState({
            onBoarded: onBoarded,
            loggedIn: loggedIn
        });
    }
    render() {
        return (React.createElement("div", { className: "rootPage" },
            React.createElement(react_router_dom_1.Switch, null,
                React.createElement(react_router_dom_1.Route, { path: "/", exact: true, render: () => {
                        return (this.state.onBoarded ?
                            React.createElement(react_router_dom_1.Redirect, { to: "/home" }) :
                            React.createElement(react_router_dom_1.Redirect, { to: "/onBoard" }));
                    } }),
                React.createElement(react_router_dom_1.Route, { path: "/onBoard", render: () => (React.createElement(onboardingForm_1.default, { onBoard: (x) => this.onBoard(x) })) }),
                React.createElement(react_router_dom_1.Route, { path: "/home", render: () => {
                        return (React.createElement("div", null,
                            React.createElement(header_1.default, { logIn: (x) => this.logIn(x), loggedIn: this.state.loggedIn }),
                            React.createElement(home_1.default, null)));
                    } }),
                React.createElement(react_router_dom_1.Route, { path: "/map", render: () => {
                        return (React.createElement("div", null,
                            React.createElement(header_1.default, { logIn: (x) => this.logIn(x), loggedIn: this.state.loggedIn }),
                            React.createElement(map_1.default, null)));
                    } }),
                React.createElement(react_router_dom_1.Route, { path: "/myItems", render: () => {
                        return (React.createElement("div", null,
                            React.createElement(header_1.default, { logIn: (x) => this.logIn(x), loggedIn: this.state.loggedIn }),
                            React.createElement(myItems_1.default, null)));
                    } }),
                React.createElement(react_router_dom_1.Route, { path: "/myCollections", render: () => {
                        return (React.createElement("div", null,
                            React.createElement(header_1.default, { logIn: (x) => this.logIn(x), loggedIn: this.state.loggedIn }),
                            React.createElement(myCollections_1.default, null)));
                    } }),
                React.createElement(react_router_dom_1.Route, { path: "/myAnnouncements", render: () => {
                        return (React.createElement("div", null,
                            React.createElement(header_1.default, { logIn: (x) => this.logIn(x), loggedIn: this.state.loggedIn }),
                            React.createElement(myAnnouncements_1.default, null)));
                    } }),
                React.createElement(react_router_dom_1.Route, { path: "/itemPage", render: () => {
                        return (React.createElement("div", null,
                            React.createElement(header_1.default, { logIn: (x) => this.logIn(x), loggedIn: this.state.loggedIn }),
                            React.createElement(itemCollectionPage_1.default, null)));
                    } }),
                React.createElement(react_router_dom_1.Route, { path: "/createItem", render: () => {
                        return (React.createElement("div", null,
                            React.createElement(header_1.default, { logIn: (x) => this.logIn(x), loggedIn: this.state.loggedIn }),
                            React.createElement(createItem_1.default, null)));
                    } }),
                React.createElement(react_router_dom_1.Route, { path: "/createCollection", render: () => {
                        return (React.createElement("div", null,
                            React.createElement(header_1.default, { logIn: (x) => this.logIn(x), loggedIn: this.state.loggedIn }),
                            React.createElement(createCollection_1.default, null)));
                    } }),
                React.createElement(react_router_dom_1.Route, { path: "/createAnnouncement", render: () => {
                        return (React.createElement("div", null,
                            React.createElement(header_1.default, { logIn: (x) => this.logIn(x), loggedIn: this.state.loggedIn }),
                            React.createElement(createAnnouncement_1.default, null)));
                    } }),
                React.createElement(react_router_dom_1.Route, { path: "/search", render: () => {
                        return (React.createElement("div", null,
                            React.createElement(header_1.default, { logIn: (x) => this.logIn(x), loggedIn: this.state.loggedIn }),
                            React.createElement(search_1.default, null)));
                    } }))));
    }
}
ReactDOM.render(React.createElement(react_router_dom_1.BrowserRouter, null,
    React.createElement(Homepage, null)), document.getElementById('root'));
//# sourceMappingURL=app.js.map