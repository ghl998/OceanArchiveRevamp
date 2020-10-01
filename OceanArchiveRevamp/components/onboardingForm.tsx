declare var require: any

var React = require('react');

import { Bubble } from './bubble';
import { NavLink } from 'react-router-dom';

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
        this.state = {
            activeIndex: 0
        };
    }

    headers = [
        { main: "START YOUR DIVE BY FINDING RECOMMENDED ITEMS FOR YOU ?", sub: "" },
        { main: "SELECT YOUR PREFERRED FOCUS AREA/S", sub: "" },
        { main: "SELECT TAGS THAT INTEREST YOU", sub: "Selecting none will be the same as selecting all tags" }
    ]

    next = () => {
        var n = this.state.activeIndex >= 2 ? 2 : this.state.activeIndex + 1;
        this.setState({
            activeIndex: n
        });
    }

    prev = () => {
        var n = this.state.activeIndex <= 0 ? 0 : this.state.activeIndex - 1;
        this.setState({
            activeIndex: n
        });
    }

    render() {
        return (
            <div>
                <div className='onboardHeader'>
                    <span className='onboardMain'>{this.headers[this.state.activeIndex].main}</span>
                    <span className='onboardSub'>{this.headers[this.state.activeIndex].sub}</span>
                </div>
                <div className='onboardContainer'>
                    <div className={this.state.activeIndex == 0 ? 'onboardInner' : 'onboardInner hidden'}>
                        <div className='onboardButton right Yes noselect' onClick={this.next}>YES</div>
                        <NavLink to='/' onClick={() => this.props.onBoard(true)}>
                            <div className='onboardButton Skip noselect'>SKIP</div>
                        </NavLink>
                    </div>
                    <div className={this.state.activeIndex == 1 ? 'onboardInner' : 'onboardInner hidden'} onClick={this.next}>
                        <Bubble />
                    </div>
                    <div className={this.state.activeIndex == 2 ? 'onboardInner' : 'onboardInner hidden'} style={{ alignItems: 'flex-start'}}>
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