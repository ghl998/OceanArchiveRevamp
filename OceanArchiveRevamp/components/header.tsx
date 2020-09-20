declare var require: any

var React = require('react');

import { NavLink } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

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
            <div className='headerButton' onClick={this.props.onClick}>
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
                            <Button className='google socialButton'>GOOGLE</Button>
                            <div className='fillerBox' />
                            <Button className='facebook socialButton'>FACEBOOK</Button>
                            <div className='fillerBox' />
                            <Button className='twitter socialButton'>TWITTER</Button>
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
            <ButtonDropdown className='headerButton' style={{ minWidth: '130px' }} isOpen={this.state.isOpen} toggle={this.toggle} direction='down'>
                <DropdownToggle caret>
                    CONTRIBUTE
                </DropdownToggle>
                <DropdownMenu>
                    <NavLink to="/myItems">
                        <DropdownItem>ITEM</DropdownItem>
                    </NavLink>
                    <DropdownItem>COLLECTION</DropdownItem>
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
            <ButtonDropdown className='headerButton' isOpen={this.state.isOpen} toggle={this.toggle} direction='down'>
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

class SeachBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form method="post" style={{ display: 'flex' }}>
                <input type="search" className="searchBar" placeholder="Search..." />
                <input type="submit" className='searchButton' value='Search' />
            </form>
        );
    }
}

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false
        };
    }

    login = () => this.setState({
        loggedIn: true
    });

    logout = () => this.setState({
        loggedIn: false
    });

    render() {
        return (
            <div className="header">
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
                                {this.state.loggedIn ? <Admin /> : <div />}
                                {this.state.loggedIn ? <Contribute /> : <div />}
                                {this.state.loggedIn ? <HeaderButton name='PROFILE' /> : <LoginModal loginFunc={this.login} />}
                                {this.state.loggedIn ? <Logout logoutFunc={this.logout} /> : <SignUpModal />}
                            </div>
                        </div>
                        <div style={{ flex: '1' }}>
                            <SeachBar />
                        </div>
                    </div>
                </div>
                <Logo name='ARCHIVE' />
            </div>
        );
    }
}