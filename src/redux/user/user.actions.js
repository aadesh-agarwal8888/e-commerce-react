import {UserAcionTypes} from './user.types';

export const setCurrentUser = user => ({
    type: UserAcionTypes.SET_CURRENT_USER,
    payload: user
})