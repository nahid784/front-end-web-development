// jsx is where we can ue both html and javascript
// It is more strict than html
// need to close all the tags
// we can return only same tag once

import Footer from "./components/Footer"
import Navbar from "./components/navbar"
import Card from "./components/Card"

// use classname instead of class
function App() {

  return (
    <>
      <Navbar />
      <main>
        It will contain the main contents of the website.
      </main>
      <div className="cards">
        <Card title="First Card" description="First Card Description"/>

        <Card title="2nd Card" description="2nd Card Description"/>

        <Card title="3rd Card" description="Third Card Description"/>

        <Card title="4th Card" description="4th Card Description"/>       
      </div>
      <Footer />
    </>
  )
}

export default App
