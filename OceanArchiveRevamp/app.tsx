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
import MyAnnouncements from './components/myAnnouncements';
import ItemCollectionPage from './components/itemCollectionPage';
import CreateItem from './components/createItem';
import { Bubble } from './components/onboardingForm';

import * as Constant from './constants';

document.body.style.backgroundColor = Constant.MAIN_COLOUR;
document.body.style.fontFamily = 'Roboto';
document.body.style.color = '#ffffff';
document.body.style.padding = '0px';
document.body.style.margin = '0px';

var onBoarded = false;

class Homepage extends React.Component {
    render() {
        return (
            <div className="rootPage">
                {onBoarded ? < Header /> : <div />}
                <Switch>
                    <Route path="/" exact
                        render={() => {
                            return (
                                onBoarded ?
                                    <Redirect to="/home" /> :
                                    <Redirect to="/onBoard" />
                                )
                        }}
                    />
                    <Route path="/onBoard" component={Bubble} />
                    <Route path="/home" component={Home} exact />
                    <Route path="/map" component={Map} />
                    <Route path="/myItems" component={MyItems} />
                    <Route path="/myAnnouncements" component={MyAnnouncements} />
                    <Route path="/itemPage" component={ItemCollectionPage} />
                    <Route path="/createItem" component={CreateItem} />
                </Switch>
            </div>
        );
    }
}

ReactDOM.render(<BrowserRouter><Homepage /></BrowserRouter>, document.getElementById('root'));