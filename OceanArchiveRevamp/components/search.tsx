declare var require: any

var React = require('react');

import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    FormFeedback,
    FormGroup,
    Label,
    Input,
    ButtonGroup,
    Button
} from 'reactstrap';
import Select from 'react-select';

import * as Constants from '../constants';

class Tag extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: false
        };
    }

    toggleSelect = () => {
        this.setState({
            selected: !this.state.selected
        });
    }

    render() {
        return (
            <div className={this.state.selected ? 'tag large noselect active' : 'tag large noselect'} onClick={this.toggleSelect}>{this.props.label}</div>
        );
    }
}

class AdvancedSearchModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
    }

    toggle = () => this.setState({
        isOpen: !this.state.isOpen
    });

    disableScroll = () => {
        document.body.style.overflow = 'hidden';
    }

    enableScroll = () => {
        document.body.style.overflow = 'auto';
    }

    render() {
        return (
            <div className='advSearchOuter'>
                <div className='advSearchButton' onClick={this.toggle}>ADVANCED SEARCH</div>
                <Modal isOpen={this.state.isOpen} toggle={this.toggle} onOpened={this.disableScroll} onClosed={this.enableScroll}>
                    <Form>
                        <ModalBody className='advSearchBody'>
                            <div className='advSearchCat'>Advanced Search</div>
                            <FormGroup>
                                <Label for='keyword'>Keyword</Label>
                                <Input type='text' />
                            </FormGroup>
                            <div className='advSearchCat'>Filters</div>
                            <FormGroup>
                                <Label for='focus'>Focus Area</Label>
                                <ButtonGroup>
                                    <Button>Science & Tech</Button>
                                    <Button>Art</Button>
                                    <Button>Activism</Button>
                                </ButtonGroup>
                            </FormGroup>
                            <Label for='types'>Item Types</Label>
                            <div className='advSearchWrapContainer'>
                                {Constants.itemTypes.map((type, i) =>
                                    <FormGroup className='advSearchCheckboxOuter' check inline key={'type' + i}>
                                        <Label check>
                                            <Input type='checkbox' className='advSearchCheckbox' /> <span>{type.label}</span>
                                        </Label>
                                    </FormGroup>
                                )}
                            </div>
                            <FormGroup className='advSearchDropdown'>
                                <Label for='lang'>Language</Label>
                                <Select className='react-select-contianer' classNamePrefix='react-select' options={Constants.languages} isMulti isSearchable />
                            </FormGroup>
                            <FormGroup className='advSearchDropdown'>
                                <Label for='oceans'>Ocean/s</Label>
                                <Select className='react-select-contianer' classNamePrefix='react-select' options={Constants.oceans} isMulti isSearchable />
                            </FormGroup>
                            <FormGroup className='advSearchDropdown'>
                                <Label for='countries'>Country/s</Label>
                                <Select className='react-select-contianer' classNamePrefix='react-select' options={Constants.countries} value={Constants.countries.value} isMulti isSeachable />
                            </FormGroup>
                            <FormGroup>
                                <Label>Publication Date</Label>
                                <Label for='dFrom'>From</Label>
                                <Input type='date' name='dFrom' />
                                <Label for='dTo'>To</Label>
                                <Input type='date' name='dTo' />
                            </FormGroup>
                            <Label>Tags</Label>
                            <div className='advSearchWrapContainer'>
                                {Constants.mainTags.map((tag, i) =>
                                    <Tag key={'tag' + i} label={tag.label} />
                                )}
                            </div>
                        </ModalBody>
                        <ModalFooter className='advSearchFooter'>
                            <div className='advSearchModalButton cancel' onClick={this.toggle}>CANCEL</div>
                            <div className='fillerBox' />
                            <div className='advSearchModalButton search'>SEARCH</div>
                        </ModalFooter>
                    </Form>
                </Modal>
            </div>
        );
    }
}

export default class Search extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='searchPage'>
                <AdvancedSearchModal />
                <div className='searchResults'>
                    <div>Item</div>
                </div>
            </div>
        );
    }
}