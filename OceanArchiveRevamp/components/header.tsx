declare var require: any

var React = require('react');

import { NavLink } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import MediaQuery from 'react-responsive';

import GoogleLogo from '../logos/Google.svg';
import FacebookLogo from '../logos/FacebookF.svg';
import TwitterLogo from '../logos/TwitterWhite.svg';

import Ocean from '../images/logo-Ocean.png';
import Archive from '../images/logo-Archive.png';

import * as Constant from '../constants';

class Logo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='logo' style={{ backgroundImage: 'url(' + this.props.img + ')' }} />
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
    }

    render() {
        return (
            <Modal isOpen={this.props.isOpen} toggle={this.props.toggle}>
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
        );
    }
}

class SignUpModal extends React.Component {
    constructor(props) {
        super(props);
    }

    disableScroll = () => {
        document.body.style.overflow = 'hidden';
    }

    enableScroll = () => {
        document.body.style.overflow = 'auto';
    }

    render() {
        return (
            <Modal isOpen={this.props.isOpen} toggle={this.props.toggle} onOpened={this.disableScroll} onClosed={this.enableScroll}>
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
                    <Button className='modalButton' onClick={this.props.toggle}>SIGN UP</Button>
                    <div className='modalCenteredLink'>
                        <p>Already have an account? <a href='https://www.google.com'>Sign In</a></p>
                    </div>
                </ModalFooter>
            </Modal>
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
            <ButtonDropdown className={this.props.isMobile ? 'mobile' : 'headerButton'} style={{ minWidth: '130px' }} isOpen={this.state.isOpen} toggle={this.toggle} direction={this.props.direction}>
                <DropdownToggle className={this.props.isMobile ? 'mobile' : ''} caret>
                    CONTRIBUTE
                </DropdownToggle>
                <DropdownMenu className={this.props.isMobile ? 'mobile sub' : ''}>
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
            <ButtonDropdown className={this.props.isMobile ? 'mobile' : 'headerButton'} isOpen={this.state.isOpen} toggle={this.toggle} direction={this.props.direction}>
                <DropdownToggle className={this.props.isMobile ? 'mobile' : ''} caret>
                    ADMIN
                </DropdownToggle>
                <DropdownMenu className={this.props.isMobile ? 'mobile sub' : ''}>
                    <NavLink to="/manageItems">
                        <DropdownItem>ITEM</DropdownItem>
                    </NavLink>
                    <NavLink to="/manageCollection">
                        <DropdownItem>COLLECTION</DropdownItem>
                    </NavLink>
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
            isDropdownOpen: false,
            isLoginModalOpen: false,
            isSignUpModalOpen: false
        }
    }

    login = () => {
        this.props.logIn(true);
        this.setState({
            isLoginModalOpen: false
        });
    }

    logout = () => {
        this.props.logIn(false);
    }

    toggleDropdown = () => {
        this.setState({
            isDropdownOpen: !this.state.isDropdownOpen
        });
    }

    toggleLoginModal = () => {
        this.setState({
            isLoginModalOpen: !this.state.isLoginModalOpen
        });
    }

    toggleSignUpModal = () => {
        this.setState({
            isSignUpModalOpen: !this.state.isSignUpModalOpen
        });
    }

    render() {
        return (
            <div className="header">
                <LoginModal isOpen={this.state.isLoginModalOpen} toggle={this.toggleLoginModal} loginFunc={() => this.login()} />
                <SignUpModal isOpen={this.state.isSignUpModalOpen} toggle={this.toggleSignUpModal} />
                <MediaQuery minDeviceWidth={1224}>
                    <Logo img={Ocean} />
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
                                    {this.props.loggedIn ? <Admin isMobile={false} direction='down' /> : null}
                                    {this.props.loggedIn ? <Contribute isMobile={false} direction='down' /> : null}
                                    {this.props.loggedIn ? <HeaderButton name='PROFILE' /> : <HeaderButton name='LOGIN' onClick={this.toggleLoginModal} />}
                                    {this.props.loggedIn ? <Logout logoutFunc={() => this.logout()} /> : <HeaderButton name='SIGNUP' onClick={this.toggleSignUpModal} />}
                                </div>
                            </div>
                            <div style={{ flex: '1' }}>
                                <SearchBar />
                            </div>
                        </div>
                    </div>
                    <Logo img={Archive} />
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
                                <DropdownMenu className='mobile main' right={true}>
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
                                        <DropdownItem className='mobile' toggle={false}><Admin isMobile={true} direction='left' /></DropdownItem>
                                        : <DropdownItem onClick={this.toggleLoginModal}>LOGIN</DropdownItem>
                                    }
                                    {this.props.loggedIn ?
                                        <DropdownItem className='mobile' toggle={false}><Contribute isMobile={true} direction='left' /></DropdownItem>
                                        : <DropdownItem onClick={this.toggleSignUpModal}>SIGNUP</DropdownItem>
                                    }
                                    {this.props.loggedIn ?
                                        <DropdownItem>PROFILE</DropdownItem>
                                        : null
                                    }
                                    {this.props.loggedIn ?
                                        <DropdownItem onClick={() => this.logout()}>SIGNOUT</DropdownItem>
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