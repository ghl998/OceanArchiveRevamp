"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require('react');
const reactstrap_1 = require("reactstrap");
const react_select_1 = require("react-select");
const Constants = require("../constants");
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
class AdvancedSearchModal extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = () => this.setState({
            isOpen: !this.state.isOpen
        });
        this.disableScroll = () => {
            document.body.style.overflow = 'hidden';
        };
        this.enableScroll = () => {
            document.body.style.overflow = 'auto';
        };
        this.state = {
            isOpen: false
        };
    }
    render() {
        return (React.createElement("div", { className: 'advSearchOuter' },
            React.createElement("div", { className: 'advSearchButton', onClick: this.toggle }, "ADVANCED SEARCH"),
            React.createElement(reactstrap_1.Modal, { isOpen: this.state.isOpen, toggle: this.toggle, onOpened: this.disableScroll, onClosed: this.enableScroll },
                React.createElement(reactstrap_1.Form, null,
                    React.createElement(reactstrap_1.ModalBody, { className: 'advSearchBody' },
                        React.createElement("div", { className: 'advSearchCat' }, "Advanced Search"),
                        React.createElement(reactstrap_1.FormGroup, null,
                            React.createElement(reactstrap_1.Label, { for: 'keyword' }, "Keyword"),
                            React.createElement(reactstrap_1.Input, { type: 'text' })),
                        React.createElement("div", { className: 'advSearchCat' }, "Filters"),
                        React.createElement(reactstrap_1.FormGroup, null,
                            React.createElement(reactstrap_1.Label, { for: 'focus' }, "Focus Area"),
                            React.createElement(reactstrap_1.ButtonGroup, null,
                                React.createElement(reactstrap_1.Button, null, "Science & Tech"),
                                React.createElement(reactstrap_1.Button, null, "Art"),
                                React.createElement(reactstrap_1.Button, null, "Activism"))),
                        React.createElement(reactstrap_1.Label, { for: 'types' }, "Item Types"),
                        React.createElement("div", { className: 'advSearchWrapContainer' }, Constants.itemTypes.map((type, i) => React.createElement(reactstrap_1.FormGroup, { className: 'advSearchCheckboxOuter', check: true, inline: true, key: 'type' + i },
                            React.createElement(reactstrap_1.Label, { check: true },
                                React.createElement(reactstrap_1.Input, { type: 'checkbox', className: 'advSearchCheckbox' }),
                                " ",
                                React.createElement("span", null, type.label))))),
                        React.createElement(reactstrap_1.FormGroup, null,
                            React.createElement(reactstrap_1.Label, { for: 'lang' }, "Language")),
                        React.createElement(reactstrap_1.FormGroup, null,
                            React.createElement(reactstrap_1.Label, { for: 'oceans' }, "Ocean/s"),
                            React.createElement(react_select_1.default, { className: 'react-select-contianer', classNamePrefix: 'react-select', options: Constants.oceans, isMulti: true, isSearchable: true })),
                        React.createElement(reactstrap_1.FormGroup, null,
                            React.createElement(reactstrap_1.Label, { for: 'countries' }, "Country/s"),
                            React.createElement(react_select_1.default, { className: 'react-select-contianer', classNamePrefix: 'react-select', options: Constants.countries, value: Constants.countries.value, isMulti: true, isSeachable: true })),
                        React.createElement(reactstrap_1.FormGroup, null,
                            React.createElement(reactstrap_1.Label, null, "Publication Date"),
                            React.createElement(reactstrap_1.Label, { for: 'dFrom' }, "From"),
                            React.createElement(reactstrap_1.Input, { type: 'date', name: 'dFrom' }),
                            React.createElement(reactstrap_1.Label, { for: 'dTo' }, "To"),
                            React.createElement(reactstrap_1.Input, { type: 'date', name: 'dTo' })),
                        React.createElement(reactstrap_1.Label, null, "Tags"),
                        React.createElement("div", { className: 'advSearchWrapContainer' }, Constants.mainTags.map((tag, i) => React.createElement(Tag, { key: 'tag' + i, label: tag.label })))),
                    React.createElement(reactstrap_1.ModalFooter, { className: 'advSearchFooter' },
                        React.createElement("div", { className: 'advSearchModalButton cancel', onClick: this.toggle }, "CANCEL"),
                        React.createElement("div", { className: 'fillerBox' }),
                        React.createElement("div", { className: 'advSearchModalButton search' }, "SEARCH"))))));
    }
}
class Search extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement("div", { className: 'searchPage' },
            React.createElement(AdvancedSearchModal, null),
            React.createElement("div", { className: 'searchResults' },
                React.createElement("div", null, "Item"))));
    }
}
exports.default = Search;
//# sourceMappingURL=search.js.map