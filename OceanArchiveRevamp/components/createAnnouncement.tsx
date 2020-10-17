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

export default class CreateAnnouncement extends React.Component {
    constructor(props) {
        super(props);
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
    validateTitle = (e) => {
        var error = false;
        if (e.target.value.length <= 0)
            error = true;

        var errors = this.state.errors;
        errors.title = error;
        var values = this.state.values;
        values.title = e.target.value;
        this.setState({ errors: errors, values: values });
    }
    render() {
        return (
            <div className='createAnnouncementPage'>
                <FormGroup>
                    <Label for='title'>Title</Label>
                    <Input type='text' name='title' id='title' value={this.state.values.title} required invalid={this.state.errors.title} onChange={(e) => this.validateTitle(e)} />
                    <FormFeedback valid={!this.state.errors.title} >Title Error</FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Label for='desc'>Description</Label>
                    <Input type='textarea' name='desc' id='desc' value={this.state.values.desc} required invalid={this.state.errors.desc} />
                    <FormFeedback valid={!this.state.errors.desc} >Desc Error</FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Label for='url'>URL (optional)</Label>
                    <Input type='url' name='url' id='url' value={this.state.values.url} invalid={this.state.errors.url} />
                    <FormFeedback valid={!this.state.errors.url} >URL Error</FormFeedback>
                </FormGroup>
                <div className='creationButton' style={{ marginRight: '16px' }}>
                        SAVE DRAFT
                            </div>
                    <div className='creationButton callToAction' onClick={this.next}>
                        NEXT
                            </div>
                
                </div>
        );
    }
}
