// import { httpService } from './httpService'
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
            "city": "Tel Aviv",
            "address": "Hayarkon 30",
            "lat": 32.0819020,
            "lng": 34.8056000
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
                "playing": ["Electric-Guitar"]
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
                "playing": ["Drums", "Electric-Guitar", "Singer"]
            }
        ]
    },
    {
        "_id": "e502",
        "title": "Karaoke Arsim",
        "description": "Yalla Happy!! Good time!",
        "imgUrl": "http://some-img",
        "capacity": 200,
        "location": {
            "city": "Bat Yam",
            "address": "Nisenbaum 38",
            "lat": 31.61308,
            "lng": 34.1413
        },
        "createdBy": {
            "_id": "u102",
            "fullname": "Moshik Afia",
            "imgUrl": "http://some-img"
        },
        "startsAt": 56822212134,
        "tags": ["Meditternean", "Happy"],
        "createdAt": 121221453343,
        "msgs": [
            {
                txt: "Yesssss!",
                sentBy: "moshik"
            }
        ],
        "usersGoing": [
            {
                "_id": "u102",
                "fullname": "Moshik Afia",
                "imgUrl": "http://some-img",
                "playing": ["Singer"]
            },
            {
                "_id": "u101",
                "fullname": "Tomer Yosef",
                "imgUrl": "http://some-img",
                "playing": ["Drums", "Electric-Guitar", "Singer"]
            }
        ]
    },
    {
        "_id": "e503",
        "title": "Jazz Blues and Booze",
        "description": "Let's play some of that good ol' blues",
        "imgUrl": "http://some-img",
        "capacity": 9,
        "location": {
            "city": "Haifa",
            "address": "Hakarish 23",
            "lat": 35.61308,
            "lng": 33.1413
        },
        "createdBy": {
            "_id": "u103",
            "fullname": "Rami Fortis",
            "imgUrl": "http://some-img"
        },
        "startsAt": 56872212134,
        "tags": ["Blues", "Jazz"],
        "createdAt": 121221453343,
        "msgs": [
            {
                txt: "Great",
                sentBy: "rami"
            }
        ],
        "usersGoing": [
            {
                "_id": "u103",
                "fullname": "Rami Fortis",
                "imgUrl": "http://some-img",
                "playing": ["Electric-Guitar"]
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
    return jams.find(jam => jam._id === jamId)
    // return storageService.get('jam', jamId)
    //return httpService.get(`jam/${jamId}`)
}


