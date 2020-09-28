"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require('react');
const reactstrap_1 = require("reactstrap");
class Announcement extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement("div", { className: 'announcement' },
            React.createElement("h2", null, this.props.title),
            React.createElement("p", null, this.props.text),
            React.createElement("a", { style: {} }, "View")));
    }
}
class AnnouncementsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.items = [
            [
                {
                    title: 'TITLE 1',
                    text: 'Text for 1',
                    key: 1
                },
                {
                    title: 'TITLE 2',
                    text: 'Text for 2',
                    key: 2
                },
                {
                    title: 'TITLE 3',
                    text: 'Text for 3',
                    key: 3
                }
            ],
            [
                {
                    title: 'TITLE 4',
                    text: 'Text for 4',
                    key: 4
                },
                {
                    title: 'TITLE 5',
                    text: 'Text for 5',
                    key: 5
                },
                {
                    title: 'TITLE 6',
                    text: 'Text for 6',
                    key: 6
                }
            ],
            [
                {
                    title: 'TITLE 7',
                    text: 'Text for 7',
                    key: 7
                },
                {
                    title: 'TITLE 8',
                    text: 'Text for 8',
                    key: 8
                },
                {
                    title: 'TITLE 9',
                    text: 'Text for 9',
                    key: 9
                }
            ]
        ];
        this.slides = this.items.map((item, i) => {
            return (React.createElement(reactstrap_1.CarouselItem, { onExiting: () => this.setState({ animating: true }), onExited: () => this.setState({ animating: false }), key: i },
                React.createElement("div", { style: { display: 'flex' } },
                    React.createElement(Announcement, { title: item[0].title, text: item[0].text }),
                    React.createElement(Announcement, { title: item[1].title, text: item[1].text }),
                    React.createElement(Announcement, { title: item[2].title, text: item[2].text }))));
        });
        this.next = () => {
            if (this.state.animating)
                return;
            var nextIndex = ((this.state.activeIndex + 1) > (this.items.length - 1)) ? 0 : (this.state.activeIndex + 1);
            this.setState({ activeIndex: nextIndex });
        };
        this.prev = () => {
            if (this.state.animating)
                return;
            var nextIndex = (this.state.activeIndex - 1) < 0 ? (this.items.length - 1) : (this.state.activeIndex - 1);
            this.setState({ activeIndex: nextIndex });
        };
        this.goToIndex = (newIndex) => {
            this.setState({ activeIndex: newIndex });
        };
        this.state = {
            activeIndex: 0,
            animating: false
        };
    }
    render() {
        return (React.createElement("div", { className: 'announcementsContainer', style: { height: '250px', width: '100%', padding: '10px' } },
            React.createElement("h1", { style: { flex: '0', minWidth: '200px' } }, "Announcements"),
            React.createElement(reactstrap_1.Carousel, { activeIndex: this.state.activeIndex, next: this.next, previous: this.prev },
                this.slides,
                React.createElement(reactstrap_1.CarouselIndicators, { items: this.items, activeIndex: this.state.activeIndex, onClickHandler: this.goToIndex }))));
    }
}
exports.default = AnnouncementsContainer;
//# sourceMappingURL=announcementsContainer.js.map