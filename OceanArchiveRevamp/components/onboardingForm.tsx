declare var require: any

var React = require('react');

import { Bubble } from './bubble';
import { NavLink } from 'react-router-dom';
import { Carousel, CarouselItem } from 'reactstrap';

import * as Constant from '../constants';

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

export default class OnBoardingForm extends React.Component {
    constructor(props) {
        super(props);
        this.bubbleRef = React.createRef();
        this.state = {
            activeIndex: 0,
            pagePositions: [0, 0, 0]
        };
    }

    headers = [
        { main: "START YOUR DIVE BY FINDING RECOMMENDED ITEMS FOR YOU ?", sub: "" },
        { main: "SELECT YOUR PREFERRED FOCUS AREA/S", sub: "" },
        { main: "SELECT TAGS THAT INTEREST YOU", sub: "Selecting none will be the same as selecting all tags" }
    ]

    next = () => {
        var n = this.state.activeIndex >= 2 ? 2 : this.state.activeIndex + 1;
        if (this.state.activeIndex < 2) {
            var pagePositions = this.state.pagePositions;
            for (var i = 0; i < this.state.pagePositions.length; i = i + 1) {
                pagePositions[i] = pagePositions[i] - 100;
            }
        }
        this.setState({
            activeIndex: n,
            pagePositions: pagePositions
        });
    }

    prev = () => {
        var n = this.state.activeIndex <= 0 ? 0 : this.state.activeIndex - 1;
        if (this.state.activeIndex > 0) {
            var pagePositions = this.state.pagePositions;
            for (var i = 0; i < this.state.pagePositions.length; i = i + 1) {
                pagePositions[i] = pagePositions[i] + 100;
            }
        }
        this.setState({
            activeIndex: n,
            pagePositions: pagePositions
        });
    }

    bubbleCallback = (e) => {
        return (console.log(e));
    }

    render() {
        return (
            <div>
                <div className='onboardHeader'>
                    <span className='onboardMain'>{this.headers[this.state.activeIndex].main}</span>
                    <span className='onboardSub'>{this.headers[this.state.activeIndex].sub}</span>
                </div>
                <div className='onboardContainer'>
                    <div className='onboardInner' style={{ transform: 'translateX(' + this.state.pagePositions[0] + 'vw)' }}>
                        <div className='onboardButton right Yes noselect' onClick={this.next}>YES</div>
                        <NavLink to='/' onClick={() => this.props.onBoard(true)}>
                            <div className='onboardButton Skip noselect'>SKIP</div>
                        </NavLink>
                    </div>
                    <div className='onboardInner' style={{ transform: 'translateX(' + this.state.pagePositions[1] + 'vw)' }} onClick={this.next}>
                        <Bubble callback={this.bubbleCallback} ref={this.bubbleRef} />
                    </div>
                    <div className='onboardInner' style={{ alignItems: 'flex-start', transform: 'translateX(' + this.state.pagePositions[2] + 'vw)' }}>
                        <div className='onboardTags'>
                            {
                                Constant.mainTags.map((tag, i) =>
                                    <Tag key={'tag' + i} label={tag.label} />
                                )
                            }
                        </div>
                    </div>
                </div>
                <div className='onBoardFooter'>
                    <div className='fillerBox' />
                    <NavLink to='/' onClick={() => this.props.onBoard(true)}>
                        <div className={this.state.activeIndex == 2 ? 'submitButton noselect' : 'submitButton noselect hidden'}>FINISH</div>
                    </NavLink>
                </div>
            </div>
        );
    }
}