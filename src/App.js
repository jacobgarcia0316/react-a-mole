import React, {useState} from 'react'
import molecontainer from './components/molecontainer'
import mole from './components/mole'
import emptyslot from './components/emptyslot'
import './App.css'

// export default function App() {
//     let [score, setScore] = useState(0)

//     const createMoleHill = () => {
//       let hills =[] 
//       for (let i=0; i<10; i++) {
//         hills.push(
//           <molecontainer
//           key = 
//           setScore = {setScore}
//           score = {score} />
//         )
//       }
//       return (
//         <div>
//           {hills}
//         </div>
//       )
//     }
//     return (
//       <div className="App">
//         <h1>React-a-Mole</h1>
//         {score}
//         {createMoleHill()}
//       </div>
//     )
//   return (
//     <div>
//       <h1>hello it works</h1>
//     </div>
//   )
// }

function App() {
  let [score, setScore] = useState(0)

  const createMoleHill = () => {
    let hills = []
    for(let i = 0; i < 9; i++) {
      hills.push(<molecontainer key={i} setScore={setScore} score={score} />)
    }
    return (
      <div>
        { hills }
      </div>
    )
  }
  
  return (
    <div className="App">
      <h1>React-A-Mole!</h1>
      {score}
      {createMoleHill()}
    </div>
  );
}

export default App;