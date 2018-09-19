import { READ_TOOLKIT, ADD_TOOLKIT, UPDATE_TOOLKIT, SELECT_ITEM } from './actionTypes';

export const selectItem = (item) => {
    return {
        type: SELECT_ITEM,
        item: item
    };
}
