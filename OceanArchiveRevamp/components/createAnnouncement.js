"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require('react');
var ReactDOM = require('react-dom');
const Constant = require("../constants");
const reactstrap_1 = require("reactstrap");
const react_select_1 = require("react-select");
const google_map_react_1 = require("google-map-react");
let Draggable = require('react-draggable');
class DetailsPage extends React.Component {
    constructor(props) {
        super(props);
        this.validate = () => {
            console.log('Validate Details');
            var pageValid = true;
            var errors = this.state.errors;
            if (this.state.values.title.length <= 0)
                errors.title = true;
            if (errors.title || errors.descrption || errors.url )
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
                descrption: false,
                url: false
               
            },
            values: {
                title: '',
                descrption: '',
                url: ''
              
            }
        };
    }
}