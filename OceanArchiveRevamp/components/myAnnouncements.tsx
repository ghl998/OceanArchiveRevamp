declare var require: any

var React = require('react');

import { NavLink } from 'react-router-dom';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Pagination, PaginationItem, PaginationLink } from 'reactstrap';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchBy: 'Title',
            isOpen: false
        }
    }

    toggle = () => this.setState({
        isOpen: !this.state.isOpen
    });

    switchSearch = (setSearchBy) => this.setState({
        searchBy: setSearchBy
    });

    render() {
        return (
            <form className='altSearchContainer'>
                <ButtonDropdown className='searchDropdown' isOpen={this.state.isOpen} toggle={this.toggle} direction='down'>
                    <DropdownToggle className='altDropdown' caret>
                        {this.state.searchBy}
                    </DropdownToggle>
                    <DropdownMenu className='altDropdownMenu'>
                        <DropdownItem onClick={() => this.switchSearch('Title')}>Title</DropdownItem>
                        
                    </DropdownMenu>
                </ButtonDropdown>
                <input type='search' className='altSearchBar' placeholder='Search My Announcements' />
                <input type='submit' className='altSearchButton' value='Search' />
            </form>
        );
    }
}

class ListHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='listItemContainer' style={{ fontWeight: 'bold' }}>
                <div className='listFixedWidth'>Published</div>
                <div className='listFixedWidth'>Created Date</div>
                <div className='listVariableWidth'>Title</div>
                <div className='listFixedWidth'>Options</div>
            </div>
        );
    }
}

class ListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='listItemContainer'>
                <div className='listFixedWidth'>{
                    this.props.published ?
                        <svg width='30' height='30'>
                            <polyline points='5,20 10,25 25,5'
                                strokeLinecap='round'
                                style={{ fill: 'none', stroke: '#05B336', strokeWidth: '5' }} />
                            Yes
                        </svg>
                        : <svg width='30' height='30'>
                            <g fill='none' stroke='#FF3A3A' stroke-width='5'>
                                <line x1='5' y1='5' x2='25' y2='25' strokeLinecap='round' />
                                <line x1='25' y1='5' x2='5' y2='25' strokeLinecap='round' />
                            </g>
                        </svg>
                }</div>
                <div className='listFixedWidth'>{this.props.dateCreated}</div>
                <div className='listVariableWidth'>{this.props.title}</div>
               
                <div className='listFixedWidth'>EDIT</div>
            </div>
        );
    }
}

export default class MyItems extends React.Component {
    constructor(props) {
        super(props);

        this.dataSet = new Array(100);
        for (var i = 0; i < this.dataSet.length; i++) {
            this.dataSet[i] = "Title " + (i + 1);
        }
        //console.log("items: ", this.dataSet);

        this.itemsPerPage = Math.floor((window.innerHeight - 350) / 50);
        this.pagesCount = Math.ceil(100 / this.itemsPerPage);
        //console.log("itemsPerPage: ", this.itemsPerPage, " | pagesCount: ", this.pagesCount);

        this.pages = new Array(this.pagesCount);
        for (var i = 0; i < this.pages.length; i++) {
            this.pages[i] = (i + 1);
        }

        this.state = {
            currentPage: 0
        }
    }

    switchPage = (index) => {
        //console.log("Index: ", index, " | PagesCount: ", this.pagesCount)
        if (index >= 0 && index < this.pagesCount)
            this.setState({
                currentPage: index
            });
    }

    pageGroup = (centerPage) => {
        if (this.pagesCount > 7) {
            var group = [1, -1, centerPage - 1, centerPage, centerPage + 1, -2, this.pagesCount];
            if (centerPage <= 3)
                group = [1, 2, 3, 4, -1, this.pagesCount];
            else if (centerPage >= this.pagesCount - 2)
                group = [1, -1, this.pagesCount - 3, this.pagesCount - 2, this.pagesCount - 1, this.pagesCount];

            //console.log("Group: ", group);
            return (
                group.map((i) =>
                    <PaginationItem active={i === this.state.currentPage + 1} disabled={i < 0} key={i}>
                        <PaginationLink onClick={() => this.switchPage(i - 1)} href='#'>
                            {i < 0 ? '...' : i}
                        </PaginationLink>
                    </PaginationItem>
                )
            );
        }
        else
            return (
                this.pages.map((i) =>
                    <PaginationItem active={i === this.state.currentPage + 1} key={i}>
                        <PaginationLink onClick={() => this.switchPage(i - 1)} href='#'>
                            {i}
                        </PaginationLink>
                    </PaginationItem>
                )
            );
    }

    render() {
        const { currentPage } = this.state;
        return (
            <div className="ICAcontainer">
                <h1>MY ANNOUNCEMENTS</h1>
                <SearchBar />
                <div className='listSection'>
                    <ListHeader />
                    {this.dataSet.slice(
                        currentPage * this.itemsPerPage,
                        (currentPage + 1) * this.itemsPerPage
                    ).map((data, i) =>
                        <ListItem key={i} published={true} dateCreated="01-Jun-2020" title={data}/>
                    )}
                </div>
                <div className='footerMenu'>
                    <NavLink className='buttonSmall' to="/createAnnouncement">
                        + Add New
                    </NavLink>
                    <div className='fillerBox' />
                    <Pagination>
                        <PaginationItem disabled={currentPage <= 0}>
                            <PaginationLink onClick={() => this.switchPage(0)} first href='#' />
                        </PaginationItem>
                        <PaginationItem disabled={currentPage <= 0}>
                            <PaginationLink onClick={() => this.switchPage(currentPage - 1)} previous href='#' />
                        </PaginationItem>
                        {this.pageGroup(currentPage + 1)}
                        <PaginationItem disabled={currentPage >= this.pagesCount - 1}>
                            <PaginationLink onClick={() => this.switchPage(currentPage + 1)} next href='#' />
                        </PaginationItem>
                        <PaginationItem disabled={currentPage >= this.pagesCount - 1}>
                            <PaginationLink onClick={() => this.switchPage(this.pagesCount - 1)} last href='#' />
                        </PaginationItem>
                    </Pagination>
                </div>
            </div >
        );
    }
}