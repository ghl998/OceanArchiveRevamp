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
const onboardingForm_1 = require("./components/onboardingForm");
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
        };
        this.state = {
            onBoarded: false
        };
    }
    render() {
        return (React.createElement("div", { className: "rootPage" },
            this.state.onBoarded ? React.createElement(header_1.default, null) : React.createElement("div", null),
            React.createElement(react_router_dom_1.Switch, null,
                React.createElement(react_router_dom_1.Route, { path: "/", exact: true, render: () => {
                        return (this.state.onBoarded ?
                            React.createElement(react_router_dom_1.Redirect, { to: "/home" }) :
                            React.createElement(react_router_dom_1.Redirect, { to: "/onBoard" }));
                    } }),
                React.createElement(react_router_dom_1.Route, { path: "/onBoard", render: () => (React.createElement(onboardingForm_1.default, { onBoard: (x) => this.onBoard(x) })) }),
                React.createElement(react_router_dom_1.Route, { path: "/home", component: home_1.default }),
                React.createElement(react_router_dom_1.Route, { path: "/map", component: map_1.default }),
                React.createElement(react_router_dom_1.Route, { path: "/myItems", component: myItems_1.default }),
                React.createElement(react_router_dom_1.Route, { path: "/myCollections", component: myCollections_1.default }),
                React.createElement(react_router_dom_1.Route, { path: "/myAnnouncements", component: myAnnouncements_1.default }),
                React.createElement(react_router_dom_1.Route, { path: "/itemPage", component: itemCollectionPage_1.default }),
                React.createElement(react_router_dom_1.Route, { path: "/createItem", component: createItem_1.default }))));
    }
}
ReactDOM.render(React.createElement(react_router_dom_1.BrowserRouter, null,
    React.createElement(Homepage, null)), document.getElementById('root'));
//# sourceMappingURL=app.js.map