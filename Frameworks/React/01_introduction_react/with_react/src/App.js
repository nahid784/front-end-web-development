import './App.css';
import { useState } from 'react';
import Navbar from './Components/navbar';
import Footer from './Components/Footer';

function App() {

  const [value, setValue] = useState(0)
  return (
    <div className="App">

      <Navbar logoText="Nahid Hasan"/>
      <div className="value">{value}</div>
      <button onClick={()=>{setValue(value + 1)}}>Click Me</button>
    <Footer/>
    </div>
  );
}

export default App;
