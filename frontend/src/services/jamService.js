// import { httpService } from './httpService'
// import { storageService } from './asyncStorageService'
// import userService from './userService'
// import { utilService } from './utilService'
// import { userService } from './userService'


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
            "lat": 32.085300,
            "lng": 34.781769
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
                "playing": ["ElectricGuitar"]
            },
            {
                "_id": "u103",
                "fullname": "Rami Fortis",
                "imgUrl": "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairTheCaesar&accessoriesType=Round&hairColor=Auburn&facialHairType=Blank&clotheType=GraphicShirt&clotheColor=Pink&graphicType=Skull&eyeType=Wink&eyebrowType=RaisedExcited&mouthType=Grimace&skinColor=Pale",
                "playing": ["Bass", "Singer"]
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
            "lat": 32.016499,
            "lng": 34.750278
        },
        "createdBy": {
            "_id": "u102",
            "fullname": "Moshik Afia",
            "imgUrl": "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairDreads01&accessoriesType=Blank&hairColor=Blonde&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=BlazerSweater&eyeType=EyeRoll&eyebrowType=FlatNatural&mouthType=Smile&skinColor=Light"
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
                "imgUrl": "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairDreads01&accessoriesType=Blank&hairColor=Blonde&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=BlazerSweater&eyeType=EyeRoll&eyebrowType=FlatNatural&mouthType=Smile&skinColor=Light",
                "playing": ["Singer"]
            },
            {
                "_id": "u101",
                "fullname": "Tomer Yosef",
<<<<<<< HEAD
                "imgUrl": "https://avataaars.io/?avatarStyle=Circle&topType=Hat&accessoriesType=Blank&facialHairType=BeardMedium&facialHairColor=BrownDark&clotheType=CollarSweater&clotheColor=Gray02&eyeType=Default&eyebrowType=Default&mouthType=Smile&skinColor=Light",
                "playing": ["Drums", "Electric-Guitar", "Singer"]
=======
                "imgUrl": "http://some-img",
                "playing": ["Drums", "ElectricGuitar", "Singer"]
>>>>>>> ac541906f1d4be4af46b50a252ad5daf3d36de75
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
            "lat": 32.794044,
            "lng": 34.989571
        },
        "createdBy": {
            "_id": "u103",
            "fullname": "Rami Fortis",
            "imgUrl": "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairTheCaesar&accessoriesType=Round&hairColor=Auburn&facialHairType=Blank&clotheType=GraphicShirt&clotheColor=Pink&graphicType=Skull&eyeType=Wink&eyebrowType=RaisedExcited&mouthType=Grimace&skinColor=Pale"
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
                "imgUrl": "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairTheCaesar&accessoriesType=Round&hairColor=Auburn&facialHairType=Blank&clotheType=GraphicShirt&clotheColor=Pink&graphicType=Skull&eyeType=Wink&eyebrowType=RaisedExcited&mouthType=Grimace&skinColor=Pale",
                "playing": ["ElectricGuitar"]
            }
        ]
    }
]

export const jamService = {
    query,
    getById,
    updateJamGoing,
    getOutJam
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


function updateJamGoing(jamId, user) {
    //UPDATE THE SERVER USER IS NOT GOING
    jams.find(jam => jam._id === jamId).usersGoing.push(user);
    // jams.usersGoing.push(jammerToAdd);
     //return httpService.put(`jam/${jamId}`, user)
  
}

function getOutJam(userId) {
    jams.usersGoing = jams.usersGoing.filter(userGoing => userGoing.id !== userId);
}





