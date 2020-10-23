"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require('react');
const react_router_dom_1 = require("react-router-dom");
const SciTech_Icon_Black_png_1 = require("../images/SciTech_Icon_Black.png");
const brushBlack_png_1 = require("../images/brushBlack.png");
const greenBlack_png_1 = require("../images/greenBlack.png");
const Constant = require("../constants");
class LargeContentBox extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement("div", { className: 'largeContentBox', style: { backgroundImage: "url(" + this.props.img + ")", backgroundColor: this.props.bgColour } },
            React.createElement("div", { className: 'largeContentBoxBar', style: { background: this.props.bgColour } },
                React.createElement("img", { className: 'icon', src: this.props.src }),
                React.createElement("div", { className: 'titleAndType' },
                    React.createElement("h1", null, this.props.title),
                    React.createElement("h2", null, this.props.type))),
            React.createElement("div", { style: { height: '240px' } }),
            React.createElement("div", { className: 'largeContentBoxBar', style: { background: this.props.bgColour } },
                React.createElement("svg", { className: "collections_in_collection_icon", viewBox: "-18 0 40 20", version: "1.1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink" },
                    React.createElement("g", { stroke: "none", strokeWidth: "1", fill: "#000" },
                        React.createElement("g", { id: "Circle1" },
                            React.createElement("circle", { cx: "15.5", cy: "15.5", r: "3.5" })),
                        React.createElement("g", { id: "Circle2" },
                            React.createElement("circle", { cx: "-8.5", cy: "15.5", r: "3.5" })),
                        React.createElement("g", { id: "Circle3" },
                            React.createElement("circle", { cx: "3.5", cy: "3.5", r: "3.5" })),
                        React.createElement("g", { id: "Circle4" },
                            React.createElement("circle", { cx: "3.5", cy: "15.5", r: "3.5" })),
                        React.createElement("g", { id: "Line1" },
                            React.createElement("rect", { x: "3", y: "3.5", width: "1", height: "12" })),
                        React.createElement("g", { id: "Line2" },
                            React.createElement("rect", { x: "3", y: "3.5", width: "1", height: "17", transform: "rotate(-45 3 3.5)" })),
                        React.createElement("g", { id: "Line3" },
                            React.createElement("rect", { x: "3", y: "3.5", width: "1", height: "17", transform: "rotate(45 3 3.5)" })))),
                React.createElement("div", { className: 'itemsAndCollectionsCount' },
                    React.createElement("h1", null,
                        this.props.numCollections,
                        " Collections"),
                    React.createElement("h1", null,
                        this.props.numItems,
                        " Items")),
                React.createElement("div", { className: 'tagsSection' }))));
    }
}
class NewAndTrending extends React.Component {
    render() {
        return (React.createElement("div", { className: 'newAndTrending' },
            React.createElement("h1", { style: { paddingLeft: '10px', flex: '0', minWidth: '200px' } }, "New & Trending"),
            React.createElement("div", { className: 'newAndTrendingContainer' },
                React.createElement(react_router_dom_1.NavLink, { to: '/itemPage' },
                    React.createElement(LargeContentBox, { bgColour: Constant.ACTIVISM, src: greenBlack_png_1.default, title: 'Pacific Ocean Garbage Patch', type: 'Other', numCollections: '2', numItems: '1', img: 'https://live.staticflickr.com/2490/4214811049_1264c95738_b.jpg' })),
                React.createElement(LargeContentBox, { bgColour: Constant.SCITECH, src: SciTech_Icon_Black_png_1.default, title: 'The Various Shark Species', type: 'Research Paper', numCollections: '3', numItems: '2', img: 'https://live.staticflickr.com/194/463483080_828f04aba3_b.jpg' }),
                React.createElement(LargeContentBox, { bgColour: Constant.ART, src: brushBlack_png_1.default, title: 'Under The Ocean: Life with Turtles', type: 'Video', numCollections: '1', numItems: '4', img: 'https://live.staticflickr.com/2534/32899940111_6d3f8956d7_b.jpg' }))));
    }
}
exports.default = NewAndTrending;
//# sourceMappingURL=newAndTrending.js.map