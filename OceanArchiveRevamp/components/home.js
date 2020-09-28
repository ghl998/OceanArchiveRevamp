"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("../styles/styles.css");
require("../styles/carousel.css");
var React = require('react');
const newAndTrending_1 = require("./newAndTrending");
const contentSection_1 = require("./contentSection");
const announcementsContainer_1 = require("./announcementsContainer");
const Constant = require("../constants");
document.body.style.backgroundColor = Constant.MAIN_COLOUR;
document.body.style.fontFamily = 'Roboto';
document.body.style.color = '#ffffff';
document.body.style.padding = '0px';
document.body.style.margin = '0px';
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.handleScroll = () => {
            console.log(document.getElementById('contentSection').offsetTop + ' || ' + document.getElementById('home').scrollTop);
            if (document.getElementById('contentSection').offsetTop - document.getElementById('home').scrollTop < 0 && !this.state.tabsCollapsed) {
                this.setState({
                    tabsHeight: '50px',
                    tabsCollapsed: true
                });
            }
            else if (document.getElementById('contentSection').offsetTop - document.getElementById('home').scrollTop > 50 && this.state.tabsCollapsed) {
                this.setState({
                    tabsHeight: '100px',
                    tabsCollapsed: false
                });
            }
        };
        this.state = {
            tabsHeight: '100px',
            tabsCollapsed: false
        };
    }
    render() {
        return (React.createElement("div", { id: 'home', className: 'home', onScroll: this.handleScroll },
            React.createElement(newAndTrending_1.default, null),
            React.createElement(announcementsContainer_1.default, null),
            React.createElement(contentSection_1.default, { tabsHeight: this.state.tabsHeight })));
    }
}
exports.default = Home;
//# sourceMappingURL=home.js.map