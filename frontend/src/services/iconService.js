import Bass from '../assets/img/inst-icons/Bass.svg'
import Drums from '../assets/img/inst-icons/Drums.svg'
import ElectricGuitar from '../assets/img/inst-icons/ElectricGuitar.png'
import Keyboard from '../assets/img/inst-icons/Keyboard.svg'
import Singer from '../assets/img/inst-icons/Singer.svg'
import Saxophone from '../assets/img/inst-icons/Saxophone.svg'
import Trumpet from '../assets/img/inst-icons/Trumpet.svg'

const instIcons = [
    {Bass},
    {Drums},
    {ElectricGuitar},
    {Keyboard},
    {Singer},
    {Saxophone},
    {Trumpet}
]

function displayJamIcons (jam){
    return instIcons.map((icon, idx)=>{
        const user = jam.usersGoing.find(currUser => {
            return currUser.playing.some(inst=>{
                const instName = Object.keys(icon)[0]
                return instName === inst
            })
        })
        if (user) return <div key={idx} className="inst-icon">
            <img src={Object.values(icon)[0]} alt="instrument"/>
        </div>
    })
}

function displayUserIcons(user) {
    return instIcons.map((icon, idx)=>{
        const talent = user.talents.find(talent=>{
            return (talent === Object.keys(icon)[0])
        })
        if (talent) return <img key={idx} className="user-inst-icon" src={Object.values(icon)[0]} alt="instrument"/>
    })
}

export const iconService = {
    displayJamIcons,
    displayUserIcons,
}