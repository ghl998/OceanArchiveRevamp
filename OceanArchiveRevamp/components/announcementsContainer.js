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
                    title: 'Ocean Day 2020',
                    text: 'No comfort do written conduct at prevent manners on. Celebrated contrasted discretion him sympathize her collecting occasional. Do answered bachelor occasion in of offended no concerns. Supply worthy warmth branch of no ye. Voice tried known to as my to. Though wished merits or be. Alone visit use these smart rooms ham. No waiting in on enjoyed placing it inquiry.',
                    key: 1
                },
                {
                    title: 'Fish Study Day',
                    text: 'Bed sincerity yet therefore forfeited his certainty neglected questions. Pursuit chamber as elderly amongst on. Distant however warrant farther to of. My justice wishing prudent waiting in be. Comparison age not pianoforte increasing delightful now. Insipidity sufficient dispatched any reasonably led ask. Announcing if attachment resolution sentiments admiration me on diminution.',
                    key: 2
                },
                {
                    title: 'Beach Cleanup Day',
                    text: 'Affronting everything discretion men now own did. Still round match we to. Frankness pronounce daughters remainder extensive has but. Happiness cordially one determine concluded fat. Plenty season beyond by hardly giving of. Consulted or acuteness dejection an smallness if. Outward general passage another as it. Very his are come man walk one next. Delighted prevailed supported too not remainder perpetual who furnished. Nay affronting bed projection compliment instrument.',
                    key: 3
                }
            ],
            [
                {
                    title: 'Boat Trip',
                    text: 'Affronting everything discretion men now own did. Still round match we to. Frankness pronounce daughters remainder extensive has but. Happiness cordially one determine concluded fat. Plenty season beyond by hardly giving of. Consulted or acuteness dejection an smallness if. Outward general passage another as it. Very his are come man walk one next. Delighted prevailed supported too not remainder perpetual who furnished. Nay affronting bed projection compliment instrument.',
                    key: 4
                },
                {
                    title: 'Whale Watching',
                    text: 'No comfort do written conduct at prevent manners on. Celebrated contrasted discretion him sympathize her collecting occasional. Do answered bachelor occasion in of offended no concerns. Supply worthy warmth branch of no ye. Voice tried known to as my to. Though wished merits or be. Alone visit use these smart rooms ham. No waiting in on enjoyed placing it inquiry.',
                    key: 5
                },
                {
                    title: 'Documentary Premier',
                    text: 'Bed sincerity yet therefore forfeited his certainty neglected questions. Pursuit chamber as elderly amongst on. Distant however warrant farther to of. My justice wishing prudent waiting in be. Comparison age not pianoforte increasing delightful now. Insipidity sufficient dispatched any reasonably led ask. Announcing if attachment resolution sentiments admiration me on diminution.',
                    key: 6
                }
            ],
            [
                {
                    title: 'Art Exhibition',
                    text: 'Bed sincerity yet therefore forfeited his certainty neglected questions. Pursuit chamber as elderly amongst on. Distant however warrant farther to of. My justice wishing prudent waiting in be. Comparison age not pianoforte increasing delightful now. Insipidity sufficient dispatched any reasonably led ask. Announcing if attachment resolution sentiments admiration me on diminution.',
                    key: 7
                },
                {
                    title: 'TBA21 Annual Meeting',
                    text: 'Affronting everything discretion men now own did. Still round match we to. Frankness pronounce daughters remainder extensive has but. Happiness cordially one determine concluded fat. Plenty season beyond by hardly giving of. Consulted or acuteness dejection an smallness if. Outward general passage another as it. Very his are come man walk one next. Delighted prevailed supported too not remainder perpetual who furnished. Nay affronting bed projection compliment instrument.',
                    key: 8
                },
                {
                    title: 'Research Project Meetup',
                    text: 'No comfort do written conduct at prevent manners on. Celebrated contrasted discretion him sympathize her collecting occasional. Do answered bachelor occasion in of offended no concerns. Supply worthy warmth branch of no ye. Voice tried known to as my to. Though wished merits or be. Alone visit use these smart rooms ham. No waiting in on enjoyed placing it inquiry.',
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