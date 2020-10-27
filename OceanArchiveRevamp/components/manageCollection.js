"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require('react');
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
            React.createElement("input", { type: 'search', className: 'altSearchBar', placeholder: 'Search My Collections' }),
            React.createElement("input", { type: 'submit', className: 'altSearchButton', value: 'Search' })));
    }
}
class ListHeader extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement("div", { className: 'listItemContainer', style: { fontWeight: 'bold' } },
            React.createElement("div", { className: 'listFixedWidth' }, "Published"),
            React.createElement("div", { className: 'listFixedWidth' }, "Visible"),
            React.createElement("div", { className: 'listFixedWidth' }, "Created Date"),
            React.createElement("div", { className: 'listVariableWidth' }, "Title"),
            React.createElement("div", { className: 'listFixedWidth' }, "Options")));
    }
}
class ListItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement("div", { className: 'listItemContainer' },
            React.createElement("div", { className: 'listFixedWidth' }, this.props.published ?
                React.createElement("svg", { width: '30', height: '30' },
                    React.createElement("polyline", { points: '5,20 10,25 25,5', strokeLinecap: 'round', style: { fill: 'none', stroke: '#05B336', strokeWidth: '5' } }),
                    "Yes")
                : React.createElement("svg", { width: '30', height: '30' },
                    React.createElement("g", { fill: 'none', stroke: '#FF3A3A', "stroke-width": '5' },
                        React.createElement("line", { x1: '5', y1: '5', x2: '25', y2: '25', strokeLinecap: 'round' }),
                        React.createElement("line", { x1: '25', y1: '5', x2: '5', y2: '25', strokeLinecap: 'round' })))),
            React.createElement("div", { className: 'listFixedWidth' }, this.props.visible ?
                React.createElement("svg", { width: '30', height: '30' },
                    React.createElement("polyline", { points: '5,20 10,25 25,5', strokeLinecap: 'round', style: { fill: 'none', stroke: '#05B336', strokeWidth: '5' } }),
                    "Yes")
                : React.createElement("svg", { width: '30', height: '30' },
                    React.createElement("g", { fill: 'none', stroke: '#FF3A3A', "stroke-width": '5' },
                        React.createElement("line", { x1: '5', y1: '5', x2: '25', y2: '25', strokeLinecap: 'round' }),
                        React.createElement("line", { x1: '25', y1: '5', x2: '5', y2: '25', strokeLinecap: 'round' })))),
            React.createElement("div", { className: 'listFixedWidth' }, this.props.dateCreated),
            React.createElement("div", { className: 'listVariableWidth' }, this.props.title),
            React.createElement("div", { className: 'listFixedWidth' },
                React.createElement("div", { onClick: this.props.modalOpen }, "EDIT"))));
    }
}
class EditModal extends React.Component {
    constructor(props) {
        super(props);
        this.setDelete = (confirmDelete) => {
            this.setState({
                confirmDelete: confirmDelete
            });
        };
        this.delete = () => {
            this.props.deleteItem();
            this.setDelete(false);
        };
        this.state = {
            data: this.props.data,
            confirmDelete: false
        };
    }
    render() {
        if (this.props.data != undefined)
            return (React.createElement(reactstrap_1.Modal, { isOpen: this.props.isOpen, toggle: this.props.toggle },
                React.createElement(reactstrap_1.ModalHeader, null,
                    "Edit - ",
                    this.props.data.title),
                this.state.confirmDelete ?
                    React.createElement("div", { className: 'manageModalOuter' },
                        React.createElement("div", null, "Delete this item?"),
                        React.createElement("div", { className: 'manageDeleteButtons' },
                            React.createElement("div", { className: 'cancelDeleteButton', onClick: () => this.setDelete(false) }, "Cancel"),
                            React.createElement("div", { className: 'confirmDeleteButton', onClick: () => this.delete() }, "Yes, delete item"))) :
                    React.createElement("div", { className: 'manageModalOuter' },
                        React.createElement("div", { className: 'manageModalButton', onClick: () => this.props.hideItem(!this.props.data.visible) }, this.props.data.visible ? 'Hide' : 'Show'),
                        React.createElement("div", { className: 'manageModalButton', onClick: () => this.setDelete(true) }, "Delete"))));
        else
            return (null);
    }
}
class ManageItems extends React.Component {
    constructor(props) {
        super(props);
        this.toggleModal = () => {
            this.setState({
                modalOpen: !this.state.modalOpen
            });
        };
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
        this.openModal = (i) => {
            this.setState({
                modalOpen: true,
                editingIndex: i
            });
        };
        this.deleteItem = () => {
            var dataSet = this.state.dataSet;
            dataSet.splice(this.state.editingIndex, 1);
            this.setState({
                dataSet: dataSet,
                modalOpen: false
            });
        };
        this.hideItem = (visible) => {
            console.log(visible);
            if (this.state.dataSet != undefined && this.state.editingIndex >= 0) {
                var dataSet = this.state.dataSet;
                dataSet[this.state.editingIndex].visible = visible;
                this.setState({
                    dataSet: dataSet,
                    modalOpen: false
                });
            }
        };
        this.dataSet = new Array(100);
        for (var i = 0; i < this.dataSet.length; i++) {
            this.dataSet[i] = { title: "Title " + (i + 1), published: Math.random() > 0.5 ? true : false, visible: Math.random() > 0.5 ? true : false };
        }
        //console.log("items: ", this.dataSet);
        this.itemsPerPage = Math.floor((window.innerHeight - 350) / 50);
        this.pagesCount = Math.ceil(this.dataSet.length / this.itemsPerPage);
        //console.log("itemsPerPage: ", this.itemsPerPage, " | pagesCount: ", this.pagesCount);
        this.pages = new Array(this.pagesCount);
        for (var i = 0; i < this.pages.length; i++) {
            this.pages[i] = (i + 1);
        }
        this.state = {
            currentPage: 0,
            modalOpen: false,
            editingIndex: -1,
            dataSet: this.dataSet
        };
    }
    render() {
        const { currentPage } = this.state;
        return (React.createElement("div", { className: "ICAcontainer" },
            React.createElement(EditModal, { isOpen: this.state.modalOpen, toggle: () => this.toggleModal(), data: this.state.dataSet[this.state.editingIndex], deleteItem: () => this.deleteItem(), hideItem: (v) => this.hideItem(v) }),
            React.createElement("h1", null, "MANAGE COLLECTIONS"),
            React.createElement(SearchBar, null),
            React.createElement("div", { className: 'listSection' },
                React.createElement(ListHeader, null),
                this.state.dataSet.slice(currentPage * this.itemsPerPage, (currentPage + 1) * this.itemsPerPage).map((data, i) => React.createElement(ListItem, { key: i, published: data.published, visible: data.visible, dateCreated: "01-JAN-1999", title: data.title, modalOpen: () => this.openModal(i) }))),
            React.createElement("div", { className: 'footerMenu' },
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
exports.default = ManageItems;
//# sourceMappingURL=manageCollection.js.map