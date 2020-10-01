"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require('react');
const react_router_dom_1 = require("react-router-dom");
const reactstrap_1 = require("reactstrap");
class Logo extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement("div", { className: 'logo' }, this.props.name));
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
        this.toggle = () => this.setState({
            isOpen: !this.state.isOpen
        });
        this.state = {
            isOpen: false
        };
    }
    render() {
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
    }
}
class SignUpModal extends React.Component {
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
        return (React.createElement(reactstrap_1.ButtonDropdown, { className: 'headerButton', style: { minWidth: '130px' }, isOpen: this.state.isOpen, toggle: this.toggle, direction: 'down' },
            React.createElement(reactstrap_1.DropdownToggle, { caret: true }, "CONTRIBUTE"),
            React.createElement(reactstrap_1.DropdownMenu, null,
                React.createElement(react_router_dom_1.NavLink, { to: "/myItems" },
                    React.createElement(reactstrap_1.DropdownItem, null, "ITEM")),
                React.createElement(reactstrap_1.DropdownItem, null, "COLLECTION"),
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
        return (React.createElement(reactstrap_1.ButtonDropdown, { className: 'headerButton', isOpen: this.state.isOpen, toggle: this.toggle, direction: 'down' },
            React.createElement(reactstrap_1.DropdownToggle, { caret: true }, "ADMIN"),
            React.createElement(reactstrap_1.DropdownMenu, null,
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
class SeachBar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement("form", { method: "post", style: { display: 'flex' } },
            React.createElement("input", { type: "search", className: "searchBar", placeholder: "Search..." }),
            React.createElement("input", { type: "submit", className: 'searchButton', value: 'Search' })));
    }
}
class Header extends React.Component {
    constructor(props) {
        super(props);
        this.login = () => this.setState({
            loggedIn: true
        });
        this.logout = () => this.setState({
            loggedIn: false
        });
        this.state = {
            loggedIn: false
        };
    }
    render() {
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
    }
}
exports.default = Header;
//# sourceMappingURL=header.js.map