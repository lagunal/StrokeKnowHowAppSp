import { READ_TOOLKIT, ADD_TOOLKIT, UPDATE_TOOLKIT, SELECT_ITEM } from '../actions/actionTypes';

const initialState = {
    //data: [],
    currentItem: null,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_ITEM:
            return {
                ...state,
                currentItem: {
                    medicine: action.item.medication,
                    time: action.item.time,
                    monday: action.item.monday,
                    tuesday: action.item.tuesday,
                    wednesday: action.item.wednesday,
                    thursday: action.item.thursday,
                    friday: action.item.friday,   
                    saturday: action.item.saturday,  
                    sunday: action.item.sunday,                              
                  },
                  //keyId: keyId,
            };



        default: state;

    }
}

export default reducer;
