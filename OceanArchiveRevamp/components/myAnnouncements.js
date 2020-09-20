"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require('react');
var react_router_dom_1 = require("react-router-dom");
var reactstrap_1 = require("reactstrap");
var SearchBar = /** @class */ (function (_super) {
    __extends(SearchBar, _super);
    function SearchBar(props) {
        var _this = _super.call(this, props) || this;
        _this.toggle = function () { return _this.setState({
            isOpen: !_this.state.isOpen
        }); };
        _this.switchSearch = function (setSearchBy) { return _this.setState({
            searchBy: setSearchBy
        }); };
        _this.state = {
            searchBy: 'Title',
            isOpen: false
        };
        return _this;
    }
    SearchBar.prototype.render = function () {
        var _this = this;
        return (React.createElement("form", { className: 'altSearchContainer' },
            React.createElement(reactstrap_1.ButtonDropdown, { className: 'searchDropdown', isOpen: this.state.isOpen, toggle: this.toggle, direction: 'down' },
                React.createElement(reactstrap_1.DropdownToggle, { className: 'altDropdown', caret: true }, this.state.searchBy),
                React.createElement(reactstrap_1.DropdownMenu, { className: 'altDropdownMenu' },
                    React.createElement(reactstrap_1.DropdownItem, { onClick: function () { return _this.switchSearch('Title'); } }, "Title"))),
            React.createElement("input", { type: 'search', className: 'altSearchBar', placeholder: 'Search My Announcements' }),
            React.createElement("input", { type: 'submit', className: 'altSearchButton', value: 'Search' })));
    };
    return SearchBar;
}(React.Component));
var ListHeader = /** @class */ (function (_super) {
    __extends(ListHeader, _super);
    function ListHeader(props) {
        return _super.call(this, props) || this;
    }
    ListHeader.prototype.render = function () {
        return (React.createElement("div", { className: 'listItemContainer', style: { fontWeight: 'bold' } },
            React.createElement("div", { className: 'listFixedWidth' }, "Published"),
            React.createElement("div", { className: 'listFixedWidth' }, "Created Date"),
            React.createElement("div", { className: 'listVariableWidth' }, "Title"),
            React.createElement("div", { className: 'listFixedWidth' }, "Options")));
    };
    return ListHeader;
}(React.Component));
var ListItem = /** @class */ (function (_super) {
    __extends(ListItem, _super);
    function ListItem(props) {
        return _super.call(this, props) || this;
    }
    ListItem.prototype.render = function () {
        return (React.createElement("div", { className: 'listItemContainer' },
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
    };
    return ListItem;
}(React.Component));
var MyItems = /** @class */ (function (_super) {
    __extends(MyItems, _super);
    function MyItems(props) {
        var _this = _super.call(this, props) || this;
        _this.switchPage = function (index) {
            //console.log("Index: ", index, " | PagesCount: ", this.pagesCount)
            if (index >= 0 && index < _this.pagesCount)
                _this.setState({
                    currentPage: index
                });
        };
        _this.pageGroup = function (centerPage) {
            if (_this.pagesCount > 7) {
                var group = [1, -1, centerPage - 1, centerPage, centerPage + 1, -2, _this.pagesCount];
                if (centerPage <= 3)
                    group = [1, 2, 3, 4, -1, _this.pagesCount];
                else if (centerPage >= _this.pagesCount - 2)
                    group = [1, -1, _this.pagesCount - 3, _this.pagesCount - 2, _this.pagesCount - 1, _this.pagesCount];
                //console.log("Group: ", group);
                return (group.map(function (i) {
                    return React.createElement(reactstrap_1.PaginationItem, { active: i === _this.state.currentPage + 1, disabled: i < 0, key: i },
                        React.createElement(reactstrap_1.PaginationLink, { onClick: function () { return _this.switchPage(i - 1); }, href: '#' }, i < 0 ? '...' : i));
                }));
            }
            else
                return (_this.pages.map(function (i) {
                    return React.createElement(reactstrap_1.PaginationItem, { active: i === _this.state.currentPage + 1, key: i },
                        React.createElement(reactstrap_1.PaginationLink, { onClick: function () { return _this.switchPage(i - 1); }, href: '#' }, i));
                }));
        };
        _this.dataSet = new Array(100);
        for (var i = 0; i < _this.dataSet.length; i++) {
            _this.dataSet[i] = "Title " + (i + 1);
        }
        //console.log("items: ", this.dataSet);
        _this.itemsPerPage = Math.floor((window.innerHeight - 350) / 50);
        _this.pagesCount = Math.ceil(100 / _this.itemsPerPage);
        //console.log("itemsPerPage: ", this.itemsPerPage, " | pagesCount: ", this.pagesCount);
        _this.pages = new Array(_this.pagesCount);
        for (var i = 0; i < _this.pages.length; i++) {
            _this.pages[i] = (i + 1);
        }
        _this.state = {
            currentPage: 0
        };
        return _this;
    }
    MyItems.prototype.render = function () {
        var _this = this;
        var currentPage = this.state.currentPage;
        return (React.createElement("div", { className: "ICAcontainer" },
            React.createElement("h1", null, "MY ANNOUNCEMENTS"),
            React.createElement(SearchBar, null),
            React.createElement("div", { className: 'listSection' },
                React.createElement(ListHeader, null),
                this.dataSet.slice(currentPage * this.itemsPerPage, (currentPage + 1) * this.itemsPerPage).map(function (data, i) {
                    return React.createElement(ListItem, { key: i, published: true, dateCreated: "01-Jun-2020", title: data });
                })),
            React.createElement("div", { className: 'footerMenu' },
                React.createElement(react_router_dom_1.NavLink, { className: 'buttonSmall', to: "/createAnnouncement" }, "+ Add New"),
                React.createElement("div", { className: 'fillerBox' }),
                React.createElement(reactstrap_1.Pagination, null,
                    React.createElement(reactstrap_1.PaginationItem, { disabled: currentPage <= 0 },
                        React.createElement(reactstrap_1.PaginationLink, { onClick: function () { return _this.switchPage(0); }, first: true, href: '#' })),
                    React.createElement(reactstrap_1.PaginationItem, { disabled: currentPage <= 0 },
                        React.createElement(reactstrap_1.PaginationLink, { onClick: function () { return _this.switchPage(currentPage - 1); }, previous: true, href: '#' })),
                    this.pageGroup(currentPage + 1),
                    React.createElement(reactstrap_1.PaginationItem, { disabled: currentPage >= this.pagesCount - 1 },
                        React.createElement(reactstrap_1.PaginationLink, { onClick: function () { return _this.switchPage(currentPage + 1); }, next: true, href: '#' })),
                    React.createElement(reactstrap_1.PaginationItem, { disabled: currentPage >= this.pagesCount - 1 },
                        React.createElement(reactstrap_1.PaginationLink, { onClick: function () { return _this.switchPage(_this.pagesCount - 1); }, last: true, href: '#' }))))));
    };
    return MyItems;
}(React.Component));
exports.default = MyItems;
//# sourceMappingURL=myAnnouncements.js.map