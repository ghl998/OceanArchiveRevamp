"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require('react');
const react_router_dom_1 = require("react-router-dom");
const reactstrap_1 = require("reactstrap");
class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = () => this.setState({
            isOpen: !this.state.isOpen
        });
        this.switchSearch = (setSearchBy) => this.setState({
            searchBy: setSearchBy
        });
        this.state = {
            searchBy: 'Title',
            isOpen: false
        };
    }
    render() {
        return (React.createElement("form", { className: 'altSearchContainer' },
            React.createElement(reactstrap_1.ButtonDropdown, { className: 'searchDropdown', isOpen: this.state.isOpen, toggle: this.toggle, direction: 'down' },
                React.createElement(reactstrap_1.DropdownToggle, { className: 'altDropdown', caret: true }, this.state.searchBy),
                React.createElement(reactstrap_1.DropdownMenu, { className: 'altDropdownMenu' },
                    React.createElement(reactstrap_1.DropdownItem, { onClick: () => this.switchSearch('Title') }, "Title"))),
            React.createElement("input", { type: 'search', className: 'altSearchBar', placeholder: 'Search My Items' }),
            React.createElement("input", { type: 'submit', className: 'altSearchButton', value: 'Search' })));
    }
}
class ListHeader extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement("div", { className: 'ListHeaderContainer', style: { fontWeight: 'bold' } },
            React.createElement("div", { className: 'listFixedWidth' }, "Published"),
            React.createElement("div", { className: 'listFixedWidth' }, "Created Date"),
            React.createElement("div", { className: 'listVariableWidth' }, "Title"),
            React.createElement("div", { className: 'listFixedWidth' }, "Options")));
    }
}
class ListCollection extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement("div", { className: 'ListCollectionContainer' },
            React.createElement("div", { className: 'listFixedWidth' }, this.props.published ?
                React.createElement("svg", { width: '30', height: '30' },
                    React.createElement("polyline", { points: '5,20 10,25 25,5', strokeLinecap: 'round', style: { fill: 'none', stroke: '#05B336', strokeWidth: '5' } }),
                    "Yes")
                : React.createElement("svg", { width: '30', height: '30' },
                    React.createElement("g", { fill: 'none', stroke: '#FF3A3A', "stroke-width": '5' },
                        React.createElement("line", { x1: '5', y1: '5', x2: '25', y2: '25', strokeLinecap: 'round' }),
                        React.createElement("line", { x1: '25', y1: '5', x2: '5', y2: '25', strokeLinecap: 'round' })))),
            React.createElement("div", { className: 'listFixedWidth' }, this.props.dateCreated),
            React.createElement("div", { className: 'listVariableWidth' }, this.props.title),
            React.createElement("div", { className: 'listFixedWidth' }, "EDIT")));
    }
}
class MyItems extends React.Component {
    constructor(props) {
        super(props);
        this.switchPage = (index) => {
            //console.log("Index: ", index, " | PagesCount: ", this.pagesCount)
            if (index >= 0 && index < this.pagesCount)
                this.setState({
                    currentPage: index
                });
        };
        this.pageGroup = (centerPage) => {
            if (this.pagesCount > 7) {
                var group = [1, -1, centerPage - 1, centerPage, centerPage + 1, -2, this.pagesCount];
                if (centerPage <= 3)
                    group = [1, 2, 3, 4, -1, this.pagesCount];
                else if (centerPage >= this.pagesCount - 2)
                    group = [1, -1, this.pagesCount - 3, this.pagesCount - 2, this.pagesCount - 1, this.pagesCount];
                //console.log("Group: ", group);
                return (group.map((i) => React.createElement(reactstrap_1.PaginationItem, { active: i === this.state.currentPage + 1, disabled: i < 0, key: i },
                    React.createElement(reactstrap_1.PaginationLink, { onClick: () => this.switchPage(i - 1), href: '#' }, i < 0 ? '...' : i))));
            }
            else
                return (this.pages.map((i) => React.createElement(reactstrap_1.PaginationItem, { active: i === this.state.currentPage + 1, key: i },
                    React.createElement(reactstrap_1.PaginationLink, { onClick: () => this.switchPage(i - 1), href: '#' }, i))));
        };
        this.dataSet = new Array(100);
        for (var i = 0; i < this.dataSet.length; i++) {
            this.dataSet[i] = "Title " + (i + 1);
        }
        //console.log("items: ", this.dataSet);
        this.itemsPerPage = Math.floor((window.innerHeight - 350) / 50);
        this.pagesCount = Math.ceil(100 / this.itemsPerPage);
        //console.log("itemsPerPage: ", this.itemsPerPage, " | pagesCount: ", this.pagesCount);
        this.pages = new Array(this.pagesCount);
        for (var i = 0; i < this.pages.length; i++) {
            this.pages[i] = (i + 1);
        }
        this.state = {
            currentPage: 0
        };
    }
    render() {
        const { currentPage } = this.state;
        return (React.createElement("div", { className: "ICAcontainer" },
            React.createElement("h1", null, "MY ITEMS"),
            React.createElement(SearchBar, null),
            React.createElement("div", { className: 'listSection' },
                React.createElement(ListHeader, null),
                this.dataSet.slice(currentPage * this.itemsPerPage, (currentPage + 1) * this.itemsPerPage).map((data, i) => React.createElement(ListHeader, { key: i, published: true, dateCreated: "02-Jun-2020", title: data }))),
            React.createElement("div", { className: 'footerMenu' },
                React.createElement(react_router_dom_1.NavLink, { className: 'buttonSmall', to: "/createItem" }, "+ Add New"),
                React.createElement("div", { className: 'fillerBox' }),
                React.createElement(reactstrap_1.Pagination, null,
                    React.createElement(reactstrap_1.PaginationItem, { disabled: currentPage <= 0 },
                        React.createElement(reactstrap_1.PaginationLink, { onClick: () => this.switchPage(0), first: true, href: '#' })),
                    React.createElement(reactstrap_1.PaginationItem, { disabled: currentPage <= 0 },
                        React.createElement(reactstrap_1.PaginationLink, { onClick: () => this.switchPage(currentPage - 1), previous: true, href: '#' })),
                    this.pageGroup(currentPage + 1),
                    React.createElement(reactstrap_1.PaginationItem, { disabled: currentPage >= this.pagesCount - 1 },
                        React.createElement(reactstrap_1.PaginationLink, { onClick: () => this.switchPage(currentPage + 1), next: true, href: '#' })),
                    React.createElement(reactstrap_1.PaginationItem, { disabled: currentPage >= this.pagesCount - 1 },
                        React.createElement(reactstrap_1.PaginationLink, { onClick: () => this.switchPage(this.pagesCount - 1), last: true, href: '#' }))))));
    }
}
exports.default = MyItems;
//# sourceMappingURL=myCollections.js.map