// import { storageService } from './asyncStorageService'
import { httpService } from './httpService'


export const userService = {
    login,
    logout,
    signup,
    getUsers,
    getById,
    remove,
    update,
}

var users = [
    {
        "_id": "u101",
        "fullname": "Tomer Yosef",
        "imgUrl": "https://avataaars.io/?avatarStyle=Circle&topType=Hat&accessoriesType=Blank&facialHairType=BeardMedium&facialHairColor=BrownDark&clotheType=CollarSweater&clotheColor=Gray02&eyeType=Default&eyebrowType=Default&mouthType=Smile&skinColor=Light",
        "createdAt": 12122134434,
        "username": "TomerTheCreator",
        "password": "123456",
        "tags": ["Funk", "Rock", "Hip-Hop", "World"],
        "about": "Really open for all kinds of jams and collaborations ;)",
        "talents": ["Singer", "Drums", "Guitar"],
        "location": {
            "region" : "Center",
            "city": "Tel Aviv",
            "lat": 32.61308,
            "lng": 34.1413
        },
        "followers": [
            {
                "_id": "u103",
                "fullname": "Rami Fortis",
                "imgUrl": "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairTheCaesar&accessoriesType=Round&hairColor=Auburn&facialHairType=Blank&clotheType=GraphicShirt&clotheColor=Pink&graphicType=Skull&eyeType=Wink&eyebrowType=RaisedExcited&mouthType=Grimace&skinColor=Pale"
            },
            {
                "_id": "u111",
                "fullname": "Shiri Maimon",
                "imgUrl": "https://avataaars.io/?avatarStyle=Circle&topType=LongHairNotTooLong&accessoriesType=Round&hairColor=Platinum&facialHairType=Blank&facialHairColor=Platinum&clotheType=GraphicShirt&clotheColor=PastelBlue&graphicType=Skull&eyeType=Default&eyebrowType=RaisedExcited&mouthType=Concerned&skinColor=DarkBrown"
            },
            {
                "_id": "u112",
                "fullname": "Dana Berger",
                "imgUrl": "https://avataaars.io/?avatarStyle=Circle&topType=LongHairFrida&accessoriesType=Kurt&hairColor=Black&facialHairType=BeardLight&facialHairColor=Black&clotheType=ShirtCrewNeck&clotheColor=White&eyeType=Surprised&eyebrowType=AngryNatural&mouthType=Tongue&skinColor=Pale"
            }
        ],
        "following": [
            {
                "_id": "u107",
                "fullname": "Kobi Oz",
                "imgUrl": "https://avataaars.io/?avatarStyle=Circle&topType=Eyepatch&facialHairType=Blank&clotheType=CollarSweater&clotheColor=Red&eyeType=Wink&eyebrowType=RaisedExcitedNatural&mouthType=Concerned&skinColor=Light"
            }
        ]
    },
    {
        "_id": "u102",
        "createdAt": 12122134434,
        "fullname": "Moshik Afia",
        "username": "MoshikTheTerminator",
        "password": "1234567",
        "imgUrl": "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairDreads01&accessoriesType=Blank&hairColor=Blonde&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=BlazerSweater&eyeType=EyeRoll&eyebrowType=FlatNatural&mouthType=Smile&skinColor=Light",
        "tags": ["Israeli", "Yam-Tichoni"],
        "about": "Open to any kind of offer",
        "talents": [ "Singer", "Darbocka"],
        "location": {
            "city": "Beer Sheva",
            "region" : "South",
            "lat": 32.61308,
            "lng": 34.1413
        },
        "followers": [
            {
                "_id": "u103",
                "fullname": "Rami Fortis",
                "imgUrl": "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairTheCaesar&accessoriesType=Round&hairColor=Auburn&facialHairType=Blank&clotheType=GraphicShirt&clotheColor=Pink&graphicType=Skull&eyeType=Wink&eyebrowType=RaisedExcited&mouthType=Grimace&skinColor=Pale"
            },
            {
                "_id": "u107",
                "fullname": "Kobi Oz",
                "imgUrl": "https://avataaars.io/?avatarStyle=Circle&topType=NoHair&accessoriesType=Blank&hairColor=Blonde&facialHairType=MoustacheMagnum&facialHairColor=BlondeGolden&clotheType=BlazerSweater&eyeType=Close&eyebrowType=RaisedExcitedNatural&mouthType=Eating&skinColor=Pale"
            }
        ],
        "following": [
            {
                "_id": "u107",
                "fullname": "Kobi Oz",
                "imgUrl": "https://avataaars.io/?avatarStyle=Circle&topType=NoHair&accessoriesType=Blank&hairColor=Blonde&facialHairType=MoustacheMagnum&facialHairColor=BlondeGolden&clotheType=BlazerSweater&eyeType=Close&eyebrowType=RaisedExcitedNatural&mouthType=Eating&skinColor=Pale"
            }
        ]
    },
    {
        "_id": "u104",
        "createdAt": 12122134434,
        "fullname": "Daniel Salomon",
        "username": "fishfish",
        "password": "123",
        "imgUrl": "https://avataaars.io/?avatarStyle=Circle&topType=LongHairCurly&accessoriesType=Wayfarers&hairColor=Black&facialHairType=BeardMagestic&facialHairColor=BrownDark&clotheType=GraphicShirt&clotheColor=White&graphicType=Bat&eyeType=Happy&eyebrowType=UnibrowNatural&mouthType=Disbelief&skinColor=DarkBrown",
        "tags": ["Rock", "Indie"],
        "about": "having a relationship with My Piano",
        "talents": [ "Singer", "ElectricGuitar"],
        "location": {
            "city": "Holon",
            "region" : "Center",
            "lat": null,
            "lng": null
        },
        "followers": [
            {
                "_id": "u101",
                "fullname": "Tomer Yosef",
                "imgUrl": "https://avataaars.io/?avatarStyle=Circle&topType=Hat&accessoriesType=Blank&facialHairType=BeardMedium&facialHairColor=BrownDark&clotheType=CollarSweater&clotheColor=Gray02&eyeType=Default&eyebrowType=Default&mouthType=Smile&skinColor=Light"
            },
            {
                "_id": "u107",
                "fullname": "Kobi Oz",
                "imgUrl": "https://avataaars.io/?avatarStyle=Circle&topType=NoHair&accessoriesType=Blank&hairColor=Blonde&facialHairType=MoustacheMagnum&facialHairColor=BlondeGolden&clotheType=BlazerSweater&eyeType=Close&eyebrowType=RaisedExcitedNatural&mouthType=Eating&skinColor=Pale"
            },
            {
                "_id": "u103",
                "fullname": "Rami Fortis",
                "imgUrl": "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairTheCaesar&accessoriesType=Round&hairColor=Auburn&facialHairType=Blank&clotheType=GraphicShirt&clotheColor=Pink&graphicType=Skull&eyeType=Wink&eyebrowType=RaisedExcited&mouthType=Grimace&skinColor=Pale"
            }
        ],
        "following": [
        ]
    },
    {
        "_id": "u105",
        "fullname": "Yehoram Gaon",
        "imgUrl": "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortCurly&accessoriesType=Blank&hatColor=PastelGreen&hairColor=Red&facialHairType=MoustacheMagnum&facialHairColor=Platinum&clotheType=BlazerSweater&clotheColor=PastelGreen&eyeType=Wink&eyebrowType=UnibrowNatural&mouthType=Disbelief&skinColor=Light",
        "createdAt": 12122134434,
        "username": "Yehoram Hacham",
        "password": "123",
        "tags": ["Oldies"],
        "about": "chilling with young musicians",
        "talents": [ "Singer", "Songwriter"],
        "location": {
            "city": "Kfar-Saba",
            "region" : "Center",
            "lat": null,
            "lng": null
        },
        "followers": [
            {
                "_id": "u101",
                "fullname": "Tomer Yosef",
                "imgUrl": "https://avataaars.io/?avatarStyle=Circle&topType=Hat&accessoriesType=Blank&facialHairType=BeardMedium&facialHairColor=BrownDark&clotheType=CollarSweater&clotheColor=Gray02&eyeType=Default&eyebrowType=Default&mouthType=Smile&skinColor=Light"
            },
            {
                "_id": "u107",
                "fullname": "Kobi Oz",
                "imgUrl": "https://avataaars.io/?avatarStyle=Circle&topType=NoHair&accessoriesType=Blank&hairColor=Blonde&facialHairType=MoustacheMagnum&facialHairColor=BlondeGolden&clotheType=BlazerSweater&eyeType=Close&eyebrowType=RaisedExcitedNatural&mouthType=Eating&skinColor=Pale"
            },
            {
                "_id": "u103",
                "fullname": "Rami Fortis",
                "imgUrl": "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairTheCaesar&accessoriesType=Round&hairColor=Auburn&facialHairType=Blank&clotheType=GraphicShirt&clotheColor=Pink&graphicType=Skull&eyeType=Wink&eyebrowType=RaisedExcited&mouthType=Grimace&skinColor=Pale"
            },
            {
                "_id": "u104",
                "fullname": "Daniel Salomon",
                "imgUrl": "https://avataaars.io/?avatarStyle=Circle&topType=LongHairCurly&accessoriesType=Wayfarers&hairColor=Black&facialHairType=BeardMagestic&facialHairColor=BrownDark&clotheType=GraphicShirt&clotheColor=White&graphicType=Bat&eyeType=Happy&eyebrowType=UnibrowNatural&mouthType=Disbelief&skinColor=DarkBrown"
            }
        ],
        "following": [
        ]
    },
    {
        "_id": "u103",
        "createdAt": 12122134434,
        "fullname": "Rami Fortis",
        "username": "rami666rOcK",
        "password": "123",
        "imgUrl": "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairTheCaesar&accessoriesType=Round&hairColor=Auburn&facialHairType=Blank&clotheType=GraphicShirt&clotheColor=Pink&graphicType=Skull&eyeType=Wink&eyebrowType=RaisedExcited&mouthType=Grimace&skinColor=Pale",
        "tags": ["Rock", "Indie"],
        "about": "Bring it onnn!!!",
        "talents": [ "Singer", "ElectricGuitar"],
        "location": {
            "city": "Raanana",
            "region" : "Center",
            "lat": 32.61308,
            "lng": 34.1413
        },
        "followers": [
            {
                "_id": "u101",
                "fullname": "Tomer Yosef",
                "imgUrl": "https://avataaars.io/?avatarStyle=Circle&topType=Hat&accessoriesType=Blank&facialHairType=BeardMedium&facialHairColor=BrownDark&clotheType=CollarSweater&clotheColor=Gray02&eyeType=Default&eyebrowType=Default&mouthType=Smile&skinColor=Light"
            },
            {
                "_id": "u107",
                "fullname": "Kobi Oz",
                "imgUrl": "https://avataaars.io/?avatarStyle=Circle&topType=NoHair&accessoriesType=Blank&hairColor=Blonde&facialHairType=MoustacheMagnum&facialHairColor=BlondeGolden&clotheType=BlazerSweater&eyeType=Close&eyebrowType=RaisedExcitedNatural&mouthType=Eating&skinColor=Pale"
            },
            {
                "_id": "u103",
                "fullname": "Yehoram Gaon",
                "imgUrl": "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortCurly&accessoriesType=Blank&hatColor=PastelGreen&hairColor=Red&facialHairType=MoustacheMagnum&facialHairColor=Platinum&clotheType=BlazerSweater&clotheColor=PastelGreen&eyeType=Wink&eyebrowType=UnibrowNatural&mouthType=Disbelief&skinColor=Light"
            },
            {
                "_id": "u104",
                "fullname": "Daniel Salomon",
                "imgUrl": "https://avataaars.io/?avatarStyle=Circle&topType=LongHairCurly&accessoriesType=Wayfarers&hairColor=Black&facialHairType=BeardMagestic&facialHairColor=BrownDark&clotheType=GraphicShirt&clotheColor=White&graphicType=Bat&eyeType=Happy&eyebrowType=UnibrowNatural&mouthType=Disbelief&skinColor=DarkBrown"
            }
        ],
        "following": [
        ]
    },
    {
        "_id": "u108",
        "fullname": "Idan Raichel",
        "imgUrl": "https://avataaars.io/?avatarStyle=Circle&topType=Turban&accessoriesType=Wayfarers&hatColor=Black&facialHairType=BeardLight&facialHairColor=Platinum&clotheType=ShirtCrewNeck&clotheColor=PastelYellow&eyeType=Side&eyebrowType=Default&mouthType=Tongue&skinColor=Black",
        "createdAt": 12122134434,
        "username": "Rasta",
        "password": "123",
        "tags": ["World"],
        "about": "producer, keyboardist, lyricist, composer and performer. During a career spanning a mere 17 years, Idan has become not only one of the most successful artists in Israel but also one of Israel’s leading music ambassadors abroad, with tours which included performances at some of the leading festivals as well as shows in the most prestigious venues",
        "talents": [ "Singer", "Songwriter","ElectricGuitar","Rock", "Indie"],
        "location": {
            "city": "Tel-Aviv",
            "region" : "Center",
            "lat": null,
            "lng": null
        },
        "followers": [
            {
                "_id": "u101",
                "fullname": "Tomer Yosef",
                "imgUrl": "https://avataaars.io/?avatarStyle=Circle&topType=Hat&accessoriesType=Blank&facialHairType=BeardMedium&facialHairColor=BrownDark&clotheType=CollarSweater&clotheColor=Gray02&eyeType=Default&eyebrowType=Default&mouthType=Smile&skinColor=Light"
            },
            {
                "_id": "u107",
                "fullname": "Kobi Oz",
                "imgUrl": "https://avataaars.io/?avatarStyle=Circle&topType=NoHair&accessoriesType=Blank&hairColor=Blonde&facialHairType=MoustacheMagnum&facialHairColor=BlondeGolden&clotheType=BlazerSweater&eyeType=Close&eyebrowType=RaisedExcitedNatural&mouthType=Eating&skinColor=Pale"
            },
            {
                "_id": "u103",
                "fullname": "Rami Fortis",
                "imgUrl": "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairTheCaesar&accessoriesType=Round&hairColor=Auburn&facialHairType=Blank&clotheType=GraphicShirt&clotheColor=Pink&graphicType=Skull&eyeType=Wink&eyebrowType=RaisedExcited&mouthType=Grimace&skinColor=Pale"
            },
            {
                "_id": "u104",
                "fullname": "Daniel Salomon",
                "imgUrl": "https://avataaars.io/?avatarStyle=Circle&topType=LongHairCurly&accessoriesType=Wayfarers&hairColor=Black&facialHairType=BeardMagestic&facialHairColor=BrownDark&clotheType=GraphicShirt&clotheColor=White&graphicType=Bat&eyeType=Happy&eyebrowType=UnibrowNatural&mouthType=Disbelief&skinColor=DarkBrown"
            }
        ],
        "following": [
        ]
    },
]

window.userService = userService
// Note: due to async, must run one by one...
// userService.signup({fullname: 'Puki Norma', username: 'user1', password:'123',score: 100, isAdmin: false})
// userService.signup({fullname: 'Master Adminov', username: 'admin', password:'123', score: 100, isAdmin: true})

function getUsers() {
    // return storageService.query('user')
    // return httpService.get(`user`)
    return users
}

function getById(userId) {
    // return storageService.get('user', userId)
    // return httpService.get(`user/${userId}`)
    return users.find(user => {
        return user._id === userId
    })
}
function remove(userId) {
    // return storageService.remove('user', userId)
    return httpService.delete(`user/${userId}`)
}

async function update(user) {
    // return storageService.put('user', user)
    user = await httpService.put(`user/${user._id}`, user)
    // Handle case in which admin updates other user's details
    if (getLoggedinUser()._id === user._id) _saveLocalUser(user)
}


async function login(userCred) {
    // const users = await storageService.query('user')
    const user = users.find(user => user.username === userCred.username)
    if (user.password === userCred.password) _saveLocalUser(user)
    return user

    // const user = await httpService.post('auth/login', userCred)
    // if (user) return _saveLocalUser(user)
}
async function signup(userCred) {
    // const user = await storageService.post('user', userCred)
    const user = await httpService.post('auth/signup', userCred)
    return _saveLocalUser(user)
}
async function logout() {
    sessionStorage.clear()
    // return await httpService.post('auth/logout')
}
function _saveLocalUser(user) {
    sessionStorage.setItem('loggedinUser', JSON.stringify(user))
    return user
}

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem('loggedinUser'))
}

