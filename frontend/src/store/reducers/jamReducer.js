const initialState = {
    jams: [],
    jam: null
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
      default:
        return state
    }
  }