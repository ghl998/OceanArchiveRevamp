"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require('react');
const reactstrap_1 = require("reactstrap");
const react_select_1 = require("react-select");
const Constants = require("../constants");
const connectorTypes = [
    'AND',
    'OR',
    'AND NOT',
    'OR NOT'
];
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
class Keyword extends React.Component {
    constructor(props) {
        super(props);
        this.toggleDropdown = () => {
            this.setState({
                dropdownIsOpen: !this.state.dropdownIsOpen
            });
        };
        this.changeCurrentConnector = (newConnector) => {
            this.setState({
                currentConnector: newConnector
            });
            this.props.changeConnector(newConnector);
        };
        this.state = {
            dropdownIsOpen: false,
            currentConnector: connectorTypes[0]
        };
    }
    render() {
        return (React.createElement(reactstrap_1.FormGroup, { className: 'advSearchSecKeyword' },
            React.createElement(reactstrap_1.Dropdown, { isOpen: this.state.dropdownIsOpen, toggle: this.toggleDropdown, direction: 'down' },
                React.createElement(reactstrap_1.DropdownToggle, { caret: true }, this.state.currentConnector),
                React.createElement(reactstrap_1.DropdownMenu, null, connectorTypes.map((conn, i) => {
                    return (React.createElement(reactstrap_1.DropdownItem, { key: 'conn' + i, onClick: () => this.changeCurrentConnector(conn) }, conn));
                }))),
            React.createElement(reactstrap_1.Input, { className: 'inputBox', type: 'text', onChange: (e) => this.props.changeValue(e) }),
            React.createElement("div", { className: 'delete', onClick: () => this.props.delete() }, "X")));
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
        this.changeFocusArea = (x) => {
            var newSearchOptions = this.state.searchOptions;
            switch (x) {
                case 0:
                    newSearchOptions.focusAreas.sciTech = !newSearchOptions.focusAreas.sciTech;
                    break;
                case 1:
                    newSearchOptions.focusAreas.art = !newSearchOptions.focusAreas.art;
                    break;
                case 2:
                    newSearchOptions.focusAreas.activism = !newSearchOptions.focusAreas.activism;
                    break;
            }
            this.setState({
                searchOptions: newSearchOptions
            });
        };
        this.updateKeyword = (e) => {
            var newSearchOptions = this.state.searchOptions;
            newSearchOptions.primaryKeyword = e.target.value;
            this.setState({
                searchOptions: newSearchOptions
            });
        };
        this.addSecKeyword = () => {
            var newSearchOptions = this.state.searchOptions;
            newSearchOptions.secondaryKeywords.push({ connector: connectorTypes[0], value: '' });
            this.setState({
                searchOptions: newSearchOptions
            });
            //console.log(this.state.searchOptions);
        };
        this.changeConnector = (conn, i) => {
            var newSearchOptions = this.state.searchOptions;
            newSearchOptions.secondaryKeywords[i].connector = conn;
            this.setState({
                searchOptions: newSearchOptions
            });
        };
        this.changeValue = (val, i) => {
            var newSearchOptions = this.state.searchOptions;
            newSearchOptions.secondaryKeywords[i].value = val;
            this.setState({
                searchOptions: newSearchOptions
            });
        };
        this.deleteKeyword = (i) => {
            var newSearchOptions = this.state.searchOptions;
            newSearchOptions.secondaryKeywords.splice(i, 1);
            this.setState({
                searchOptions: newSearchOptions
            });
        };
        this.state = {
            isOpen: false,
            searchOptions: {
                primaryKeyword: '',
                secondaryKeywords: [],
                focusAreas: {
                    sciTech: false,
                    art: false,
                    activism: false
                },
                itemTypes: [],
                langs: [],
                oceans: [],
                regions: [],
                dates: { to: 'TODAY', from: 'TIME START' },
                tags: []
            }
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
                            React.createElement(reactstrap_1.Input, { type: 'text', onChange: (e) => this.updateKeyword(e) })),
                        React.createElement(reactstrap_1.FormGroup, null,
                            React.createElement(reactstrap_1.Label, { for: 'secondaryKeywords' }, "Secondary Keywords"),
                            React.createElement("div", { className: 'advSearchKeywordsContainer' }, this.state.searchOptions.secondaryKeywords.map((secKeyword, i) => {
                                return (React.createElement(Keyword, { key: 'secKeyword' + i, changeConnector: (conn) => this.changeConnector(conn, i), changeValue: (val) => this.changeValue(val, i), delete: () => this.deleteKeyword(i) }));
                            })),
                            React.createElement("div", { className: 'advSearchModalButton add', onClick: this.addSecKeyword }, "ADD SEARCH BOX")),
                        React.createElement("div", { className: 'advSearchCat' }, "Filters"),
                        React.createElement(reactstrap_1.FormGroup, null,
                            React.createElement(reactstrap_1.Label, { for: 'focus' }, "Focus Area"),
                            React.createElement("div", { className: 'advSearchFocusGroup' },
                                React.createElement("div", { className: this.state.searchOptions.focusAreas.sciTech ? 'advSearchFocus left active' : 'advSearchFocus left', onClick: () => this.changeFocusArea(0) }, "Science & Tech"),
                                React.createElement("div", { className: this.state.searchOptions.focusAreas.art ? 'advSearchFocus active' : 'advSearchFocus', onClick: () => this.changeFocusArea(1) }, "Art"),
                                React.createElement("div", { className: this.state.searchOptions.focusAreas.activism ? 'advSearchFocus right active' : 'advSearchFocus right', onClick: () => this.changeFocusArea(2) }, "Activism"))),
                        React.createElement(reactstrap_1.Label, { for: 'types' }, "Item Types"),
                        React.createElement("div", { className: 'advSearchWrapContainer' }, Constants.itemTypes.map((type, i) => React.createElement(reactstrap_1.FormGroup, { className: 'advSearchCheckboxOuter', check: true, inline: true, key: 'type' + i },
                            React.createElement(reactstrap_1.Label, { check: true },
                                React.createElement(reactstrap_1.Input, { type: 'checkbox', className: 'advSearchCheckbox' }),
                                " ",
                                React.createElement("span", null, type.label))))),
                        React.createElement(reactstrap_1.FormGroup, { className: 'advSearchDropdown' },
                            React.createElement(reactstrap_1.Label, { for: 'lang' }, "Language"),
                            React.createElement(react_select_1.default, { className: 'react-select-contianer', classNamePrefix: 'react-select', options: Constants.languages, isMulti: true, isSearchable: true })),
                        React.createElement(reactstrap_1.FormGroup, { className: 'advSearchDropdown' },
                            React.createElement(reactstrap_1.Label, { for: 'oceans' }, "Ocean/s"),
                            React.createElement(react_select_1.default, { className: 'react-select-contianer', classNamePrefix: 'react-select', options: Constants.oceans, isMulti: true, isSearchable: true })),
                        React.createElement(reactstrap_1.FormGroup, { className: 'advSearchDropdown' },
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
class SearchResult extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement("div", { className: 'searchResultContainer' },
            React.createElement("img", { src: this.props.result.imgURL }),
            React.createElement("div", null,
                React.createElement("span", { className: 'title' }, this.props.result.title),
                React.createElement("div", { className: 'authorsContainer' }, this.props.result.authors.map((author, i) => {
                    return (React.createElement("span", { className: 'authors', key: this.props.result.title + "_author_" + i }, author));
                })),
                React.createElement("div", { className: 'tagsContainer' }, this.props.result.tags.map((tag, i) => {
                    return (React.createElement("span", { className: 'tag', key: this.props.result.title + '_tag_' + i }, tag));
                })))));
    }
}
const searchResults = [
    { title: 'Fish in the ocean', authors: ['Jack White', 'Alison Morrison'], tags: ['Waste', 'Ocean Health', 'Polution'], imgURL: 'https://live.staticflickr.com/2736/4098744853_0c65ccb710_b.jpg' },
    { title: 'Fish in the ocean', authors: ['Jack White', 'Alison Morrison'], tags: ['Waste', 'Ocean Health', 'Polution'], imgURL: 'https://live.staticflickr.com/2736/4098744853_0c65ccb710_b.jpg' },
    { title: 'Fish in the ocean', authors: ['Jack White', 'Alison Morrison'], tags: ['Waste', 'Ocean Health', 'Polution'], imgURL: 'https://live.staticflickr.com/2736/4098744853_0c65ccb710_b.jpg' },
    { title: 'Fish in the ocean', authors: ['Jack White', 'Alison Morrison'], tags: ['Waste', 'Ocean Health', 'Polution'], imgURL: 'https://live.staticflickr.com/2736/4098744853_0c65ccb710_b.jpg' },
    { title: 'Fish in the ocean', authors: ['Jack White', 'Alison Morrison'], tags: ['Waste', 'Ocean Health', 'Polution'], imgURL: 'https://live.staticflickr.com/2736/4098744853_0c65ccb710_b.jpg' },
    { title: 'Fish in the ocean', authors: ['Jack White', 'Alison Morrison'], tags: ['Waste', 'Ocean Health', 'Polution'], imgURL: 'https://live.staticflickr.com/2736/4098744853_0c65ccb710_b.jpg' },
    { title: 'Fish in the ocean', authors: ['Jack White', 'Alison Morrison'], tags: ['Waste', 'Ocean Health', 'Polution'], imgURL: 'https://live.staticflickr.com/2736/4098744853_0c65ccb710_b.jpg' },
    { title: 'Fish in the ocean', authors: ['Jack White', 'Alison Morrison'], tags: ['Waste', 'Ocean Health', 'Polution'], imgURL: 'https://live.staticflickr.com/2736/4098744853_0c65ccb710_b.jpg' },
    { title: 'Fish in the ocean', authors: ['Jack White', 'Alison Morrison'], tags: ['Waste', 'Ocean Health', 'Polution'], imgURL: 'https://live.staticflickr.com/2736/4098744853_0c65ccb710_b.jpg' },
    { title: 'Fish in the ocean', authors: ['Jack White', 'Alison Morrison'], tags: ['Waste', 'Ocean Health', 'Polution'], imgURL: 'https://live.staticflickr.com/2736/4098744853_0c65ccb710_b.jpg' },
    { title: 'Fish in the ocean', authors: ['Jack White', 'Alison Morrison'], tags: ['Waste', 'Ocean Health', 'Polution'], imgURL: 'https://live.staticflickr.com/2736/4098744853_0c65ccb710_b.jpg' },
    { title: 'Fish in the ocean', authors: ['Jack White', 'Alison Morrison'], tags: ['Waste', 'Ocean Health', 'Polution'], imgURL: 'https://live.staticflickr.com/2736/4098744853_0c65ccb710_b.jpg' },
    { title: 'Fish in the ocean', authors: ['Jack White', 'Alison Morrison'], tags: ['Waste', 'Ocean Health', 'Polution'], imgURL: 'https://live.staticflickr.com/2736/4098744853_0c65ccb710_b.jpg' },
];
class Search extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement("div", { className: 'searchPage' },
            React.createElement(AdvancedSearchModal, null),
            React.createElement("div", { className: 'searchResults' }, searchResults.map((result, i) => {
                return (React.createElement(SearchResult, { key: "result" + i, result: result }));
            }))));
    }
}
exports.default = Search;
//# sourceMappingURL=search.js.map