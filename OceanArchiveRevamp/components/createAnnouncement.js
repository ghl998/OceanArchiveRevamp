"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require('react');
var ReactDOM = require('react-dom');
const react_router_dom_1 = require("react-router-dom");
const reactstrap_1 = require("reactstrap");
const react_responsive_1 = require("react-responsive");
const Constant = require("../constants");
const react_select_1 = require("react-select");
const google_map_react_1 = require("google-map-react");
let Draggable = require('react-draggable');
class CreateAnnouncement extends React.Component {
    constructor(props) {
        super(props);
        this.validate = () => {
            console.log('Validate Details');
            var pageValid = true;
            var errors = this.state.errors;
            if (this.state.values.title.length <= 0)
                errors.title = true;
            if (errors.title || errors.desc || errors.url)
                pageValid = false;
            return pageValid;
        };
        this.validateTitle = (e) => {
            var error = false;
            if (e.target.value.length <= 0)
                error = true;
            var errors = this.state.errors;
            errors.title = error;
            var values = this.state.values;
            values.title = e.target.value;
            this.setState({ errors: errors, values: values });
        };
        this.state = {
            errors: {
                title: false,
                desc: false,
                url: false
            },
            values: {
                title: '',
                descrption: '',
                url: ''
            }
        };
    }
    render() {
        return ( React.createElement("div", { className: 'createAnnouncementPage' },"Create Announcement",
        React.createElement("div", { className: 'announcementDetails'},
            React.createElement(reactstrap_1.FormGroup, null,
                React.createElement(reactstrap_1.Label, { for: 'title' }, "Title"),
                React.createElement(reactstrap_1.Input, { type: 'text', name: 'title', id: 'title', value: this.state.values.title, required: true, invalid: this.state.errors.title, onChange: (e) => this.validateTitle(e) }),
                React.createElement(reactstrap_1.FormFeedback, { valid: !this.state.errors.title }, "Title Error")),
            React.createElement(reactstrap_1.FormGroup, null,
                React.createElement(reactstrap_1.Label, { for: 'desc' }, "Description"),
                React.createElement(reactstrap_1.Input, { type: 'textarea', name: 'desc', id: 'desc', value: this.state.values.desc, required: true, invalid: this.state.errors.desc }),
                React.createElement(reactstrap_1.FormFeedback, { valid: !this.state.errors.desc }, "Desc Error")),
            React.createElement(reactstrap_1.FormGroup, null,
                React.createElement(reactstrap_1.Label, { for: 'url' }, "URL (optional)"),
                React.createElement(reactstrap_1.Input, { type: 'url', name: 'url', id: 'url', value: this.state.values.url, invalid: this.state.errors.url }),
                React.createElement(reactstrap_1.FormFeedback, { valid: !this.state.errors.url }, "URL Error")),
            React.createElement("div", { className: 'creationFooter' },
            React.createElement("div", { className: 'creationButton', style: { marginRight: '16px' } }, "SAVE DRAFT"),
            React.createElement("div", { className: 'creationButton', style: { marginRight: '16px' } }, "SUBMIT"))));
    }
}
exports.default = CreateAnnouncement;
//# sourceMappingURL=createAnnouncement.js.map