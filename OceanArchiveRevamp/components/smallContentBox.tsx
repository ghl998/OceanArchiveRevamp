declare var require: any

var React = require('react');

export default class SmallContentBox extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='smallContentBox' style={{ backgroundImage: "url(" + this.props.img + ")" }}>
                <div className='smallContentBoxBar'>
                    <div className='titleAndType'>
                        <h1>{this.props.title}</h1>
                        <h2>{this.props.type}</h2>
                    </div>
                    <div className='year'>
                        <h2>{this.props.year}</h2>
                    </div>
                </div>
                <div className='fillerBox' />
                <div className='smallContentBoxBar'>
                    <svg
                        className="collections_in_collection_icon"
                        viewBox="-18 0 40 20"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                        <g stroke="none" strokeWidth="1" fill="#fff">
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
                        <h2>{this.props.numCollections} Collections</h2>
                        <h2>{this.props.numItems} Items</h2>
                    </div>
                </div>
            </div>
        );
    }
}
