const initialState = {
  sportsData: {}
}

export default function(state = initialState, action) {
  switch (action.type) {
    case 'GET_SPORTS_DATA':
      return {...state, sportsData: action.payload}
    default:
      return state
  }
}