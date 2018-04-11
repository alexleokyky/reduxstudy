const initialState = {
    year: 2016,
    photos: []
};

export default function pageState(state = initialState, action) {
    console.log(state);
    switch (action.type) {
        case 'SET_YEAR':
            return { ...state, year: action.payload};
        default:
            return state
    }
}