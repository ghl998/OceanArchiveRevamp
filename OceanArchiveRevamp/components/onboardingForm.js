"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require('react');
const bubble_1 = require("./bubble");
const react_router_dom_1 = require("react-router-dom");
const Constant = require("../constants");
class Tag extends React.Component {
    constructor(props) {
        super(props);
        this.toggleSelect = () => {
            this.setState({
                selected: !this.state.selected
            });
        };
        this.state = {
            selected: false
        };
    }
    render() {
        return (React.createElement("div", { className: this.state.selected ? 'tag large noselect active' : 'tag large noselect', onClick: this.toggleSelect }, this.props.label));
    }
}
class OnBoardingForm extends React.Component {
    constructor(props) {
        super(props);
        this.headers = [
            { main: "START YOUR DIVE BY FINDING RECOMMENDED ITEMS FOR YOU ?", sub: "" },
            { main: "SELECT YOUR PREFERRED FOCUS AREA/S", sub: "" },
            { main: "SELECT TAGS THAT INTEREST YOU", sub: "Selecting none will be the same as selecting all tags" }
        ];
        this.next = () => {
            var n = this.state.activeIndex >= 2 ? 2 : this.state.activeIndex + 1;
            if (this.state.activeIndex < 2) {
                var pagePositions = this.state.pagePositions;
                for (var i = 0; i < this.state.pagePositions.length; i = i + 1) {
                    pagePositions[i] = pagePositions[i] - 100;
                }
            }
            this.setState({
                activeIndex: n,
                pagePositions: pagePositions
            });
        };
        this.prev = () => {
            var n = this.state.activeIndex <= 0 ? 0 : this.state.activeIndex - 1;
            if (this.state.activeIndex > 0) {
                var pagePositions = this.state.pagePositions;
                for (var i = 0; i < this.state.pagePositions.length; i = i + 1) {
                    pagePositions[i] = pagePositions[i] + 100;
                }
            }
            this.setState({
                activeIndex: n,
                pagePositions: pagePositions
            });
        };
        this.bubbleCallback = (e) => {
            return (console.log(e));
        };
        this.bubbleRef = React.createRef();
        this.state = {
            activeIndex: 0,
            pagePositions: [0, 0, 0]
        };
    }
    render() {
        return (React.createElement("div", null,
            React.createElement("div", { className: 'onboardHeader' },
                React.createElement("span", { className: 'onboardMain' }, this.headers[this.state.activeIndex].main),
                React.createElement("span", { className: 'onboardSub' }, this.headers[this.state.activeIndex].sub)),
            React.createElement("div", { className: 'onboardContainer' },
                React.createElement("div", { className: 'onboardInner', style: { transform: 'translateX(' + this.state.pagePositions[0] + 'vw)' } },
                    React.createElement("div", { className: 'onboardButton right Yes noselect', onClick: this.next }, "YES"),
                    React.createElement(react_router_dom_1.NavLink, { to: '/', onClick: () => this.props.onBoard(true) },
                        React.createElement("div", { className: 'onboardButton Skip noselect' }, "SKIP"))),
                React.createElement("div", { className: 'onboardInner', style: { transform: 'translateX(' + this.state.pagePositions[1] + 'vw)' }, onClick: this.next },
                    React.createElement(bubble_1.Bubble, { callback: this.bubbleCallback, ref: this.bubbleRef })),
                React.createElement("div", { className: 'onboardInner', style: { alignItems: 'flex-start', transform: 'translateX(' + this.state.pagePositions[2] + 'vw)' } },
                    React.createElement("div", { className: 'onboardTags' }, Constant.mainTags.map((tag, i) => React.createElement(Tag, { key: 'tag' + i, label: tag.label }))))),
            React.createElement("div", { className: 'onBoardFooter' },
                React.createElement("div", { className: 'fillerBox' }),
                React.createElement(react_router_dom_1.NavLink, { to: '/', onClick: () => this.props.onBoard(true) },
                    React.createElement("div", { className: this.state.activeIndex == 2 ? 'submitButton noselect' : 'submitButton noselect hidden' }, "FINISH")))));
    }
}
exports.default = OnBoardingForm;
//# sourceMappingURL=onboardingForm.js.map