const ADD_TO_CART = 'cart/ADD_TO_CART';

export const addToCart = (produceId) => {//this is the action creator
    return {
        type: ADD_TO_CART,
        produceId//this is the payload with a key of the item id and a value of the item id that was passedin as a parameter
        
    }
}

export default function cartReducer (state = {}, action) {
    switch(action.type){
        case ADD_TO_CART://new case for this new action
            const { produceId } = action;
            const newState = {//new state obj
                ...state, //state defaults to a blank obj but if it has a value it will be passed in here from the parameter
                [produceId]: {
                    id: produceId, 
                    count: 1
                }
            };
            return newState;
            // action.
        
        default:
            return state;
    }
} //cart reducery function
