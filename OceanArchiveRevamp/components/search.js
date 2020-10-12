"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require('react');
const reactstrap_1 = require("reactstrap");
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
                React.createElement("form", null,
                    React.createElement(reactstrap_1.ModalBody, { className: 'advSearchBody' },
                        React.createElement("div", { className: 'advSearchCat' }, "Advanced Search"),
                        React.createElement("div", { className: 'advSearchCat' }, "Filters")),
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