import { useState } from 'react'
import './App.css'

function App() {
  const [add, updateAdd] = useState(0)
  const [sub, updateSub] = useState(100)
  const [multi, updateMulti] = useState(12)

  return (
    <>
      <div>
        Addition Value is: {add}
      </div>
      <button onClick={()=>{updateAdd(add+1)}}>Addition</button>
      <div><br /></div>
      <div>
        Substraction Value is: {sub}
      </div>
      <button onClick={()=>{updateSub(sub-1)}}>Substraction</button>

      <div><br /></div>
      <div>Multiplication is: {multi} </div>
      <button onClick={()=>{updateMulti(multi * 2)}}>Multiplication</button>

    </>
  )
}

export default App
