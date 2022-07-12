// //decides which child component is rendered
// import React from 'react'
// import mole from './mole'
// import emptyslot from './emptyslot'

// export default function molecontainer() {
//   return (
//     <div>
//       <h1>molecontainer</h1>
//     </div>
//   )
// }


import { useState } from 'react'
import mole from './mole'
import emptyslot from './emptyslot'

const molecontainer = (props) => {
    let [theMole, setTheMole] = useState(false)

    const handleClick = (e) => {
        props.setScore(props.score + 1)
        setTheMole(false)
    }

    let displayMole = theMole ? <Mole setScore={props.setScore} toggle={setTheMole} handleClick={handleClick} /> : <EmptySlot toggle={setTheMole} />

    return (
        <div style={{'display': 'inline-block', 'width': '30vw'}}>
            {displayMole}
        </div>
    )
}

export default molecontainer