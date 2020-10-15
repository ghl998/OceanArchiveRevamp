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
}