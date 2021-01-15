import { jamService } from '../../services/jamService'

export function loadJams() {
  return async dispatch => {
    try {
      const jams = await jamService.query()
      dispatch({ type: 'SET_JAMS', jams })

    } catch (err) {
      console.log('JamActions: err in loadJams', err)
    }
  }
}



export function updateJamGoing(jam, user, isGoing) {
  return async dispatch => {
    try {
     jamService.updateJamGoing(jam._id, user._id, isGoing);
      if (isGoing) {
        dispatch({ type: 'UPDATE_JAM_IS_GOING', data:  {jam: jam, user: user} });
      } else {
        dispatch({ type: 'UPDATE_JAM_IS_NOT_GOING', data:  {jam: jam, user: user} });
      }
     

    } catch (err) {
      console.log('JamActions: err in loadJams', err)
    }
  }
}