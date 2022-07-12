// //represent empty molehill or invalid location
// import React from 'react'
// import molecontainer from './molecontainer'
// import mole from './mole'

// export default function emptyslot() {
//   return (
//     <div>
//       <h1>empty slot</h1>
//     </div>
//   )
// }


import { useEffect } from "react"
import MoleHill from './molehill.png'

const emptyslot = (props) => {

    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.toggle(true)
        }, randSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img style={{'width': '30vw'}} src={MoleHill} />
        </div>
    )
}

export default emptyslot