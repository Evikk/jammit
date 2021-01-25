import Bass from '../assets/img/inst-icons/Bass.svg'
import Drums from '../assets/img/inst-icons/Drums.svg'
import ElectricGuitar from '../assets/img/inst-icons/ElectricGuitar.png'
import Keyboard from '../assets/img/inst-icons/Keyboard.svg'
import Singer from '../assets/img/inst-icons/Singer.svg'
import Saxophone from '../assets/img/inst-icons/Saxophone.svg'
import Trumpet from '../assets/img/inst-icons/Trumpet.svg'

const instIcons = {
    Bass,
    Drums,
    ElectricGuitar,
    Keyboard,
    Singer,
    Saxophone,
    Trumpet
}

function getJamIcons (jam){
    const iconSrcs = []
    jam.usersGoing.forEach((user)=>{
        user.playing.forEach(inst=>{
            const src = instIcons[inst]
            iconSrcs.push(src)
        })
    })
    return Array.from(new Set(iconSrcs))
}

function getUserIcons(user) {
    const iconSrcs = []
    user.talents.forEach((talent)=>{
        const src = instIcons[talent]
        iconSrcs.push(src)
    })
    return Array.from(new Set(iconSrcs))
    
}

export const iconService = {
    getJamIcons,
    getUserIcons,
}