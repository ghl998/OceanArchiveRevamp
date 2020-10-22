declare var require: any

var React = require('react');

import { NavLink } from 'react-router-dom';

import AllIconBlack from '../images/All_Icon_Black.png';
import SciTechIcon from '../images/SciTech_Icon_Black.png';
import ArtIconBlack from '../images/brushBlack.png';
import ActivismIcon from '../images/greenBlack.png';

import * as Constant from '../constants';

class LargeContentBox extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='largeContentBox' style={{ backgroundImage: "url(" + this.props.img + ")", backgroundColor: this.props.bgColour }}>
                <div className='largeContentBoxBar' style={{ background: this.props.bgColour }}>
                    <img className='icon' src={this.props.src}/>
                    <div className='titleAndType'>
                        <h1>{this.props.title}</h1>
                        <h2>{this.props.type}</h2>
                    </div>
                </div>
                <div style={{ height: '240px' }} />
                <div className='largeContentBoxBar' style={{ background: this.props.bgColour }}>
                    <svg
                        className="collections_in_collection_icon"
                        viewBox="-18 0 40 20"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                        <g stroke="none" strokeWidth="1" fill="#000">
                            <g id="Circle1">
                                <circle cx="15.5" cy="15.5" r="3.5" />
                            </g>
                            <g id="Circle2">
                                <circle cx="-8.5" cy="15.5" r="3.5" />
                            </g>
                            <g id="Circle3">
                                <circle cx="3.5" cy="3.5" r="3.5" />
                            </g>
                            <g id="Circle4">
                                <circle cx="3.5" cy="15.5" r="3.5" />
                            </g>
                            <g id="Line1">
                                <rect x="3" y="3.5" width="1" height="12" />
                            </g>
                            <g id="Line2">
                                <rect
                                    x="3"
                                    y="3.5"
                                    width="1"
                                    height="17"
                                    transform="rotate(-45 3 3.5)"
                                />
                            </g>
                            <g id="Line3">
                                <rect
                                    x="3"
                                    y="3.5"
                                    width="1"
                                    height="17"
                                    transform="rotate(45 3 3.5)"
                                />
                            </g>
                        </g>
                    </svg>
                    <div className='itemsAndCollectionsCount'>
                        <h1>{this.props.numCollections} Collections</h1>
                        <h1>{this.props.numItems} Items</h1>
                    </div>
                    <div className='tagsSection'>
                    </div>
                </div>
            </div>
        );
    }
}

export default class NewAndTrending extends React.Component {
    render() {
        return (
            <div className='newAndTrending'>
                <h1 style={{ paddingLeft: '10px', flex: '0', minWidth: '200px' }}>New & Trending</h1>
                <div className='newAndTrendingContainer'>
                    <NavLink to='/itemPage'>
                        <LargeContentBox bgColour={Constant.ACTIVISM} src={ActivismIcon} title='Pacific Ocean Garbage Patch' type='Other' numCollections='2' numItems='1' img='https://live.staticflickr.com/2490/4214811049_1264c95738_b.jpg' />
                    </NavLink>
                    <LargeContentBox bgColour={Constant.SCITECH} src={SciTechIcon} title='The Various Shark Species' type='Research Paper' numCollections='3' numItems='2' img='https://live.staticflickr.com/194/463483080_828f04aba3_b.jpg' />
                    <LargeContentBox bgColour={Constant.ART} src={ArtIconBlack} title='Under The Ocean: Life with Turtles' type='Video' numCollections='1' numItems='4' img='https://live.staticflickr.com/2534/32899940111_6d3f8956d7_b.jpg' />
                </div>
            </div>
        );
    }
}