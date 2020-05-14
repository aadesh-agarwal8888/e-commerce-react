import React from 'react';

import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss'
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { selectDirectorySection } from '../../redux/directory/directory.selector';

const Directory = ({section}) => {
        return (
            <div className="directory-menu">
                {
                    section.map(({id, ...otherSectionProps}) => (
                        <MenuItem key={id} {...otherSectionProps} />
                    ))
                }
            </div>
        );
    };

const mapStateToProps = createStructuredSelector({
    section: selectDirectorySection
}
);

export default connect(mapStateToProps)(Directory);