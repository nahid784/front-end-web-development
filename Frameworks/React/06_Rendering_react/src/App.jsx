import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)
  const [showbtn, setShowbtn] = useState(false)
  // for rendering list
  const [todos, setTodos] = useState([
    {
      title: "hey",
      desc: "It is description"
    },
    {
      title: "hey again",
      desc: "It is description 2"
    },
  ])

  // creating small component
  const Todo = ({todo})=>{
    return(<>
    <div className="m-4 border border-1 border-yellow-400">
    <div className="todo">{todo.title}</div>
    <div className="todo">{todo.desc}</div>
    </div>
    </>)
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {showbtn ? <button>Button showing as Usestate is true.</button> : "UseState is False now"}
      <br /> <br />
      {/* better way */}
      {showbtn && <button>It will show when its true</button> }

      {/* for rendering list */}
      {todos.map(todo=>{
        return <Todo key={todo.title} todo = {todo}/>
      })}

      <div className="card">

        <button onClick={()=> setShowbtn(!showbtn)}>Show Button</button>
        <br /> 
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
