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
    Button,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';
import Select from 'react-select';

import * as Constants from '../constants';

const connectorTypes = [
    'AND',
    'OR',
    'AND NOT',
    'OR NOT'
];

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

class Keyword extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdownIsOpen: false,
            currentConnector: connectorTypes[0]
        };
    }

    toggleDropdown = () => {
        this.setState({
            dropdownIsOpen: !this.state.dropdownIsOpen
        });
    }

    changeCurrentConnector = (newConnector) => {
        this.setState({
            currentConnector: newConnector
        });
        this.props.changeConnector(newConnector);
    }

    render() {
        return (
            <FormGroup className='advSearchSecKeyword'>
                <Dropdown isOpen={this.state.dropdownIsOpen} toggle={this.toggleDropdown} direction='down'>
                    <DropdownToggle caret>
                        {this.state.currentConnector}
                    </DropdownToggle>
                    <DropdownMenu>
                        {connectorTypes.map((conn, i) => {
                            return (
                                <DropdownItem key={'conn' + i} onClick={() => this.changeCurrentConnector(conn)}>{conn}</DropdownItem>
                            )
                        })}
                    </DropdownMenu>
                </Dropdown>
                <Input className='inputBox' type='text' onChange={(e) => this.props.changeValue(e)} />
                <div className='delete' onClick={() => this.props.delete()}>X</div>
            </FormGroup>
        );
    }
}

class AdvancedSearchModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            searchOptions: {
                primaryKeyword: '',
                secondaryKeywords: [],
                focusAreas: {
                    sciTech: false,
                    art: false,
                    activism: false
                },
                itemTypes: [],
                langs: [],
                oceans: [],
                regions: [],
                dates: { to: 'TODAY', from: 'TIME START' },
                tags: []
            }
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

    changeFocusArea = (x) => {
        var newSearchOptions = this.state.searchOptions;
        switch (x) {
            case 0:
                newSearchOptions.focusAreas.sciTech = !newSearchOptions.focusAreas.sciTech;
                break;
            case 1:
                newSearchOptions.focusAreas.art = !newSearchOptions.focusAreas.art;
                break;
            case 2:
                newSearchOptions.focusAreas.activism = !newSearchOptions.focusAreas.activism;
                break;
        }
        this.setState({
            searchOptions: newSearchOptions
        });
    }

    updateKeyword = (e) => {
        var newSearchOptions = this.state.searchOptions;
        newSearchOptions.primaryKeyword = e.target.value;
        this.setState({
            searchOptions: newSearchOptions
        });
    }

    addSecKeyword = () => {
        var newSearchOptions = this.state.searchOptions;
        newSearchOptions.secondaryKeywords.push({ connector: connectorTypes[0], value: '' });
        this.setState({
            searchOptions: newSearchOptions
        });
        //console.log(this.state.searchOptions);
    }

    changeConnector = (conn, i) => {
        var newSearchOptions = this.state.searchOptions;
        newSearchOptions.secondaryKeywords[i].connector = conn;
        this.setState({
            searchOptions: newSearchOptions
        });
    }

    changeValue = (val, i) => {
        var newSearchOptions = this.state.searchOptions;
        newSearchOptions.secondaryKeywords[i].value = val;
        this.setState({
            searchOptions: newSearchOptions
        });
    }

    deleteKeyword = (i) => {
        var newSearchOptions = this.state.searchOptions;
        newSearchOptions.secondaryKeywords.splice(i, 1);
        this.setState({
            searchOptions: newSearchOptions
        });
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
                                <Input type='text' onChange={(e) => this.updateKeyword(e)} />
                            </FormGroup>
                            <FormGroup>
                                <Label for='secondaryKeywords'>Secondary Keywords</Label>
                                <div className='advSearchKeywordsContainer'>
                                    {this.state.searchOptions.secondaryKeywords.map((secKeyword, i) => {
                                        return (
                                            <Keyword key={'secKeyword' + i}
                                                changeConnector={(conn) => this.changeConnector(conn, i)}
                                                changeValue={(val) => this.changeValue(val, i)}
                                                delete={() => this.deleteKeyword(i)} />
                                        )
                                    })}
                                </div>
                                <div className='advSearchModalButton add' onClick={this.addSecKeyword}>ADD SEARCH BOX</div>
                            </FormGroup>
                            <div className='advSearchCat'>Filters</div>
                            <FormGroup>
                                <Label for='focus'>Focus Area</Label>
                                <div className='advSearchFocusGroup'>
                                    <div className={this.state.searchOptions.focusAreas.sciTech ? 'advSearchFocus left active' : 'advSearchFocus left'}
                                        onClick={() => this.changeFocusArea(0)}
                                    >
                                        Science & Tech
                                    </div>
                                    <div className={this.state.searchOptions.focusAreas.art ? 'advSearchFocus active' : 'advSearchFocus'}
                                        onClick={() => this.changeFocusArea(1)}
                                    >
                                        Art
                                    </div>
                                    <div className={this.state.searchOptions.focusAreas.activism ? 'advSearchFocus right active' : 'advSearchFocus right'}
                                        onClick={() => this.changeFocusArea(2)}
                                    >
                                        Activism
                                    </div>
                                </div>
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

class SearchResult extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='searchResultContainer'>
                <img src={this.props.result.imgURL} />
                <div>
                    <span className='title'>{this.props.result.title}</span>
                    <div className='authorsContainer'>
                        {this.props.result.authors.map((author, i) => {
                            return (
                                <span className='authors' key={this.props.result.title + "_author_" + i}>{author}</span>
                            )
                        })}
                    </div>
                    <div className='tagsContainer'>
                        {this.props.result.tags.map((tag, i) => {
                            return (
                                <span className='tag' key={this.props.result.title + '_tag_' + i}>{tag}</span>
                            )
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

const searchResults = [
    { title: 'Fish in the ocean', authors: ['Jack White', 'Alison Morrison'], tags: ['Waste', 'Ocean Health', 'Polution'], imgURL: 'https://live.staticflickr.com/2736/4098744853_0c65ccb710_b.jpg' },
    { title: 'Fish in the ocean', authors: ['Jack White', 'Alison Morrison'], tags: ['Waste', 'Ocean Health', 'Polution'], imgURL: 'https://live.staticflickr.com/2736/4098744853_0c65ccb710_b.jpg' },
    { title: 'Fish in the ocean', authors: ['Jack White', 'Alison Morrison'], tags: ['Waste', 'Ocean Health', 'Polution'], imgURL: 'https://live.staticflickr.com/2736/4098744853_0c65ccb710_b.jpg' },
    { title: 'Fish in the ocean', authors: ['Jack White', 'Alison Morrison'], tags: ['Waste', 'Ocean Health', 'Polution'], imgURL: 'https://live.staticflickr.com/2736/4098744853_0c65ccb710_b.jpg' },
    { title: 'Fish in the ocean', authors: ['Jack White', 'Alison Morrison'], tags: ['Waste', 'Ocean Health', 'Polution'], imgURL: 'https://live.staticflickr.com/2736/4098744853_0c65ccb710_b.jpg' },
    { title: 'Fish in the ocean', authors: ['Jack White', 'Alison Morrison'], tags: ['Waste', 'Ocean Health', 'Polution'], imgURL: 'https://live.staticflickr.com/2736/4098744853_0c65ccb710_b.jpg' },
    { title: 'Fish in the ocean', authors: ['Jack White', 'Alison Morrison'], tags: ['Waste', 'Ocean Health', 'Polution'], imgURL: 'https://live.staticflickr.com/2736/4098744853_0c65ccb710_b.jpg' },
    { title: 'Fish in the ocean', authors: ['Jack White', 'Alison Morrison'], tags: ['Waste', 'Ocean Health', 'Polution'], imgURL: 'https://live.staticflickr.com/2736/4098744853_0c65ccb710_b.jpg' },
    { title: 'Fish in the ocean', authors: ['Jack White', 'Alison Morrison'], tags: ['Waste', 'Ocean Health', 'Polution'], imgURL: 'https://live.staticflickr.com/2736/4098744853_0c65ccb710_b.jpg' },
    { title: 'Fish in the ocean', authors: ['Jack White', 'Alison Morrison'], tags: ['Waste', 'Ocean Health', 'Polution'], imgURL: 'https://live.staticflickr.com/2736/4098744853_0c65ccb710_b.jpg' },
    { title: 'Fish in the ocean', authors: ['Jack White', 'Alison Morrison'], tags: ['Waste', 'Ocean Health', 'Polution'], imgURL: 'https://live.staticflickr.com/2736/4098744853_0c65ccb710_b.jpg' },
    { title: 'Fish in the ocean', authors: ['Jack White', 'Alison Morrison'], tags: ['Waste', 'Ocean Health', 'Polution'], imgURL: 'https://live.staticflickr.com/2736/4098744853_0c65ccb710_b.jpg' },
    { title: 'Fish in the ocean', authors: ['Jack White', 'Alison Morrison'], tags: ['Waste', 'Ocean Health', 'Polution'], imgURL: 'https://live.staticflickr.com/2736/4098744853_0c65ccb710_b.jpg' },
];

export default class Search extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='searchPage'>
                <AdvancedSearchModal />
                <div className='searchResults'>
                    {searchResults.map((result, i) => {
                        return (
                            <SearchResult key={"result" + i} result={result}/>
                        )
                    })}
                </div>
            </div>
        );
    }
}