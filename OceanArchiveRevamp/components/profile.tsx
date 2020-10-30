declare var require: any

var React = require('react');
import * as Constant from '../constants';

class ListHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='listItemContainer' style={{ fontWeight: 'bold' }}>
                <div className='listFixedWidth'>Published</div>
                <div className='listFixedWidth'>Visible</div>
                <div className='listFixedWidth'>Created Date</div>
                <div className='listVariableWidth'>Title</div>
                <div className='listFixedWidth'>Options</div>
            </div>
        );
    }
}