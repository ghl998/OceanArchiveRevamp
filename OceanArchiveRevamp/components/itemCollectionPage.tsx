declare var require: any

var React = require('react');

import MediaQuery from 'react-responsive';

import * as Constant from '../constants';
import BlogShare from '../logos/Blog.svg';
import FaceBookShare from '../logos/Facebook.svg';
import InstagramShare from '../logos/Instagram.svg';
import TwitterShare from '../logos/Twitter.svg';
import YoutubeShare from '../logos/Youtube.svg';

import SmallContentBox from './smallContentBox';

const firstTrans = 'flex 0.1s linear';
const secTrans = 'flex 0.1s linear 0.1s';

const tags = [
    'waste',
    'infrastructure',
    , 'ocean habitats',
    'marine ecology',
    'sharks',
    'whales',
    'deep ocean',
    'coral',
    'seaweed',
    'marine technology',
    'wave',
    'ocean current',
    'climate change',
    'fish',
    'pollution',
    'waste',
    'infrastructure',
    'ocean habitats',
    'marine ecology',
    'sharks',
    'whales',
    'deep ocean',
    'coral',
    'seaweed',
    'marine technology',
    'wave',
    'ocean current',
    'climate change',
    'fish',
    'pollution',
];

class Tab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bgColour: this.props.bgColour
        }
    }

    changeColour(active) {
        if (active) {
            this.setState({
                bgColour: Constant.SECONDARY_COLOUR
            });
        } else {
            this.setState({
                bgColour: Constant.MAIN_COLOUR
            });
        }
    }

    render() {
        return (
            <div className='tab' style={{ backgroundColor: this.state.bgColour }} onClick={this.props.changeColour}>{this.props.title}</div>
        );
    }
}

class Description extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            flex: '0 1 auto',
            outerTrans: secTrans,
            innerTrans: firstTrans
        }
    }

    expand = () => {
        //console.log('Clicked');
        if (this.state.isOpen) {
            this.setState({
                isOpen: false,
                flex: '0 1 auto',
                outerTrans: secTrans,
                innerTrans: firstTrans
            });
        } else {
            this.setState({
                isOpen: true,
                flex: '1 0 auto',
                outerTrans: firstTrans,
                innerTrans: secTrans
            });
        }
    }

    render() {
        return (
            <div className='descriptionContainer' style={{ transition: this.state.outerTrans, flex: this.state.flex }}>
                <h2>DESCRIPTION</h2>
                <div className='description' style={{ transition: this.state.innerTrans, flex: this.state.flex }}>
                    She tried not to judge him. His ratty clothes and unkempt hair made him look homeless. Was he really the next Einstein as she had been told? On the off chance it was true, she continued to try not to judge him.
Sometimes it's the first moment of the day that catches you off guard. That's what Wendy was thinking. She opened her window to see fire engines screeching down the street. While this wasn't something completely unheard of, it also wasn't normal. It was a sure sign of what was going to happen that day. She could feel it in her bones and it wasn't the way she wanted the day to begin.
Dave found joy in the daily routine of life. He awoke at the same time, ate the same breakfast and drove the same commute. He worked at a job that never seemed to change and he got home at 6 pm sharp every night. It was who he had been for the last ten years and he had no idea that was all about to change.It's always good to bring a slower friend with you on a hike. If you happen to come across bears, the whole group doesn't have to worry. Only the slowest in the group do. That was the lesson they were about to learn that day.
Her mom had warned her. She had been warned time and again, but she had refused to believe her. She had done everything right and she knew she would be rewarded for doing so with the promotion. So when the promotion was given to her main rival, it not only stung, it threw her belief system into disarray. It was her first big lesson in life, but not the last.
The amber droplet hung from the branch, reaching fullness and ready to drop. It waited. While many of the other droplets were satisfied to form as big as they could and release, this droplet had other plans. It wanted to be part of history. It wanted to be remembered long after all the other droplets had dissolved into history. So it waited for the perfect specimen to fly by to trap and capture that it hoped would eventually be discovered hundreds of years in the future.

                </div>
                <div className='expandToggle' onClick={() => this.expand()}>
                    {this.state.isOpen ?
                        <svg width='40px' height='20px'>
                            <polyline points='5,15 20,5 35,15'
                                strokeLinecap='round'
                                style={{ fill: 'none', stroke: Constant.SECONDARY_COLOUR, strokeWidth: '5' }} />
                            Close
                        </svg>
                        : <svg width='40px' height='20px'>
                            <polyline points='5,5 20,15 35,5'
                                strokeLinecap='round'
                                style={{ fill: 'none', stroke: Constant.SECONDARY_COLOUR, strokeWidth: '5' }} />
                            Open
                        </svg>
                    }
                </div>
            </div>
        );
    }
}

class Recommendation extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='recommendation'>
                <img src={this.props.src} alt={this.props.title + " thumbnail"} />
                <div style={{ flex: '1 1 auto' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', height: '100px' }}>
                        <h2 className='listTitle'>{this.props.title}</h2>
                        <p className='listDesc'>{this.props.desc}</p>
                    </div>
                </div>
            </div>
        );
    }
}

class Tag extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='tag'>#{this.props.name}</div>
        );
    }
}

class TagsSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tagsIsOpen: false,
            flex: '0 1 0px',
            outerTrans: secTrans,
            innerTrans: firstTrans
        }
    }

    expand = () => {
        //console.log('Clicked');
        if (this.state.tagsIsOpen) {
            this.setState({
                tagsIsOpen: false,
                flex: '0 1 0px',
                outerTrans: secTrans,
                innerTrans: firstTrans,
            });
        } else {
            this.setState({
                tagsIsOpen: true,
                flex: '1 0 auto',
                outerTrans: firstTrans,
                innerTrans: secTrans,
            });
        }
    }

    render() {
        return (
            <div className='tagsContainer' style={{ transition: this.state.outerTrans, flex: this.state.flex }}>
                <div className='tagsLabel'>TAGS</div>
                <div style={{ display: 'flex', width: '100%' }}>
                    <div className='tags' style={{ transition: this.state.innerTrans, flex: this.state.flex }}>
                        {tags.map((tag, i) => {
                            return (
                                <Tag name={tag} key={'tag' + i} />
                            );
                        })}
                    </div>
                </div>
                <div className='tagsContainerController' onClick={() => this.expand()}>
                    {this.state.tagsIsOpen ?
                        <svg width='40px' height='20px'>
                            <polyline points='5,15 20,5 35,15'
                                strokeLinecap='round'
                                style={{ fill: 'none', stroke: Constant.SECONDARY_COLOUR, strokeWidth: '5' }} />
                            Close
                        </svg>
                        : <svg width='40px' height='20px'>
                            <polyline points='5,5 20,15 35,5'
                                strokeLinecap='round'
                                style={{ fill: 'none', stroke: Constant.SECONDARY_COLOUR, strokeWidth: '5' }} />
                            Open
                        </svg>
                    }
                </div>
            </div>
        );
    }
}

class MobileSectionContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div className='mobileItemOuter'>
                <div className='mobileItemLabel'>
                    <h2>{this.props.label}</h2>
                    <div className='tagsContainerController' onClick={this.toggle}>
                        {this.state.isOpen ?
                            <svg width='40px' height='20px'>
                                <polyline points='5,15 20,5 35,15'
                                    strokeLinecap='round'
                                    style={{ fill: 'none', stroke: Constant.SECONDARY_COLOUR, strokeWidth: '5' }} />
                                Close
                        </svg>
                            : <svg width='40px' height='20px'>
                                <polyline points='5,5 20,15 35,5'
                                    strokeLinecap='round'
                                    style={{ fill: 'none', stroke: Constant.SECONDARY_COLOUR, strokeWidth: '5' }} />
                                Open
                        </svg>
                        }
                    </div>
                </div>
                <div className={this.state.isOpen ? 'mobileItemInner open' : 'mobileItemInner'}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

class Info extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='infoBar'>
                <div className='infoLabel'>{this.props.label}</div>
                <div className='infoText'>{this.props.children}</div>
            </div>
        );
    }
}

class ShareButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='shareButton' alt={this.props.name + ' share button'}>
                {this.props.children}
            </div>
        );
    }
}

export default class ItemCollectionPage extends React.Component {
    constructor(props) {
        super(props);
        this.Tabs = [
            React.createRef(),
            React.createRef()
        ];
        this.state = {
            currentActiveTab: 0
        };
    }

    changeTabs = tabNum => () => {
        if (tabNum != this.state.currentActiveTab) {
            //console.log(tabNum);
            for (var i = 0; i < 2; i++) {
                if (i == tabNum) {
                    this.Tabs[i].current.changeColour(true);
                    this.setState({ currentActiveTab: tabNum });
                } else {
                    this.Tabs[i].current.changeColour(false);
                }
            }
        }
    }

    render() {
        return (
            <div className='itemCollectionPage'>
                <div className='breadcrumbsContainer'>HOME/Octopus Hunting</div>
                <MediaQuery minDeviceWidth={1224}>
                    <div style={{ display: 'flex', flex: '1 0 auto' }}>
                        <div className='itemCollectionContainer'>
                            <div className='title'>Octopus Hunting</div>
                            <div className='thumbnailAndInfoContainer'>
                                <img className='thumbnail' src="https://live.staticflickr.com/3463/3306513983_f8269902ee_b.jpg" />
                                <div style={{ display: 'flex', flexDirection: 'column', flex: '1 1 0px' }}>
                                    <div className='infoContainer'>
                                        <div className='info left'>
                                            <Info label='Uploader:'><a>Nathan Moore</a></Info>
                                            <Info label='Date:'><span>09/06/2020</span></Info>
                                            <Info label='License:'><a>CC BY-NC</a></Info>
                                            <Info label='Copyright Owner:'><span>TBA21 Academy</span></Info>
                                            <div style={{ height: '50px', display: 'flex', alignItems: 'center' }}>
                                                <div className='infoButton'>FOLLOW</div>
                                                <div className='infoButton'>LIKE</div>
                                            </div>
                                            <div style={{ height: '30px' }}>Share</div>
                                            <div style={{ height: '40px', display: 'flex' }}>
                                                <ShareButton><BlogShare /></ShareButton>
                                                <ShareButton><FaceBookShare /></ShareButton>
                                                <ShareButton><InstagramShare /></ShareButton>
                                                <ShareButton><TwitterShare /></ShareButton>
                                                <ShareButton><YoutubeShare /></ShareButton>
                                            </div>
                                        </div>
                                        <div className='info'>
                                            <Info label='Regions:'>
                                                <div className='infoRight' style={{ marginBottom: '16px' }}>
                                                    <span>Atlantic Ocean</span>
                                                    <span>Arctic Ocean</span>
                                                    <span>Indian Ocean</span>
                                                    <span>Pacific Ocean</span>
                                                    <span>Southern Ocean</span>
                                                </div>
                                            </Info>
                                            <Info label='Location:'>
                                                <div className='infoRight'>
                                                    <span>151.090909 N</span>
                                                    <span>234.897867 S</span>
                                                </div>
                                                <div className='infoButton'>
                                                    See On Map
                                            </div>
                                            </Info>
                                        </div>
                                    </div>
                                    <TagsSection />
                                </div>
                            </div>
                            <Description />
                            <div className='itemsAndSubcollContainer'>
                                <div className='itemTabs'>
                                    <Tab ref={this.Tabs[0]} title='ITEMS' bgColour={Constant.SECONDARY_COLOUR} changeColour={this.changeTabs(0)} />
                                    <Tab ref={this.Tabs[1]} title='SUB-COLLECTIONS' bgColour={Constant.MAIN_COLOUR} changeColour={this.changeTabs(1)} />
                                </div>
                                <div className='contentBackground'>
                                    <div className='scrollable contentContainer'>
                                        <SmallContentBox title='Fish in the Ocean' type='Research Paper' year='2019' numCollections='2' numItems='5' img="https://live.staticflickr.com/2736/4098744853_0c65ccb710_b.jpg" />
                                        <SmallContentBox title='Ocean Waves' type='Research Paper' year='2019' numCollections='5' numItems='1' img='https://live.staticflickr.com/7309/9787099472_f24d4766e5_b.jpg' />
                                        <SmallContentBox title='Sharks Electromagnetic Sense' type='Documentry' year='2019' numCollections='2' numItems='5' img='https://live.staticflickr.com/6018/5951373622_3146ed0aab_b.jpg' />
                                        <SmallContentBox title='Coral Research' type='Research Paper' year='2019' numCollections='2' numItems='5' img='https://live.staticflickr.com/1688/26104103086_766619aeb8_b.jpg' />
                                        <SmallContentBox title='Plastic Island' type='Gallery' year='2018' numCollections='1' numItems='10' img='https://live.staticflickr.com/3182/2785503884_8b0b76f781_b.jpg' />
                                        <SmallContentBox title='Sunset Shore' type='Painting' year='2018' numCollections='2' numItems='1' img='https://live.staticflickr.com/65535/49112821866_f88763e374_b.jpg' />
                                        <SmallContentBox title='Deep Ocean Mining' type='Series' year='2018' numCollections='1' numItems='5' img='https://live.staticflickr.com/6178/6207340169_32c7846a32_b.jpg' />
                                        <SmallContentBox title='Oil Pollution' type='Gallery' year='2018' numCollections='1' numItems='10' img='https://farm9.staticflickr.com/8746/17022954452_3c3fefafe0_b.jpg' />
                                        <SmallContentBox title='Deep Ocean Life' type='Research Paper' year='2017' numCollections='2' numItems='3' img='https://live.staticflickr.com/5463/8880188144_f2e22d06c1.jpg' />
                                        <SmallContentBox title='Whale Spotting' type='Gallery' year='2017' numCollections='1' numItems='6' img='https://live.staticflickr.com/32/49470279_74b8873c7c_b.jpg' />
                                        <SmallContentBox title='Octopus Learning Habits' type='Research Paper' year='2017' numCollections='2' numItems='1' img='https://live.staticflickr.com/3463/3306513983_f8269902ee_b.jpg' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='recommendationsContainer'>
                            <div className='title'>RECOMMENTDATIONS</div>
                            <div className='scrollableList recommendationsList'>
                                <Recommendation title='Pacific Ocean Garbage Patch' desc='Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.' src='https://live.staticflickr.com/2490/4214811049_1264c95738_b.jpg' />
                                <Recommendation title='The Various Shark Species' desc='Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.' src='https://live.staticflickr.com/194/463483080_828f04aba3_b.jpg' />
                                <Recommendation title='Under The Ocean: Life with Turtles' desc='Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.' src='https://live.staticflickr.com/2534/32899940111_6d3f8956d7_b.jpg' />
                                <Recommendation title='Fish in the Ocean' desc='Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.' src='https://live.staticflickr.com/2736/4098744853_0c65ccb710_b.jpg' />
                                <Recommendation title='Ocean Waves' desc='Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.' src='https://live.staticflickr.com/7309/9787099472_f24d4766e5_b.jpg' />
                                <Recommendation title='Sharks Electromagnetic Sense' desc='Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.' src='https://live.staticflickr.com/6018/5951373622_3146ed0aab_b.jpg' />
                                <Recommendation title='Coral Research' desc='Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.' src='https://live.staticflickr.com/1688/26104103086_766619aeb8_b.jpg' />
                                <Recommendation title='Plastic Island' desc='Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.' src='https://live.staticflickr.com/3182/2785503884_8b0b76f781_b.jpg' />
                                <Recommendation title='Sunset Shore' desc='Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.' src='https://live.staticflickr.com/65535/49112821866_f88763e374_b.jpg' />
                                <Recommendation title='Deep Ocean Mining' desc='Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.' src='https://live.staticflickr.com/6178/6207340169_32c7846a32_b.jpg' />
                                <Recommendation title='Oil Pollution' desc='Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.' src='https://farm9.staticflickr.com/8746/17022954452_3c3fefafe0_b.jpg' />
                                <Recommendation title='Deep Ocean Life' desc='Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.' src='https://live.staticflickr.com/5463/8880188144_f2e22d06c1.jpg' />
                                <Recommendation title='Whale Spotting' desc='Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.' src='https://live.staticflickr.com/32/49470279_74b8873c7c_b.jpg' />
                                <Recommendation title='Octopus Learning Habits' desc='Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.' src='https://live.staticflickr.com/3463/3306513983_f8269902ee_b.jpg' />
                            </div>
                        </div>
                    </div>
                </MediaQuery>
                <MediaQuery maxDeviceWidth={1223}>
                    <div className='itemCollectionContainer'>
                        <div className='title'>Octopus Hunting</div>
                        <img className='thumbnail mobile' src="https://live.staticflickr.com/3463/3306513983_f8269902ee_b.jpg" />
                        <div style={{ height: '40px', display: 'flex', alignItems: 'center', margin: '16px' }}>
                            <div style={{ width: '100px' }}>Share</div>
                            <ShareButton><BlogShare /></ShareButton>
                            <ShareButton><FaceBookShare /></ShareButton>
                            <ShareButton><InstagramShare /></ShareButton>
                            <ShareButton><TwitterShare /></ShareButton>
                            <ShareButton><YoutubeShare /></ShareButton>
                            <div className='copyLinkButton'>Copy Link</div>
                        </div>
                        <div className='mobileItemContainer'>
                            <MobileSectionContainer label='Info'>
                                <div className='infoContainer mobile'>
                                    <div className='info'>
                                        <Info label='Uploader:'><a>Nathan Moore</a></Info>
                                        <Info label='Date:'><span>09/06/2020</span></Info>
                                        <Info label='License:'><a>CC BY-NC</a></Info>
                                        <Info label='Copyright Owner:'><span>TBA21 Academy</span></Info>
                                        <div style={{ height: '50px', display: 'flex', alignItems: 'center' }}>
                                            <div className='infoButton'>FOLLOW</div>
                                            <div className='infoButton'>LIKE</div>
                                        </div>

                                    </div>
                                    <div className='info'>
                                        <Info label='Regions:'>
                                            <div className='infoRight' style={{ marginBottom: '16px' }}>
                                                <span>Atlantic Ocean</span>
                                                <span>Arctic Ocean</span>
                                                <span>Indian Ocean</span>
                                                <span>Pacific Ocean</span>
                                                <span>Southern Ocean</span>
                                            </div>
                                        </Info>
                                        <Info label='Location:'>
                                            <div className='infoRight'>
                                                <span>151.090909 N</span>
                                                <span>234.897867 S</span>
                                            </div>
                                            <div className='infoButton'>
                                                See On Map
                                            </div>
                                        </Info>
                                    </div>
                                </div>
                            </MobileSectionContainer>
                            <MobileSectionContainer label='Description'>
                                <p className='mobile description'>
                                    She tried not to judge him. His ratty clothes and unkempt hair made him look homeless. Was he really the next Einstein as she had been told? On the off chance it was true, she continued to try not to judge him.
    Sometimes it's the first moment of the day that catches you off guard. That's what Wendy was thinking. She opened her window to see fire engines screeching down the street. While this wasn't something completely unheard of, it also wasn't normal. It was a sure sign of what was going to happen that day. She could feel it in her bones and it wasn't the way she wanted the day to begin.
    Dave found joy in the daily routine of life. He awoke at the same time, ate the same breakfast and drove the same commute. He worked at a job that never seemed to change and he got home at 6 pm sharp every night. It was who he had been for the last ten years and he had no idea that was all about to change.It's always good to bring a slower friend with you on a hike. If you happen to come across bears, the whole group doesn't have to worry. Only the slowest in the group do. That was the lesson they were about to learn that day.
    Her mom had warned her. She had been warned time and again, but she had refused to believe her. She had done everything right and she knew she would be rewarded for doing so with the promotion. So when the promotion was given to her main rival, it not only stung, it threw her belief system into disarray. It was her first big lesson in life, but not the last.
    The amber droplet hung from the branch, reaching fullness and ready to drop. It waited. While many of the other droplets were satisfied to form as big as they could and release, this droplet had other plans. It wanted to be part of history. It wanted to be remembered long after all the other droplets had dissolved into history. So it waited for the perfect specimen to fly by to trap and capture that it hoped would eventually be discovered hundreds of years in the future.
                            </p>
                            </MobileSectionContainer>
                            <MobileSectionContainer label='Tags'>
                                <div className='itemCollectionTags' style={{ display: 'flex' }}>
                                    {tags.map((tag, i) => {
                                        return (
                                            <Tag name={tag} key={'mobileTag' + i} />
                                        )
                                    })}
                                </div>
                            </MobileSectionContainer>
                            <MobileSectionContainer label='Items'>
                                <div className='scrollable contentContainer mobile'>
                                    <SmallContentBox title='Fish in the Ocean' type='Research Paper' year='2019' numCollections='2' numItems='5' img="https://live.staticflickr.com/2736/4098744853_0c65ccb710_b.jpg" />
                                    <SmallContentBox title='Ocean Waves' type='Research Paper' year='2019' numCollections='5' numItems='1' img='https://live.staticflickr.com/7309/9787099472_f24d4766e5_b.jpg' />
                                    <SmallContentBox title='Sharks Electromagnetic Sense' type='Documentry' year='2019' numCollections='2' numItems='5' img='https://live.staticflickr.com/6018/5951373622_3146ed0aab_b.jpg' />
                                    <SmallContentBox title='Coral Research' type='Research Paper' year='2019' numCollections='2' numItems='5' img='https://live.staticflickr.com/1688/26104103086_766619aeb8_b.jpg' />
                                    <SmallContentBox title='Plastic Island' type='Gallery' year='2018' numCollections='1' numItems='10' img='https://live.staticflickr.com/3182/2785503884_8b0b76f781_b.jpg' />
                                </div>
                            </MobileSectionContainer>
                            <MobileSectionContainer label='Collections'>
                                <div className='scrollable contentContainer mobile'>
                                    <SmallContentBox title='Sunset Shore' type='Painting' year='2018' numCollections='2' numItems='1' img='https://live.staticflickr.com/65535/49112821866_f88763e374_b.jpg' />
                                    <SmallContentBox title='Deep Ocean Mining' type='Series' year='2018' numCollections='1' numItems='5' img='https://live.staticflickr.com/6178/6207340169_32c7846a32_b.jpg' />
                                    <SmallContentBox title='Oil Pollution' type='Gallery' year='2018' numCollections='1' numItems='10' img='https://farm9.staticflickr.com/8746/17022954452_3c3fefafe0_b.jpg' />
                                    <SmallContentBox title='Deep Ocean Life' type='Research Paper' year='2017' numCollections='2' numItems='3' img='https://live.staticflickr.com/5463/8880188144_f2e22d06c1.jpg' />
                                    <SmallContentBox title='Whale Spotting' type='Gallery' year='2017' numCollections='1' numItems='6' img='https://live.staticflickr.com/32/49470279_74b8873c7c_b.jpg' />
                                    <SmallContentBox title='Octopus Learning Habits' type='Research Paper' year='2017' numCollections='2' numItems='1' img='https://live.staticflickr.com/3463/3306513983_f8269902ee_b.jpg' />
                                </div>
                            </MobileSectionContainer>
                        </div>
                    </div>
                </MediaQuery>
            </div>
        );
    }
}