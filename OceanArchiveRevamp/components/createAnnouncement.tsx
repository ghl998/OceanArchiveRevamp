declare var require: any

var React = require('react');
var ReactDOM = require('react-dom');

import * as Constant from '../constants';
import {
    Carousel,
    CarouselItem,
    CarouselIndicators,
    CarouselControl,
    Form,
    FormFeedback,
    FormGroup,
    Label,
    Input,
    ButtonGroup,
    Button
} from 'reactstrap';
import Select from 'react-select';
import GoogleMapReact from 'google-map-react';

let Draggable = require('react-draggable');
class DetailsPage extends React.Component {
    constructor(props) {
        super(props);
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
    validate = () => {
        console.log('Validate Details');
        var pageValid = true;
        var errors = this.state.errors;
        if (this.state.values.title.length <= 0)
            errors.title = true;

        if (errors.title || errors.desc || errors.url)
            pageValid = false;

        return pageValid;
    }
}