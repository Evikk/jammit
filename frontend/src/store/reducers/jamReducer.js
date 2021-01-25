const initialState = {
    jams: [],
    jam: null,
    tags: ['Rock','Pop','Chill','Israeli','60\'s','70\'s','Blues','Jazz','Acoustic','Oldies','Folk','World','Ethnic','Indie']
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