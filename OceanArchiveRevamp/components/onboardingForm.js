"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require('react');
const bubble_1 = require("./bubble");
const react_router_dom_1 = require("react-router-dom");
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
            this.setState({
                activeIndex: n
            });
        };
        this.prev = () => {
            var n = this.state.activeIndex <= 0 ? 0 : this.state.activeIndex - 1;
            this.setState({
                activeIndex: n
            });
        };
        this.state = {
            activeIndex: 0
        };
    }
    render() {
        return (React.createElement("div", null,
            React.createElement("div", { className: 'onboardHeader' },
                React.createElement("span", { className: 'onboardMain' }, this.headers[this.state.activeIndex].main),
                React.createElement("span", { className: 'onboardSub' }, this.headers[this.state.activeIndex].sub)),
            React.createElement("div", { className: 'onboardContainer' },
                React.createElement("div", { className: this.state.activeIndex == 0 ? 'onboardInner' : 'onboardInner hidden' },
                    React.createElement("div", { className: 'onboardButton right Yes', onClick: this.next }, "YES"),
                    React.createElement(react_router_dom_1.NavLink, { to: '/', onClick: () => this.props.onBoard(true) },
                        React.createElement("div", { className: 'onboardButton Skip' }, "SKIP"))),
                React.createElement("div", { className: this.state.activeIndex == 1 ? 'onboardInner' : 'onboardInner hidden', onClick: this.next },
                    React.createElement(bubble_1.Bubble, null)),
                React.createElement("div", { className: this.state.activeIndex == 2 ? 'onboardInner' : 'onboardInner hidden' })),
            React.createElement("div", { className: 'onBoardFooter' },
                React.createElement("div", { className: 'fillerBox' }),
                React.createElement(react_router_dom_1.NavLink, { to: '/', onClick: () => this.props.onBoard(true) },
                    React.createElement("div", { className: this.state.activeIndex == 2 ? 'submitButton' : 'submitButton hidden' }, "FINISH")))));
    }
}
exports.default = OnBoardingForm;
//# sourceMappingURL=onboardingForm.js.map