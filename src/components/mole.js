// // represent displayed mole. 
// // contain timer for mole lifespan
// import React, { useEffect } from 'react'
// import molecontainer from './molecontainer'
// import emptyslot from './emptyslot'
// import molepic from './mole.png'
// import molehill from './molehill.png'

// export default function mole(props) {
//     useEffect (() => {
//         let randSeconds = Math.ceil(Math.random() * 4000)
//         let timer = setTimeout (() => {
//             props.setDisplayMode(false)
//         }, randSeconds)
//     })
//     return (
//         <div>
//             <img style = {{'width':'50vw'}}
//             src={molepic}
//             onClick={props.handleClick}/>
//         </div>
//     )
//   return (
//     <div>
//       <h1>mole</h1>
//     </div>
//   )
// }

import { useEffect } from 'react'
import molepic from './mole.png'

const mole = (props) => {

    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 10000)
        let timer = setTimeout(() => {
            props.toggle(false)
        }, randSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img style={{'width': '30vw'}} src={molepic} onClick={props.handleClick} />
        </div>
    )
}

export default mole