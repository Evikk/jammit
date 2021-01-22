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

function query(filterBy={}) {
    var queryStr = '?'
    if(filterBy.title) queryStr += `&title=${filterBy.title}`
    if(filterBy.region) queryStr += `&region=${filterBy.region}`
    
    console.log(queryStr);
    
    return httpService.get(`jam${queryStr}`)
    // return jams;
}
function save(jam) {
    if (jam._id) {
        // UPDATE
        return httpService.put(`jam/${jam._id}`, jam)
        // return axios.put(`${baseUrl}/${jam._id}`, jam)
        // .then(res => res.data)
    } 
    // else {
    //     // CREATE
    //     const newToy = { createdAt: Date.now(), ...jam }
    //     return axios.post(baseUrl, newToy)
    //         .then(res => res.data)
            
    // }
}
// function save(jam) {
//     return httpService.post(`jam`, jam)
// }

function getById(jamId) {
    // return jams.find(jam => jam._id === jamId)
    // return storageService.get('jam', jamId)
    return httpService.get(`jam/${jamId}`)
}


function updateJamGoing(jamId, user, isGoing) {
    //UPDATE THE SERVER USER IS NOT GOING
    // jams.find(jam => jam._id === jamId).usersGoing.push(user);
     return httpService.put(`jam/${jamId}/isGoing`, {user:  {_id: user._id, fullname: user.fullname, imgUrl: user.imgUrl, playing: user.playing} , isGoing: isGoing})
  
}






