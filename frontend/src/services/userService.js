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
        "createdAt": 12122134434,
        "fullname": "Tomer Yosef",
        "username": "TomerTheCreator",
        "password": "123456",
        "imgUrl": "https://avataaars.io/?avatarStyle=Circle&topType=Hat&accessoriesType=Blank&facialHairType=BeardMedium&facialHairColor=BrownDark&clotheType=CollarSweater&clotheColor=Gray02&eyeType=Default&eyebrowType=Default&mouthType=Smile&skinColor=Light",
        "tags": ["Funk", "Rock", "Hip-Hop", "World"],
        "about": "Really open for all kinds of jams and collaborations ;)",
        "talents": ["Guitar", "Singer", "Drums"],
        "location": {
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
                "fullname": "Shiri Mimon",
                "imgUrl": "https://avataaars.io/?avatarStyle=Circle&topType=LongHairNotTooLong&accessoriesType=Round&hairColor=Platinum&facialHairType=Blank&facialHairColor=Platinum&clotheType=GraphicShirt&clotheColor=PastelBlue&graphicType=Skull&eyeType=Default&eyebrowType=RaisedExcited&mouthType=Concerned&skinColor=DarkBrown"
            },
            {
                "_id": "u112",
                "fullname": "Dana Brger",
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
    }
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
    return await httpService.post('auth/logout')
}
function _saveLocalUser(user) {
    sessionStorage.setItem('loggedinUser', JSON.stringify(user))
    return user
}

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem('loggedinUser'))
}

