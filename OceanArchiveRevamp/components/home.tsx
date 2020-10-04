import "../styles/styles.css";
import "../styles/carousel.css";

declare var require: any

var React = require('react');

import NewAndTrending from './newAndTrending';
import ContentSection from './contentSection';
import AnnouncementsContainer from './announcementsContainer';

import * as Constant from '../constants';

document.body.style.backgroundColor = Constant.MAIN_COLOUR;
document.body.style.fontFamily = 'Roboto';
document.body.style.color = '#ffffff';
document.body.style.padding = '0px';
document.body.style.margin = '0px';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabsHeight: '100px',
            tabsCollapsed: false
        };
    }

    handleScroll = () => {
        //console.log(document.getElementById('contentSection').offsetTop + ' || ' + document.getElementById('home').scrollTop);
        if (document.getElementById('contentSection').offsetTop - document.getElementById('home').scrollTop < 0 && !this.state.tabsCollapsed) {
            this.setState({
                tabsHeight: '50px',
                tabsCollapsed: true
            });
        } else if (document.getElementById('contentSection').offsetTop - document.getElementById('home').scrollTop > 50 && this.state.tabsCollapsed) {
            this.setState({
                tabsHeight: '100px',
                tabsCollapsed: false
            });
        }

    }

    render() {
        return (
            <div id='home' className='home' onScroll={this.handleScroll}>
                <NewAndTrending />
                <AnnouncementsContainer />
                <ContentSection tabsHeight={this.state.tabsHeight} />
            </div>
        );
    }
}