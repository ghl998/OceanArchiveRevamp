//Run this in console after changing code.
//node_modules\.bin\webpack app.tsx --config webpack-config.js
import "./styles/styles.css";
import "./styles/carousel.css";
import "./styles/dropdown.css";

declare var require: any

var React = require('react');
var ReactDOM = require('react-dom');

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Header from './components/header';
import Home from './components/home';
import Map from './components/map';
import MyItems from './components/myItems';
import MyCollections from './components/myCollections';
import MyAnnouncements from './components/myAnnouncements';
import ItemCollectionPage from './components/itemCollectionPage';
import CreateItem from './components/createItem';
import OnBoardingForm from './components/onboardingForm';
import Search from './components/search';

import * as Constant from './constants';

document.body.style.backgroundColor = Constant.MAIN_COLOUR;
document.body.style.fontFamily = 'Roboto';
document.body.style.color = '#ffffff';
document.body.style.padding = '0px';
document.body.style.margin = '0px';

class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            onBoarded: false
        }
    }

    onBoard = (isOnBoarded) => {
        this.setState({
            onBoarded: isOnBoarded
        });
    }

    render() {
        return (
            <div className="rootPage">
                {this.state.onBoarded ? < Header /> : <div />}
                <Switch>
                    <Route path="/" exact
                        render={() => {
                            return (
                                this.state.onBoarded ?
                                    <Redirect to="/home" /> :
                                    <Redirect to="/onBoard" />
                                )
                        }}
                    />
                    <Route path="/onBoard" render={() => (
                        <OnBoardingForm onBoard={(x) => this.onBoard(x)} />)} />
                    <Route path="/home" component={Home} />
                    <Route path="/map" component={Map} />
                    <Route path="/myItems" component={MyItems} />
                    <Route path="/myCollections" component={MyCollections} />
                    <Route path="/myAnnouncements" component={MyAnnouncements} />
                    <Route path="/itemPage" component={ItemCollectionPage} />
                    <Route path="/createItem" component={CreateItem} />
                    <Route path="/search" component={Search} />
                </Switch>
            </div>
        );
    }
}

ReactDOM.render(<BrowserRouter><Homepage /></BrowserRouter>, document.getElementById('root'));