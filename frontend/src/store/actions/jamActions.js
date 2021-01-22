import { jamService } from '../../services/jamService'

export function loadJams(filterBy) {
  return async dispatch => {
    try {
      const jams = await jamService.query(filterBy)
      dispatch({ type: 'SET_JAMS', jams })

    } catch (err) {
      console.log('JamActions: err in loadJams', err)
    }
  }
}

export function saveJam(jam, creatingUser) {
  return async dispatch => {
    try {
      jam.createdAt = Date.now()
      jam.createdBy = creatingUser
      jam.usersGoing.push(creatingUser)
      console.log(creatingUser);
      
      jam = await jamService.save(jam)
      dispatch({ type: 'ADD_JAM', jam })
    } catch (err) {
      console.log('JamActions: err in saveJam', err)
    }
  }
}



export function updateJamGoing(jam, user, isGoing) {
  return async dispatch => {
    try {
     jamService.updateJamGoing(jam._id, user, isGoing);
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

export function sendMsg(msg,jam) {
  return async dispatch => {
    try {
      jam.msgs.push(msg)
      console.log(jam.msgs);
      const jamSaved = await jamService.save(jam)
      dispatch({ type: 'SAVE_JAM', jam:jamSaved })

    } catch (err) {
      console.log('JamActions: err in saveMsg', err)
    }
  }
}