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