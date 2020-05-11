import React from 'react';

import MenuItem from '../menu-item/menu-item.component';
import SECTION_DATA from './section.data';
import './directory.styles.scss'

class Directory extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            section: SECTION_DATA
        }
    }

    render() {
        return (
            <div className="directory-menu">
                {
                    this.state.section.map(({id, ...otherSectionProps}) => (
                        <MenuItem key={id} {...otherSectionProps} />
                    ))
                }
            </div>
        );
    }

};

export default Directory;