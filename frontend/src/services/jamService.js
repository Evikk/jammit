import { httpService } from './httpService'
// import { storageService } from './asyncStorageService'
// import userService from './userService'
// import { utilService } from './utilService'


var jams = [
    {
        "_id": "e501",
        "title": "Jam shel Magnivim",
        "description": "Bring your own booze and cool down",
        "imgUrl": "http://some-img",
        "capacity": 12,
        "location": {
            "address": "Hayarkon 30, Tel Aviv",
            "lat": -8.61308,
            "lng": 41.1413
        },
        "createdBy": {
            "_id": "u104",
            "fullname": "Haim Romano",
            "imgUrl": "http://some-img"
        },
        "startsAt": 12122212134,
        "tags": ["60's", "70's", "Blues", "Rock"],
        "createdAt": 121221453343,
        "msgs": [
            {
                txt: "See you all there!",
                sentBy: "haim"
            }
        ],
        "usersGoing": [
            {
                "_id": "u104",
                "fullname": "Haim Romano",
                "imgUrl": "http://some-img",
                "playing": ["Guitar"]
            },
            {
                "_id": "u103",
                "fullname": "Rami Fortis",
                "imgUrl": "http://some-img",
                "playing": ["Bass", "Singer"]
            },
            {
                "_id": "u101",
                "fullname": "Tomer Yosef",
                "imgUrl": "http://some-img",
                "playing": ["Drums", "Guitar", "Singer"]
            }
        ]
    }
]

export const jamService = {
  query, 
  getById 
}

function query() {
//   var queryStr = (!filterBy) ? '' : `?name=${filterBy.name}&sort=anaAref`
//   return httpService.get(`review${queryStr}`)
  // return storageService.query('review')
  return jams
}

function getById(jamId) {
    return jams[0];
    // return storageService.get('jam', jamId)
    //return httpService.get(`jam/${jamId}`)
}