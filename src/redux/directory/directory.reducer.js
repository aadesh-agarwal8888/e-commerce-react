import SECTIONS_DATA from './section.data';

const INITIAL_STATE = {
    section: SECTIONS_DATA
};

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state;
    }
};

export default directoryReducer;