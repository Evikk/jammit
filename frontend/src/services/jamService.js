import { httpService } from './httpService'
// import { storageService } from './asyncStorageService'
import userService from './userService'
// import { utilService } from './utilService'
// import { userService } from './userService'

export const jamService = {
    query,
    getById,
    updateJamGoing,
    save
}

function query() {
    // var queryStr = (!filterBy) ? '' : `?name=${filterBy.name}&sort=${sortBy}`
    return httpService.get(`jam`)
}

function save(jam) {
    return httpService.post(`jam`, jam)
}

function getById(jamId) {
    // return jams.find(jam => jam._id === jamId)
    // return storageService.get('jam', jamId)
    return httpService.get(`jam/${jamId}`)
}


function updateJamGoing(jamId, user) {
    //UPDATE THE SERVER USER IS NOT GOING
    // jams.find(jam => jam._id === jamId).usersGoing.push(user);
     //return httpService.put(`jam/${jamId}`, user)
  
}






