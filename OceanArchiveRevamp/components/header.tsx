declare var require: any

var React = require('react');

import { NavLink } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import MediaQuery from 'react-responsive';

import GoogleLogo from '../logos/Google.svg';
import FacebookLogo from '../logos/FacebookF.svg';
import TwitterLogo from '../logos/TwitterWhite.svg';
import * as Constant from '../constants';

class Logo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='logo'>{this.props.name}</div>
        );
    }
}

class HeaderButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='headerButton noselect' onClick={this.props.onClick}>
                {this.props.name}
            </div >
        );
    }
}

class LoginModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
    }

    toggle = () => this.setState({
        isOpen: !this.state.isOpen
    });

    render() {
        return (
            <div>
                <HeaderButton name='LOGIN' onClick={this.toggle} />
                <Modal isOpen={this.state.isOpen} toggle={this.toggle}>
                    <ModalHeader>Login</ModalHeader>
                    <ModalBody>
                        <form>
                            <p className='inputLabel'>EMAIL</p>
                            <input className='whiteText' type='text' id='email' name='email' />
                            <div style={{ height: '20px' }} />
                            <p className='inputLabel'>PASSWORD</p>
                            <input className='whiteText' type='password' id='passwrd' name='password' />
                        </form>
                    </ModalBody>
                    <ModalFooter>
                        <Button className='modalButton' onClick={this.props.loginFunc}>LOGIN</Button>
                        <div className='modalCenteredLink'>
                            <a href='https://www.google.com'>Forgot password?</a>
                        </div>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

class SignUpModal extends React.Component {
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
            <div>
                <HeaderButton name='SIGNUP' onClick={this.toggle} />
                <Modal isOpen={this.state.isOpen} toggle={this.toggle} onOpened={this.disableScroll} onClosed={this.enableScroll}>
                    <ModalHeader>Sign Up</ModalHeader>
                    <ModalBody>
                        <p>With a Social Account</p>
                        <div style={{ display: 'flex' }}>
                            <Button className='google socialButton'>
                                <GoogleLogo />
                                <span>GOOGLE</span>
                            </Button>
                            <div className='fillerBox' />
                            <Button className='facebook socialButton'>
                                <FacebookLogo />
                                <span>FACEBOOK</span>
                            </Button>
                            <div className='fillerBox' />
                            <Button className='twitter socialButton'>
                                <TwitterLogo />
                                <span>TWITTER</span>
                            </Button>
                        </div>
                        <div className='horizontalLineText'>
                            <p style={{ fontSize: '10pt' }}>or</p>
                        </div>
                        <form>
                            <p className='inputLabel'>FIRST NAME</p>
                            <input className='whiteText' type='text' id='fName' name='firstName' />
                            <div style={{ height: '20px' }} />
                            <p className='inputLabel'>LAST NAME</p>
                            <input className='whiteText' type='text' id='lName' name='lastName' />
                            <div style={{ height: '20px' }} />
                            <p className='inputLabel'>USERNAME</p>
                            <input className='whiteText' type='text' id='uName' name='userName' />
                            <div style={{ height: '20px' }} />
                            <p className='inputLabel'>EMAIL</p>
                            <input className='whiteText' type='text' id='email' name='email' />
                            <div style={{ height: '20px' }} />
                            <p className='inputLabel'>PASSWORD</p>
                            <input className='whiteText' type='password' id='passwrd' name='password' />
                            <div style={{ height: '20px' }} />
                            <div style={{ display: 'flex' }}>
                                <input className='checkBox' type='checkbox' id='termsAndConditions' name='termsAndConditions' value='TAC' />
                                <label className='checkBoxLabel' for='termsAndConditions'>I agree to the <a href='https://www.google.com'>Terms and Condtitions</a></label>
                            </div>
                            <div style={{ height: '20px' }} />
                            <div style={{ display: 'flex' }}>
                                <input className='checkBox' type='checkbox' id='mailList' name='mailList' value='mList' />
                                <label className='checkBoxLabel' for='mailList'>Join mailing list</label>
                            </div>
                            <p>By joining the mailing list you acknowledge that your information will be transferred to Mailchimp for processing. Learn more about Mailchimp's privacy practices <a href='https://www.google.com'>here</a>.</p>
                        </form>
                    </ModalBody>
                    <ModalFooter>
                        <Button className='modalButton' onClick={this.toggle}>SIGN UP</Button>
                        <div className='modalCenteredLink'>
                            <p>Already have an account? <a href='https://www.google.com'>Sign In</a></p>
                        </div>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

class Contribute extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
    }

    toggle = () => this.setState({
        isOpen: !this.state.isOpen
    });

    render() {
        return (
            <ButtonDropdown className='headerButton' style={{ minWidth: '130px' }} isOpen={this.state.isOpen} toggle={this.toggle} direction={this.props.direction}>
                <DropdownToggle caret>
                    CONTRIBUTE
                </DropdownToggle>
                <DropdownMenu>
                    <NavLink to="/myItems">
                        <DropdownItem>ITEM</DropdownItem>
                    </NavLink>
                    <NavLink to="/myCollections">
                        <DropdownItem>COLLECTION</DropdownItem>
                    </NavLink>
                    <NavLink to="/myAnnouncements">
                        <DropdownItem>ANNOUNCEMENT</DropdownItem>
                    </NavLink>
                </DropdownMenu>
            </ButtonDropdown>
        );
    }
}

class Admin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
    }

    toggle = () => this.setState({
        isOpen: !this.state.isOpen
    });

    render() {
        return (
            <ButtonDropdown className='headerButton' isOpen={this.state.isOpen} toggle={this.toggle} direction={this.props.direction}>
                <DropdownToggle caret>
                    ADMIN
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem>ITEM</DropdownItem>
                    <DropdownItem>COLLECTION</DropdownItem>
                    <DropdownItem>ANNOUNCEMENT</DropdownItem>
                </DropdownMenu>
            </ButtonDropdown>
        );
    }
}

class Logout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <HeaderButton name='LOGOUT' onClick={this.props.logoutFunc} />
        );
    }
}

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ''
        };
    }

    searchValue = (e) => {
        console.log(e.target.value);
        this.setState({
            search: e.target.value
        });
    }

    goSearch = () => {
        console.log('search button pressed');
    }

    render() {
        return (
            <form action='/search' method="get" style={{ display: 'flex' }} onSubmit={this.goSearch}>
                <input type="search" name='search' className="searchBar" placeholder="Search..." onChange={(e) => this.searchValue(e)} />
                <input type="submit" className='searchButton' value='Search' />
            </form>
        );
    }
}

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDropdownOpen: false
        }
    }

    login = () => {
        this.props.logIn(true);
    }

    logout = () => {
        this.props.logIn(false);
    }

    toggleDropdown = () => {
        this.setState({
            isDropdownOpen: !this.state.isDropdownOpen
        });
    }

    render() {
        return (
            <div className="header">
                <MediaQuery minDeviceWidth={1224}>
                    <Logo name='OCEAN' />
                    <div style={{ flex: '1' }}>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <div className='headerNavBar'>
                                <div style={{ display: 'flex', flexDirection: 'row' }}>
                                    <NavLink to="/">
                                        <HeaderButton name='HOME' />
                                    </NavLink>
                                    <NavLink to="/map">
                                        <HeaderButton name='MAP' />
                                    </NavLink>
                                    <HeaderButton name='TERMS' />
                                    <HeaderButton name='PRIVACY' />
                                    <div className='fillerBox' />
                                    {this.props.loggedIn ? <Admin direction='down' /> : null}
                                    {this.props.loggedIn ? <Contribute direction='down' /> : null}
                                    {this.props.loggedIn ? <HeaderButton name='PROFILE' /> : <LoginModal loginFunc={() => this.login()} />}
                                    {this.props.loggedIn ? <Logout logoutFunc={() => this.logout()} /> : <SignUpModal />}
                                </div>
                            </div>
                            <div style={{ flex: '1' }}>
                                <SearchBar />
                            </div>
                        </div>
                    </div>
                    <Logo name='ARCHIVE' />
                </MediaQuery>
                <MediaQuery maxDeviceWidth={1223}>
                    <div className='headerInner'>
                        <div className='headerNavBar mobile'>
                            <NavLink to='/home'>
                                <div className='headerHomeIcon'>
                                    <svg width="25px" height="23px" viewBox="0 0 295 233" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fill-rule="evenodd">
                                            <g id="OA_symbol" fill="#7E7E7E" fillRule="nonzero">
                                                <path d="M187.7,180.2 L241.4,180.2 L241.4,232.6 L187.7,232.6 L101.6,186.7 L66.6,232.6 L0,232.6 L86.1,120 L187.7,180.2 Z M241.3,180.2 L241.3,127.7 L295,127.7 L295,180.2 L241.3,180.2 Z" id="Combined-Shape">
                                                </path>
                                                <path d="M283,10.1 L230.1,10.1 C230.8,18.4 229.8,37.6 219,44.7 C210.8,50.1 193.8,47.7 160.6,29.5 C156.1,27 151.6,24.7 147.2,22.6 C103.8,0.6 67.3,-7.5 41.8,9.5 C8.6,31.6 9.5,80.7 10.8,98.2 L63.7,98.2 C63,89.9 63.7,70.8 74.6,63.8 C82.8,58.4 100.8,60.8 133.9,79 C138.4,81.5 142.9,83.8 147.3,85.9 C190.7,107.9 227.1,114.2 252.6,97.2 C285.8,75.1 284.3,27.6 283,10.1" id="Fill-5">
                                                </path>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                            </NavLink>
                            <div className='fillerBox' />
                            <ButtonDropdown className='headerDropdown mobile' toggle={this.toggleDropdown} isOpen={this.state.isDropdownOpen} direction='down'>
                                <DropdownToggle className='headerDropdownToggle'>
                                    <svg width='50' height='50'>
                                        <line x1='5' y1='12' x2='40' y2='12' strokeLinecap='round' style={{ stroke: Constant.GREY_78, strokeWidth: '3' }} />
                                        <line x1='5' y1='25' x2='40' y2='25' strokeLinecap='round' style={{ stroke: Constant.GREY_78, strokeWidth: '3' }} />
                                        <line x1='5' y1='38' x2='40' y2='38' strokeLinecap='round' style={{ stroke: Constant.GREY_78, strokeWidth: '3' }} />
                                    </svg>
                                </DropdownToggle>
                                <DropdownMenu className='mobile'>
                                    <NavLink to='/home'>
                                        <DropdownItem>HOME</DropdownItem>
                                    </NavLink>
                                    <DropdownItem>ABOUT</DropdownItem>
                                    <NavLink to='/map'>
                                        <DropdownItem>MAP</DropdownItem>
                                    </NavLink>
                                    <DropdownItem>TERMS</DropdownItem>
                                    <DropdownItem>PRIVACY</DropdownItem>
                                    {this.props.loggedIn ?
                                        <DropdownItem><Admin direction='left' /></DropdownItem>
                                        : <DropdownItem><LoginModal loginFunc={() => this.login()} /></DropdownItem>
                                    }
                                    {this.props.loggedIn ?
                                        <DropdownItem><Contribute direction='left' /></DropdownItem>
                                        : <DropdownItem><SignUpModal /></DropdownItem>
                                    }
                                    {this.props.loggedIn ?
                                        <DropdownItem>PROFILE</DropdownItem>
                                        : null
                                    }
                                    {this.props.loggedIn ?
                                        <DropdownItem><Logout logoutFunc={() => this.logout()} /></DropdownItem>
                                        : null
                                    }
                                </DropdownMenu>
                            </ButtonDropdown>
                        </div>
                        <div style={{ flex: '1' }}>
                            <SearchBar />
                        </div>
                    </div>
                </MediaQuery>
            </div >
        );
    }
}