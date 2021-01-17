const initialState = {
    jams: [],
  }
  
  export function jamReducer(state = initialState, action = {}) {
    switch (action.type) {
      case 'UPDATE_JAM_IS_GOING':
       return { ...state, jams: state.jams.map(
          (jam) => jam._id === action.data.jam._id?
                    {...jam, usersGoing: [...jam.usersGoing, action.data.user] }: jam
        ) }
        case 'UPDATE_JAM_IS_NOT_GOING':
          return { ...state, jams: state.jams.map(
             (jam) => jam._id === action.data.jam._id?
                       {...jam, usersGoing: 
                        jam.usersGoing.filter(userGoing => userGoing._id !== action.data.user._id) }: jam
           ) }  
      case 'SET_JAMS':
        return { ...state, jams: action.jams }
      case 'ADD_JAM':
        return { ...state, jams: [...state.jams, action.jam] }
      case 'REMOVE_REVIEW':
        return { ...state, reviews: state.reviews.filter(review => review._id !== action.reviewId) }
      case 'UPDATE_REVIEW':
        return {
          ...state,
          reviews: state.reviews.map(review =>
            review._id === action.review._id ? action.review : review
          )}
      default:
        return state
    }
  }