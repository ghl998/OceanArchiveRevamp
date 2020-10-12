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
                                <Label>KeyWord</Label>
                                <Input type='text' />
                            </FormGroup>
                            <div className='advSearchCat'>Filters</div>
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