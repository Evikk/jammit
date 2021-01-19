import { httpService } from './httpService'
// import { storageService } from './asyncStorageService'
import userService from './userService'
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
            "region": "Center",
            "city": "Tel Aviv",
            "address": "Hayarkon 30",
            "lat": 32.085300,
            "lng": 34.781769
        },
        "createdBy": {
            "_id": "u104",
            "fullname": "Haim Romano",
            "imgUrl": "https://avataaars.io/?avatarStyle=Circle&topType=WinterHat1&accessoriesType=Blank&hatColor=PastelYellow&facialHairType=MoustacheMagnum&facialHairColor=Blonde&clotheType=Hoodie&clotheColor=Black&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Tanned"
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
                "imgUrl": "https://avataaars.io/?avatarStyle=Circle&topType=WinterHat1&accessoriesType=Blank&hatColor=PastelYellow&facialHairType=MoustacheMagnum&facialHairColor=Blonde&clotheType=Hoodie&clotheColor=Black&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Tanned",
                "playing": ["Electric-Guitar"]
            },
            {
                "_id": "u103",
                "fullname": "Rami Fortis",
                "imgUrl": "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairTheCaesar&accessoriesType=Round&hairColor=Auburn&facialHairType=Blank&clotheType=GraphicShirt&clotheColor=Pink&graphicType=Skull&eyeType=Wink&eyebrowType=RaisedExcited&mouthType=Grimace&skinColor=Pale",
                "playing": ["Bass ", ", Singer"]
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
            "region": "Center",
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
                "playing": ["Singer", ", Electric-Guitar"]
            },
            {
                "_id": "u101",
                "fullname": "Tomer Yosef",
                "imgUrl": "https://avataaars.io/?avatarStyle=Circle&topType=Hat&accessoriesType=Blank&facialHairType=BeardMedium&facialHairColor=BrownDark&clotheType=CollarSweater&clotheColor=Gray02&eyeType=Default&eyebrowType=Default&mouthType=Smile&skinColor=Light",
                "playing": ["Drums ", ", Singer"]
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
            "region": "North",
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
                "playing": ["Electric-Guitar"]
            }
        ]
    },
    {
        "_id": "e504",
        "title": "The Great Gig in the Sky",
        "description": "Lucy in the sky with diamonds",
        "imgUrl": "http://some-img",
        "capacity": 15,
        "location": {
            "region": "South",
            "city": "Mitzpe Ramon",
            "address": "Habanai 24a",
            "lat": 30.612890,
            "lng": 34.803082
        },
        "createdBy": {
            "_id": "u108",
            "fullname": "Idan Raichel",
            "imgUrl": "https://avataaars.io/?avatarStyle=Circle&topType=Turban&accessoriesType=Wayfarers&hatColor=Black&facialHairType=BeardLight&facialHairColor=Platinum&clotheType=ShirtCrewNeck&clotheColor=PastelYellow&eyeType=Side&eyebrowType=Default&mouthType=Tongue&skinColor=Black"
        },
        "startsAt": Date.now()-90000,
        "tags": ["World", "Ethnic"],
        "createdAt": 121221453343,
        "msgs": [
            {
                txt: "Welcome!",
                sentBy: "shimon"
            }
        ],
        "usersGoing": [
            {
                "_id": "u108",
                "fullname": "Idan Raichel",
                "imgUrl": "https://avataaars.io/?avatarStyle=Circle&topType=Turban&accessoriesType=Wayfarers&hatColor=Black&facialHairType=BeardLight&facialHairColor=Platinum&clotheType=ShirtCrewNeck&clotheColor=PastelYellow&eyeType=Side&eyebrowType=Default&mouthType=Tongue&skinColor=Black",
                "playing": ["Keyboard"]
            }
        ]
    },
    {
        "_id": "e505",
        "title": "Lucid Dreams",
        "description": "Let's all get together and jammm...",
        "imgUrl": "http://some-img",
        "capacity": 5,
        "location": {
            "region": "Center",
            "city": "Jerusalem",
            "address": "Agripas 16",
            "lat": 31.768318,
            "lng": 35.213711
        },
        "createdBy": {
            "_id": "u107",
            "fullname": "Kobi Oz",
            "imgUrl": "https://avataaars.io/?avatarStyle=Circle&topType=NoHair&accessoriesType=Blank&hairColor=Blonde&facialHairType=MoustacheMagnum&facialHairColor=BlondeGolden&clotheType=BlazerSweater&eyeType=Close&eyebrowType=RaisedExcitedNatural&mouthType=Eating&skinColor=Pale"
        },
        "startsAt": Date.now()-1000000,
        "tags": ["Electronic", "Freestyle"],
        "createdAt": 121221453343,
        "msgs": [
            {
                txt: "Welcome!",
                sentBy: "david"
            }
        ],
        "usersGoing": [
            {
                "_id": "u107",
                "fullname": "Kobi Oz",
                "imgUrl": "https://avataaars.io/?avatarStyle=Circle&topType=NoHair&accessoriesType=Blank&hairColor=Blonde&facialHairType=MoustacheMagnum&facialHairColor=BlondeGolden&clotheType=BlazerSweater&eyeType=Close&eyebrowType=RaisedExcitedNatural&mouthType=Eating&skinColor=Pale",
                "playing": ["Singer"]
            },
            {
                "_id": "u103",
                "fullname": "Rami Fortis",
                "imgUrl": "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairTheCaesar&accessoriesType=Round&hairColor=Auburn&facialHairType=Blank&clotheType=GraphicShirt&clotheColor=Pink&graphicType=Skull&eyeType=Wink&eyebrowType=RaisedExcited&mouthType=Grimace&skinColor=Pale",
                "playing": ["Electric-Guitar"]
            },
            {
                "_id": "u104",
                "fullname": "Daniel Salomon",
                "imgUrl": "https://avataaars.io/?avatarStyle=Circle&topType=LongHairCurly&accessoriesType=Wayfarers&hairColor=Black&facialHairType=BeardMagestic&facialHairColor=BrownDark&clotheType=GraphicShirt&clotheColor=White&graphicType=Bat&eyeType=Happy&eyebrowType=UnibrowNatural&mouthType=Disbelief&skinColor=DarkBrown",
                "playing": ["Keyboard"]
            }
        ]
    },
    {
        "_id": "e506",
        "title": "Old Eretz Israel",
        "description": "Only oldies but goldies",
        "imgUrl": "http://some-img",
        "capacity": 13,
        "location": {
            "region": "North",
            "city": "Afula",
            "address": "Agripas 16",
            "lat": 32.609692,
            "lng": 35.287731
        },
        "createdBy": {
            "_id": "u105",
            "fullname": "Yehoram Gaon",
            "imgUrl": "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortCurly&accessoriesType=Blank&hatColor=PastelGreen&hairColor=Red&facialHairType=MoustacheMagnum&facialHairColor=Platinum&clotheType=BlazerSweater&clotheColor=PastelGreen&eyeType=Wink&eyebrowType=UnibrowNatural&mouthType=Disbelief&skinColor=Light",
        },
        "startsAt": Date.now()-1000000,
        "tags": ["Oldies", "Folk"],
        "createdAt": 121221453343,
        "msgs": [
            {
                txt: "Welcome!",
                sentBy: "david"
            }
        ],
        "usersGoing": [
            {
                "_id": "u105",
                "fullname": "Yehoram Gaon",
                "imgUrl": "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortCurly&accessoriesType=Blank&hatColor=PastelGreen&hairColor=Red&facialHairType=MoustacheMagnum&facialHairColor=Platinum&clotheType=BlazerSweater&clotheColor=PastelGreen&eyeType=Wink&eyebrowType=UnibrowNatural&mouthType=Disbelief&skinColor=Light",
                "playing": ["Singer"]
            },
            {
                "_id": "u103",
                "fullname": "Rami Fortis",
                "imgUrl": "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairTheCaesar&accessoriesType=Round&hairColor=Auburn&facialHairType=Blank&clotheType=GraphicShirt&clotheColor=Pink&graphicType=Skull&eyeType=Wink&eyebrowType=RaisedExcited&mouthType=Grimace&skinColor=Pale",
                "playing": ["Electric-Guitar"]
            },
            {
                "_id": "u104",
                "fullname": "Daniel Salomon",
                "imgUrl": "https://avataaars.io/?avatarStyle=Circle&topType=LongHairCurly&accessoriesType=Wayfarers&hairColor=Black&facialHairType=BeardMagestic&facialHairColor=BrownDark&clotheType=GraphicShirt&clotheColor=White&graphicType=Bat&eyeType=Happy&eyebrowType=UnibrowNatural&mouthType=Disbelief&skinColor=DarkBrown",
                "playing": ["Keyboard"]
            },
            {
                "_id": "u101",
                "fullname": "Tomer Yosef",
                "imgUrl": "https://avataaars.io/?avatarStyle=Circle&topType=Hat&accessoriesType=Blank&facialHairType=BeardMedium&facialHairColor=BrownDark&clotheType=CollarSweater&clotheColor=Gray02&eyeType=Default&eyebrowType=Default&mouthType=Smile&skinColor=Light",
                "playing": ["Drums"]
            }
        ]
    }
]

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






