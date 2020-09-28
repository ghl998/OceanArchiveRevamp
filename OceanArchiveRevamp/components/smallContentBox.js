"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require('react');
class SmallContentBox extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement("div", { className: 'smallContentBox', style: { backgroundImage: "url(" + this.props.img + ")" } },
            React.createElement("div", { className: 'smallContentBoxBar' },
                React.createElement("div", { className: 'titleAndType' },
                    React.createElement("h1", null, this.props.title),
                    React.createElement("h2", null, this.props.type)),
                React.createElement("div", { className: 'year' },
                    React.createElement("h2", null, this.props.year))),
            React.createElement("div", { className: 'fillerBox' }),
            React.createElement("div", { className: 'smallContentBoxBar' },
                React.createElement("svg", { className: "collections_in_collection_icon", viewBox: "-18 0 40 20", version: "1.1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink" },
                    React.createElement("g", { stroke: "none", strokeWidth: "1", fill: "#fff" },
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
                React.createElement("div", null,
                    React.createElement("h2", null,
                        this.props.numCollections,
                        " Collections"),
                    React.createElement("h2", null,
                        this.props.numItems,
                        " Items")))));
    }
}
exports.default = SmallContentBox;
//# sourceMappingURL=smallContentBox.js.map