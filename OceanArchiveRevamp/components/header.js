"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
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
var Logo = /** @class */ (function (_super) {
    __extends(Logo, _super);
    function Logo(props) {
        return _super.call(this, props) || this;
    }
    Logo.prototype.render = function () {
        return (React.createElement("div", { className: 'logo' }, this.props.name));
    };
    return Logo;
}(React.Component));
var HeaderButton = /** @class */ (function (_super) {
    __extends(HeaderButton, _super);
    function HeaderButton(props) {
        return _super.call(this, props) || this;
    }
    HeaderButton.prototype.render = function () {
        return (React.createElement("div", { className: 'headerButton', onClick: this.props.onClick }, this.props.name));
    };
    return HeaderButton;
}(React.Component));
var LoginModal = /** @class */ (function (_super) {
    __extends(LoginModal, _super);
    function LoginModal(props) {
        var _this = _super.call(this, props) || this;
        _this.toggle = function () { return _this.setState({
            isOpen: !_this.state.isOpen
        }); };
        _this.state = {
            isOpen: false
        };
        return _this;
    }
    LoginModal.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(HeaderButton, { name: 'LOGIN', onClick: this.toggle }),
            React.createElement(reactstrap_1.Modal, { isOpen: this.state.isOpen, toggle: this.toggle },
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
                        React.createElement("a", { href: 'https://www.google.com' }, "Forgot password?"))))));
    };
    return LoginModal;
}(React.Component));
var SignUpModal = /** @class */ (function (_super) {
    __extends(SignUpModal, _super);
    function SignUpModal(props) {
        var _this = _super.call(this, props) || this;
        _this.toggle = function () { return _this.setState({
            isOpen: !_this.state.isOpen
        }); };
        _this.disableScroll = function () {
            document.body.style.overflow = 'hidden';
        };
        _this.enableScroll = function () {
            document.body.style.overflow = 'auto';
        };
        _this.state = {
            isOpen: false
        };
        return _this;
    }
    SignUpModal.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(HeaderButton, { name: 'SIGNUP', onClick: this.toggle }),
            React.createElement(reactstrap_1.Modal, { isOpen: this.state.isOpen, toggle: this.toggle, onOpened: this.disableScroll, onClosed: this.enableScroll },
                React.createElement(reactstrap_1.ModalHeader, null, "Sign Up"),
                React.createElement(reactstrap_1.ModalBody, null,
                    React.createElement("p", null, "With a Social Account"),
                    React.createElement("div", { style: { display: 'flex' } },
                        React.createElement(reactstrap_1.Button, { className: 'google socialButton' }, "GOOGLE"),
                        React.createElement("div", { className: 'fillerBox' }),
                        React.createElement(reactstrap_1.Button, { className: 'facebook socialButton' }, "FACEBOOK"),
                        React.createElement("div", { className: 'fillerBox' }),
                        React.createElement(reactstrap_1.Button, { className: 'twitter socialButton' }, "TWITTER")),
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
                    React.createElement(reactstrap_1.Button, { className: 'modalButton', onClick: this.toggle }, "SIGN UP"),
                    React.createElement("div", { className: 'modalCenteredLink' },
                        React.createElement("p", null,
                            "Already have an account? ",
                            React.createElement("a", { href: 'https://www.google.com' }, "Sign In")))))));
    };
    return SignUpModal;
}(React.Component));
var Contribute = /** @class */ (function (_super) {
    __extends(Contribute, _super);
    function Contribute(props) {
        var _this = _super.call(this, props) || this;
        _this.toggle = function () { return _this.setState({
            isOpen: !_this.state.isOpen
        }); };
        _this.state = {
            isOpen: false
        };
        return _this;
    }
    Contribute.prototype.render = function () {
        return (React.createElement(reactstrap_1.ButtonDropdown, { className: 'headerButton', style: { minWidth: '130px' }, isOpen: this.state.isOpen, toggle: this.toggle, direction: 'down' },
            React.createElement(reactstrap_1.DropdownToggle, { caret: true }, "CONTRIBUTE"),
            React.createElement(reactstrap_1.DropdownMenu, null,
                React.createElement(react_router_dom_1.NavLink, { to: "/myItems" },
                    React.createElement(reactstrap_1.DropdownItem, null, "ITEM")),
                React.createElement(reactstrap_1.DropdownItem, null, "COLLECTION"),
                React.createElement(react_router_dom_1.NavLink, { to: "/myAnnouncements" },
                React.createElement(reactstrap_1.DropdownItem, null, "ANNOUNCEMENT")))));
    };
    return Contribute;
}(React.Component));
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin(props) {
        var _this = _super.call(this, props) || this;
        _this.toggle = function () { return _this.setState({
            isOpen: !_this.state.isOpen
        }); };
        _this.state = {
            isOpen: false
        };
        return _this;
    }
    Admin.prototype.render = function () {
        return (React.createElement(reactstrap_1.ButtonDropdown, { className: 'headerButton', isOpen: this.state.isOpen, toggle: this.toggle, direction: 'down' },
            React.createElement(reactstrap_1.DropdownToggle, { caret: true }, "ADMIN"),
            React.createElement(reactstrap_1.DropdownMenu, null,
                React.createElement(reactstrap_1.DropdownItem, null, "ITEM"),
                React.createElement(reactstrap_1.DropdownItem, null, "COLLECTION"),
                React.createElement(reactstrap_1.DropdownItem, null, "ANNOUNCEMENT"))));
    };
    return Admin;
}(React.Component));
var Logout = /** @class */ (function (_super) {
    __extends(Logout, _super);
    function Logout(props) {
        return _super.call(this, props) || this;
    }
    Logout.prototype.render = function () {
        return (React.createElement(HeaderButton, { name: 'LOGOUT', onClick: this.props.logoutFunc }));
    };
    return Logout;
}(React.Component));
var SeachBar = /** @class */ (function (_super) {
    __extends(SeachBar, _super);
    function SeachBar(props) {
        return _super.call(this, props) || this;
    }
    SeachBar.prototype.render = function () {
        return (React.createElement("form", { method: "post", style: { display: 'flex' } },
            React.createElement("input", { type: "search", className: "searchBar", placeholder: "Search..." }),
            React.createElement("input", { type: "submit", className: 'searchButton', value: 'Search' })));
    };
    return SeachBar;
}(React.Component));
var Header = /** @class */ (function (_super) {
    __extends(Header, _super);
    function Header(props) {
        var _this = _super.call(this, props) || this;
        _this.login = function () { return _this.setState({
            loggedIn: true
        }); };
        _this.logout = function () { return _this.setState({
            loggedIn: false
        }); };
        _this.state = {
            loggedIn: false
        };
        return _this;
    }
    Header.prototype.render = function () {
        return (React.createElement("div", { className: "header" },
            React.createElement(Logo, { name: 'OCEAN' }),
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
                            this.state.loggedIn ? React.createElement(Admin, null) : React.createElement("div", null),
                            this.state.loggedIn ? React.createElement(Contribute, null) : React.createElement("div", null),
                            this.state.loggedIn ? React.createElement(HeaderButton, { name: 'PROFILE' }) : React.createElement(LoginModal, { loginFunc: this.login }),
                            this.state.loggedIn ? React.createElement(Logout, { logoutFunc: this.logout }) : React.createElement(SignUpModal, null))),
                    React.createElement("div", { style: { flex: '1' } },
                        React.createElement(SeachBar, null)))),
            React.createElement(Logo, { name: 'ARCHIVE' })));
    };
    return Header;
}(React.Component));
exports.default = Header;
//# sourceMappingURL=header.js.map