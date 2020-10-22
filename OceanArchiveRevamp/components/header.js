"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require('react');
const react_router_dom_1 = require("react-router-dom");
const reactstrap_1 = require("reactstrap");
const react_responsive_1 = require("react-responsive");
const Google_svg_1 = require("../logos/Google.svg");
const FacebookF_svg_1 = require("../logos/FacebookF.svg");
const TwitterWhite_svg_1 = require("../logos/TwitterWhite.svg");
const logo_Ocean_png_1 = require("../images/logo-Ocean.png");
const logo_Archive_png_1 = require("../images/logo-Archive.png");
const Constant = require("../constants");
class Logo extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement("div", { className: 'logo', style: { backgroundImage: 'url(' + this.props.img + ')' } }));
    }
}
class HeaderButton extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement("div", { className: 'headerButton noselect', onClick: this.props.onClick }, this.props.name));
    }
}
class LoginModal extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement(reactstrap_1.Modal, { isOpen: this.props.isOpen, toggle: this.props.toggle },
            React.createElement(reactstrap_1.ModalHeader, null, "Login"),
            React.createElement(reactstrap_1.ModalBody, null,
                React.createElement("form", null,
                    React.createElement("p", { className: 'inputLabel' }, "EMAIL"),
                    React.createElement("input", { className: 'whiteText', type: 'text', id: 'email', name: 'email' }),
                    React.createElement("div", { style: { height: '20px' } }),
                    React.createElement("p", { className: 'inputLabel' }, "PASSWORD"),
                    React.createElement("input", { className: 'whiteText', type: 'password', id: 'passwrd', name: 'password' }))),
            React.createElement(reactstrap_1.ModalFooter, null,
                React.createElement(reactstrap_1.Button, { className: 'modalButton', onClick: this.props.loginFunc }, "LOGIN"),
                React.createElement("div", { className: 'modalCenteredLink' },
                    React.createElement("a", { href: 'https://www.google.com' }, "Forgot password?")))));
    }
}
class SignUpModal extends React.Component {
    constructor(props) {
        super(props);
        this.disableScroll = () => {
            document.body.style.overflow = 'hidden';
        };
        this.enableScroll = () => {
            document.body.style.overflow = 'auto';
        };
    }
    render() {
        return (React.createElement(reactstrap_1.Modal, { isOpen: this.props.isOpen, toggle: this.props.toggle, onOpened: this.disableScroll, onClosed: this.enableScroll },
            React.createElement(reactstrap_1.ModalHeader, null, "Sign Up"),
            React.createElement(reactstrap_1.ModalBody, null,
                React.createElement("p", null, "With a Social Account"),
                React.createElement("div", { style: { display: 'flex' } },
                    React.createElement(reactstrap_1.Button, { className: 'google socialButton' },
                        React.createElement(Google_svg_1.default, null),
                        React.createElement("span", null, "GOOGLE")),
                    React.createElement("div", { className: 'fillerBox' }),
                    React.createElement(reactstrap_1.Button, { className: 'facebook socialButton' },
                        React.createElement(FacebookF_svg_1.default, null),
                        React.createElement("span", null, "FACEBOOK")),
                    React.createElement("div", { className: 'fillerBox' }),
                    React.createElement(reactstrap_1.Button, { className: 'twitter socialButton' },
                        React.createElement(TwitterWhite_svg_1.default, null),
                        React.createElement("span", null, "TWITTER"))),
                React.createElement("div", { className: 'horizontalLineText' },
                    React.createElement("p", { style: { fontSize: '10pt' } }, "or")),
                React.createElement("form", null,
                    React.createElement("p", { className: 'inputLabel' }, "FIRST NAME"),
                    React.createElement("input", { className: 'whiteText', type: 'text', id: 'fName', name: 'firstName' }),
                    React.createElement("div", { style: { height: '20px' } }),
                    React.createElement("p", { className: 'inputLabel' }, "LAST NAME"),
                    React.createElement("input", { className: 'whiteText', type: 'text', id: 'lName', name: 'lastName' }),
                    React.createElement("div", { style: { height: '20px' } }),
                    React.createElement("p", { className: 'inputLabel' }, "USERNAME"),
                    React.createElement("input", { className: 'whiteText', type: 'text', id: 'uName', name: 'userName' }),
                    React.createElement("div", { style: { height: '20px' } }),
                    React.createElement("p", { className: 'inputLabel' }, "EMAIL"),
                    React.createElement("input", { className: 'whiteText', type: 'text', id: 'email', name: 'email' }),
                    React.createElement("div", { style: { height: '20px' } }),
                    React.createElement("p", { className: 'inputLabel' }, "PASSWORD"),
                    React.createElement("input", { className: 'whiteText', type: 'password', id: 'passwrd', name: 'password' }),
                    React.createElement("div", { style: { height: '20px' } }),
                    React.createElement("div", { style: { display: 'flex' } },
                        React.createElement("input", { className: 'checkBox', type: 'checkbox', id: 'termsAndConditions', name: 'termsAndConditions', value: 'TAC' }),
                        React.createElement("label", { className: 'checkBoxLabel', for: 'termsAndConditions' },
                            "I agree to the ",
                            React.createElement("a", { href: 'https://www.google.com' }, "Terms and Condtitions"))),
                    React.createElement("div", { style: { height: '20px' } }),
                    React.createElement("div", { style: { display: 'flex' } },
                        React.createElement("input", { className: 'checkBox', type: 'checkbox', id: 'mailList', name: 'mailList', value: 'mList' }),
                        React.createElement("label", { className: 'checkBoxLabel', for: 'mailList' }, "Join mailing list")),
                    React.createElement("p", null,
                        "By joining the mailing list you acknowledge that your information will be transferred to Mailchimp for processing. Learn more about Mailchimp's privacy practices ",
                        React.createElement("a", { href: 'https://www.google.com' }, "here"),
                        "."))),
            React.createElement(reactstrap_1.ModalFooter, null,
                React.createElement(reactstrap_1.Button, { className: 'modalButton', onClick: this.props.toggle }, "SIGN UP"),
                React.createElement("div", { className: 'modalCenteredLink' },
                    React.createElement("p", null,
                        "Already have an account? ",
                        React.createElement("a", { href: 'https://www.google.com' }, "Sign In"))))));
    }
}
class Contribute extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = () => this.setState({
            isOpen: !this.state.isOpen
        });
        this.state = {
            isOpen: false
        };
    }
    render() {
        return (React.createElement(reactstrap_1.ButtonDropdown, { className: this.props.isMobile ? 'mobile' : 'headerButton', style: { minWidth: '130px' }, isOpen: this.state.isOpen, toggle: this.toggle, direction: this.props.direction },
            React.createElement(reactstrap_1.DropdownToggle, { className: this.props.isMobile ? 'mobile' : '', caret: true }, "CONTRIBUTE"),
            React.createElement(reactstrap_1.DropdownMenu, { className: this.props.isMobile ? 'mobile sub' : '' },
                React.createElement(react_router_dom_1.NavLink, { to: "/myItems" },
                    React.createElement(reactstrap_1.DropdownItem, null, "ITEM")),
                React.createElement(react_router_dom_1.NavLink, { to: "/myCollections" },
                    React.createElement(reactstrap_1.DropdownItem, null, "COLLECTION")),
                React.createElement(react_router_dom_1.NavLink, { to: "/myAnnouncements" },
                    React.createElement(reactstrap_1.DropdownItem, null, "ANNOUNCEMENT")))));
    }
}
class Admin extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = () => this.setState({
            isOpen: !this.state.isOpen
        });
        this.state = {
            isOpen: false
        };
    }
    render() {
        return (React.createElement(reactstrap_1.ButtonDropdown, { className: this.props.isMobile ? 'mobile' : 'headerButton', isOpen: this.state.isOpen, toggle: this.toggle, direction: this.props.direction },
            React.createElement(reactstrap_1.DropdownToggle, { className: this.props.isMobile ? 'mobile' : '', caret: true }, "ADMIN"),
            React.createElement(reactstrap_1.DropdownMenu, { className: this.props.isMobile ? 'mobile sub' : '' },
                React.createElement(reactstrap_1.DropdownItem, null, "ITEM"),
                React.createElement(reactstrap_1.DropdownItem, null, "COLLECTION"),
                React.createElement(reactstrap_1.DropdownItem, null, "ANNOUNCEMENT"))));
    }
}
class Logout extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement(HeaderButton, { name: 'LOGOUT', onClick: this.props.logoutFunc }));
    }
}
class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.searchValue = (e) => {
            console.log(e.target.value);
            this.setState({
                search: e.target.value
            });
        };
        this.goSearch = () => {
            console.log('search button pressed');
        };
        this.state = {
            search: ''
        };
    }
    render() {
        return (React.createElement("form", { action: '/search', method: "get", style: { display: 'flex' }, onSubmit: this.goSearch },
            React.createElement("input", { type: "search", name: 'search', className: "searchBar", placeholder: "Search...", onChange: (e) => this.searchValue(e) }),
            React.createElement("input", { type: "submit", className: 'searchButton', value: 'Search' })));
    }
}
class Header extends React.Component {
    constructor(props) {
        super(props);
        this.login = () => {
            this.props.logIn(true);
            this.setState({
                isLoginModalOpen: false
            });
        };
        this.logout = () => {
            this.props.logIn(false);
        };
        this.toggleDropdown = () => {
            this.setState({
                isDropdownOpen: !this.state.isDropdownOpen
            });
        };
        this.toggleLoginModal = () => {
            this.setState({
                isLoginModalOpen: !this.state.isLoginModalOpen
            });
        };
        this.toggleSignUpModal = () => {
            this.setState({
                isSignUpModalOpen: !this.state.isSignUpModalOpen
            });
        };
        this.state = {
            isDropdownOpen: false,
            isLoginModalOpen: false,
            isSignUpModalOpen: false
        };
    }
    render() {
        return (React.createElement("div", { className: "header" },
            React.createElement(LoginModal, { isOpen: this.state.isLoginModalOpen, toggle: this.toggleLoginModal, loginFunc: () => this.login() }),
            React.createElement(SignUpModal, { isOpen: this.state.isSignUpModalOpen, toggle: this.toggleSignUpModal }),
            React.createElement(react_responsive_1.default, { minDeviceWidth: 1224 },
                React.createElement(Logo, { img: logo_Ocean_png_1.default }),
                React.createElement("div", { style: { flex: '1' } },
                    React.createElement("div", { style: { display: 'flex', flexDirection: 'column' } },
                        React.createElement("div", { className: 'headerNavBar' },
                            React.createElement("div", { style: { display: 'flex', flexDirection: 'row' } },
                                React.createElement(react_router_dom_1.NavLink, { to: "/" },
                                    React.createElement(HeaderButton, { name: 'HOME' })),
                                React.createElement(react_router_dom_1.NavLink, { to: "/map" },
                                    React.createElement(HeaderButton, { name: 'MAP' })),
                                React.createElement(HeaderButton, { name: 'TERMS' }),
                                React.createElement(HeaderButton, { name: 'PRIVACY' }),
                                React.createElement("div", { className: 'fillerBox' }),
                                this.props.loggedIn ? React.createElement(Admin, { isMobile: false, direction: 'down' }) : null,
                                this.props.loggedIn ? React.createElement(Contribute, { isMobile: false, direction: 'down' }) : null,
                                this.props.loggedIn ? React.createElement(HeaderButton, { name: 'PROFILE' }) : React.createElement(HeaderButton, { name: 'LOGIN', onClick: this.toggleLoginModal }),
                                this.props.loggedIn ? React.createElement(Logout, { logoutFunc: () => this.logout() }) : React.createElement(HeaderButton, { name: 'SIGNUP', onClick: this.toggleSignUpModal }))),
                        React.createElement("div", { style: { flex: '1' } },
                            React.createElement(SearchBar, null)))),
                React.createElement(Logo, { img: logo_Archive_png_1.default })),
            React.createElement(react_responsive_1.default, { maxDeviceWidth: 1223 },
                React.createElement("div", { className: 'headerInner' },
                    React.createElement("div", { className: 'headerNavBar mobile' },
                        React.createElement(react_router_dom_1.NavLink, { to: '/home' },
                            React.createElement("div", { className: 'headerHomeIcon' },
                                React.createElement("svg", { width: "25px", height: "23px", viewBox: "0 0 295 233", version: "1.1", xmlns: "http://www.w3.org/2000/svg" },
                                    React.createElement("g", { id: "Page-1", stroke: "none", strokeWidth: "1", fill: "none", "fill-rule": "evenodd" },
                                        React.createElement("g", { id: "OA_symbol", fill: "#7E7E7E", fillRule: "nonzero" },
                                            React.createElement("path", { d: "M187.7,180.2 L241.4,180.2 L241.4,232.6 L187.7,232.6 L101.6,186.7 L66.6,232.6 L0,232.6 L86.1,120 L187.7,180.2 Z M241.3,180.2 L241.3,127.7 L295,127.7 L295,180.2 L241.3,180.2 Z", id: "Combined-Shape" }),
                                            React.createElement("path", { d: "M283,10.1 L230.1,10.1 C230.8,18.4 229.8,37.6 219,44.7 C210.8,50.1 193.8,47.7 160.6,29.5 C156.1,27 151.6,24.7 147.2,22.6 C103.8,0.6 67.3,-7.5 41.8,9.5 C8.6,31.6 9.5,80.7 10.8,98.2 L63.7,98.2 C63,89.9 63.7,70.8 74.6,63.8 C82.8,58.4 100.8,60.8 133.9,79 C138.4,81.5 142.9,83.8 147.3,85.9 C190.7,107.9 227.1,114.2 252.6,97.2 C285.8,75.1 284.3,27.6 283,10.1", id: "Fill-5" })))))),
                        React.createElement("div", { className: 'fillerBox' }),
                        React.createElement(reactstrap_1.ButtonDropdown, { className: 'headerDropdown mobile', toggle: this.toggleDropdown, isOpen: this.state.isDropdownOpen, direction: 'down' },
                            React.createElement(reactstrap_1.DropdownToggle, { className: 'headerDropdownToggle' },
                                React.createElement("svg", { width: '50', height: '50' },
                                    React.createElement("line", { x1: '5', y1: '12', x2: '40', y2: '12', strokeLinecap: 'round', style: { stroke: Constant.GREY_78, strokeWidth: '3' } }),
                                    React.createElement("line", { x1: '5', y1: '25', x2: '40', y2: '25', strokeLinecap: 'round', style: { stroke: Constant.GREY_78, strokeWidth: '3' } }),
                                    React.createElement("line", { x1: '5', y1: '38', x2: '40', y2: '38', strokeLinecap: 'round', style: { stroke: Constant.GREY_78, strokeWidth: '3' } }))),
                            React.createElement(reactstrap_1.DropdownMenu, { className: 'mobile main', right: true },
                                React.createElement(react_router_dom_1.NavLink, { to: '/home' },
                                    React.createElement(reactstrap_1.DropdownItem, null, "HOME")),
                                React.createElement(reactstrap_1.DropdownItem, null, "ABOUT"),
                                React.createElement(react_router_dom_1.NavLink, { to: '/map' },
                                    React.createElement(reactstrap_1.DropdownItem, null, "MAP")),
                                React.createElement(reactstrap_1.DropdownItem, null, "TERMS"),
                                React.createElement(reactstrap_1.DropdownItem, null, "PRIVACY"),
                                this.props.loggedIn ?
                                    React.createElement(reactstrap_1.DropdownItem, { className: 'mobile', toggle: false },
                                        React.createElement(Admin, { isMobile: true, direction: 'left' }))
                                    : React.createElement(reactstrap_1.DropdownItem, { onClick: this.toggleLoginModal }, "LOGIN"),
                                this.props.loggedIn ?
                                    React.createElement(reactstrap_1.DropdownItem, { className: 'mobile', toggle: false },
                                        React.createElement(Contribute, { isMobile: true, direction: 'left' }))
                                    : React.createElement(reactstrap_1.DropdownItem, { onClick: this.toggleSignUpModal }, "SIGNUP"),
                                this.props.loggedIn ?
                                    React.createElement(reactstrap_1.DropdownItem, null, "PROFILE")
                                    : null,
                                this.props.loggedIn ?
                                    React.createElement(reactstrap_1.DropdownItem, { onClick: () => this.logout() }, "SIGNOUT")
                                    : null))),
                    React.createElement("div", { style: { flex: '1' } },
                        React.createElement(SearchBar, null))))));
    }
}
exports.default = Header;
//# sourceMappingURL=header.js.map