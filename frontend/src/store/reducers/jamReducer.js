const initialState = {
    jams: [],
  }
  
  export function jamReducer(state = initialState, action = {}) {
    switch (action.type) {
      case 'SET_JAMS':
        return { ...state, jams: action.jams }
      case 'ADD_REVIEW':
        return { ...state, reviews: [...state.reviews, action.review] }
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